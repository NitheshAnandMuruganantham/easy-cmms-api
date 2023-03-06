import { Injectable } from '@nestjs/common';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import { TwilioService } from 'supertokens-node/recipe/passwordless/smsdelivery';
import Passwordless from 'supertokens-node/recipe/passwordless';
import Dashboard from 'supertokens-node/recipe/dashboard';
import UserMetadata from 'supertokens-node/recipe/usermetadata';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SupertokensService {
  constructor(
    private config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    supertokens.init({
      appInfo: {
        appName: config.get('APP_NAME'),
        apiDomain: config.get('API_ENDPOINT'),
        websiteDomain: config.get('FRONTEND_URL'),
      },
      supertokens: {
        connectionURI: config.get('SUPERTOKENS_URL'),
        apiKey: config.get('SUPERTOKENS_API_KEY'),
      },
      recipeList: [
        Passwordless.init({
          flowType: 'USER_INPUT_CODE',
          contactMethod: 'PHONE',
          smsDelivery: {
            service: new TwilioService({
              twilioSettings: {
                accountSid: config.get('TWILIO_ACCOUNT_SID'),
                authToken: config.get('TWILIO_AUTH_TOKEN'),
                from: config.get('TWILIO_FROM'),
              },
            }),
          },
          override: {
            apis: (originalImplementation) => {
              return {
                ...originalImplementation,
                async createCodePOST(input) {
                  const user = await prisma.users.findUnique({
                    where: {
                      phone: input['phoneNumber'],
                    },
                  });
                  if (user) {
                    return originalImplementation.createCodePOST(input);
                  } else {
                    return {
                      status: 'GENERAL_ERROR',
                      message:
                        'Please contact the admin. you are not part of organization',
                    };
                  }
                },
                consumeCodePOST: async (input) => {
                  if (originalImplementation.consumeCodePOST === undefined) {
                    throw Error('Should never come here');
                  }

                  const response = await originalImplementation.consumeCodePOST(
                    input,
                  );

                  if (response.status === 'OK') {
                    const { phoneNumber, id } = response.user;
                    if (response.createdNewUser) {
                      const user = await prisma.users.update({
                        where: {
                          phone: phoneNumber,
                        },
                        data: {
                          user_auth_id: id,
                        },
                      });
                      await UserMetadata.updateUserMetadata(id, {
                        role: user.role,
                        name: user.name,
                        user_app_id: `${user.id}`,
                        profile: user.profile,
                      });
                    }
                  }
                  return response;
                },
              };
            },
          },
        }),
        Dashboard.init({
          apiKey: config.get('AUTH_DASHBOARD_API_KEY'),
        }),
        UserMetadata.init(),
        Session.init({
          jwt: {
            enable: true,
          },
        }),
      ],
    });
  }
}
