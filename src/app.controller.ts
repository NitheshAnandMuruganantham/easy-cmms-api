import { Controller, Get } from '@nestjs/common';
import {
  Body,
  Param,
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
import SessionContainer from './types/session';
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
  @UseGuards(new AuthGuard())
  async postExample(
    @Session() session: SessionContainer,
  ): Promise<{ token: any }> {
    const jwt = session.Session.getAccessTokenPayload()['jwt'];
    return { token: jwt };
  }

  @UseGuards(new AuthGuard())
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

  @UseGuards(new AuthGuard())
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const id = uuid();
    const resp = await this.s3Service.uploadImage(file, id);
    return resp;
  }

  @UseGuards(new AuthGuard())
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

  @UseGuards(new AuthGuard())
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

  @UseGuards(new AuthGuard())
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

  @UseGuards(new AuthGuard())
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
  @UseGuards(new AuthGuard())
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
  @UseGuards(new AuthGuard())
  raiseTicket(@Session() session: SessionContainer, @Body() data: any) {
    return this.appService.raiseTicket(session, data);
  }

  @Get('getBlockSettings')
  @UseGuards(new AuthGuard())
  async getBlockSettings(@Session() session: SessionContainer) {
    return this.appService.getBlockSettings(session);
  }

  @Post('inputPastMaintenance')
  @UseGuards(new AuthGuard())
  async inputPastMaintenance(
    @Session() session: SessionContainer,
    @Body() data: any,
  ) {
    return this.appService.inputPastMaintenance(session, data);
  }

  @Post('punchProduction')
  @UseGuards(new AuthGuard())
  async punchProduction(
    @Session() session: SessionContainer,
    @Body() data: any,
  ) {
    return this.appService.punchProduction(session, data);
  }

  @Post('requestSpare')
  @UseGuards(new AuthGuard())
  async requestSpare(@Session() session: SessionContainer, @Body() data: any) {
    return this.appService.requestSpares(session, data);
  }

  @Get('/getAllReplacementsRequests')
  @UseGuards(new AuthGuard())
  async getAllReplacementsRequests(@Session() session: SessionContainer) {
    return this.appService.getAllReplacementsRequests(session);
  }
}
