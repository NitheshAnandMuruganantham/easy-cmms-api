import { Controller, Get } from '@nestjs/common';
import {
  Body,
  Post,
  SetMetadata,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { S3Service } from './s3/s3.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';
import { Session } from './auth/session.decorator';
import SessionContainer from './types/session';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { IS_PUBLIC_KEY } from './auth/public.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  @Get('/')
  @SetMetadata(IS_PUBLIC_KEY, true)
  sandbox(): string {
    return `
      <div style="width: 100%; height: 100%;" id='embedded-sandbox'></div>
  <script src="https://embeddable-sandbox.cdn.apollographql.com/_latest/embeddable-sandbox.umd.production.min.js"></script>
  <script>
    new window.EmbeddedSandbox({
      target: '#embedded-sandbox',
      initialEndpoint: 'http://localhost:8000/graphql',
      includeCookies: false,
    });
  </script>

      `;
  }

  @Get('/healthz')
  getHello() {
    return this.appService.getHealth();
  }

  @Get('token')
  async postExample(
    @Session() session: SessionContainer,
  ): Promise<{ token: any }> {
    const jwt = session.Session.getAccessTokenPayload()['jwt'];
    return { token: jwt };
  }

  @Get('/me/profile/status')
  getProfileStatus(
    @Session()
    session: SessionContainer,
  ) {
    if (session.User) {
      return session.User;
    } else {
      throw new ForbiddenException('user not exists !!');
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const id = uuid();
    const resp = await this.s3Service.uploadImage(file, id);
    return resp;
  }

  @Post('machines')
  async getMachines(
    @Body()
    {
      take,
      skip,
      orderBy,
      where,
    }: {
      take: number;
      skip: number;
      orderBy: any;
      where: any;
    },
    @Session()
    session: SessionContainer,
  ) {
    return this.appService.getMachines(session, take, skip, orderBy, where);
  }

  @Post('maintenance')
  async getMaintenance(
    @Body()
    {
      take,
      skip,
      orderBy,
      where,
    }: {
      take: number;
      skip: number;
      orderBy: any;
      where: any;
    },
    @Session()
    session: SessionContainer,
  ) {
    return this.appService.getMaintenances(session, take, skip, orderBy, where);
  }

  @Post('PastMaintenance')
  async getPastMaintenance(
    @Body()
    {
      take,
      skip,
      orderBy,
      where,
    }: {
      take: number;
      skip: number;
      orderBy: any;
      where: any;
    },
    @Session()
    session: SessionContainer,
  ) {
    return this.appService.getPastMaintenances(
      session,
      take,
      skip,
      orderBy,
      where,
    );
  }

  @Post('tickets')
  async getTickets(
    @Body()
    {
      take,
      skip,
      orderBy,
      where,
    }: {
      take: number;
      skip: number;
      orderBy: any;
      where: any;
    },
    @Session()
    session: SessionContainer,
  ) {
    return this.appService.getTickets(session, take, skip, orderBy, where);
  }
  @Post('RoutineMaintenance')
  async routineMaintenance(
    @Body()
    {
      take,
      skip,
      orderBy,
      where,
    }: {
      take: number;
      skip: number;
      orderBy: any;
      where: any;
    },
    @Session()
    session: SessionContainer,
  ) {
    return this.appService.getRoutine(session, take, skip, orderBy, where);
  }

  @Post('raiseTicket')
  raiseTicket(@Session() session: SessionContainer, @Body() data: any) {
    return this.appService.raiseTicket(session, data);
  }

  @Get('getBlockSettings')
  async getBlockSettings(@Session() session: SessionContainer) {
    return this.appService.getBlockSettings(session);
  }

  @Post('inputPastMaintenance')
  async inputPastMaintenance(
    @Session() session: SessionContainer,
    @Body() data: any,
  ) {
    return this.appService.inputPastMaintenance(session, data);
  }

  @Post('requestSpare')
  async requestSpare(@Session() session: SessionContainer, @Body() data: any) {
    return this.appService.requestSpares(session, data);
  }

  @Get('/getAllReplacementsRequests')
  async getAllReplacementsRequests(@Session() session: SessionContainer) {
    return this.appService.getAllReplacementsRequests(session);
  }
}
