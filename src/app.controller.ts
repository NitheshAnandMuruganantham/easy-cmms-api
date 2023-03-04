import { Controller, Get } from '@nestjs/common';
import {
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { S3Service } from './s3/s3.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { v4 as uuid } from 'uuid';
import { Session } from './auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { PrismaService } from 'nestjs-prisma';
import { ForbiddenException } from '@nestjs/common/exceptions';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  @Get('/')
  getHello(): string {
    return `
    <div style="width: 100%; height: 100%;" id='embedded-sandbox'></div>
<script src="https://embeddable-sandbox.cdn.apollographql.com/_latest/embeddable-sandbox.umd.production.min.js"></script> 
<script>
  new window.EmbeddedSandbox({
    target: '#embedded-sandbox',
    initialEndpoint: 'http://localhost:8080/graphql',
    includeCookies: false,
  });
</script>
     
    `;
  }

  @Get('token')
  @UseGuards(new AuthGuard())
  async postExample(
    @Session() session: SessionContainer,
  ): Promise<{ token: any }> {
    const jwt = session.getAccessTokenPayload()['jwt'];
    return { token: jwt };
  }

  @UseGuards(new AuthGuard())
  @Get('/me/profile/status')
  getProfileStatus(
    @Session()
    session: SessionContainer,
  ) {
    const user = this.prisma.users.findUnique({
      where: {
        user_auth_id: session.getUserId(),
      },
    });
    if (user) {
      return user;
    } else {
      throw new ForbiddenException('user not exists !!');
    }
  }

  @UseGuards(new AuthGuard())
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const id = uuid();
    const resp = await this.s3Service.uploadImage(file, id);
    return resp;
  }
}
