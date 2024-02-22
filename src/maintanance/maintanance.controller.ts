import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MaintenanceService } from './maintanance.service';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from 'src/types/session';

@Controller('maintanance')
export class MaintananceController {
  constructor(private readonly maintananceService: MaintenanceService) {}

  @Post('/get')
  async findAll(
    @Session()
    session: SessionContainer,
    @Body('limit') limit: number,
    @Body('offset') offset: number,
    @Body('orderBy') orderBy: any,
    @Body('where') where: any,
  ) {
    return await this.maintananceService.findAll(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Get('/')
  async findOne(
    @Session()
    session: SessionContainer,
    @Param('id') id: number,
  ) {
    return await this.maintananceService.findOne(session, id);
  }

  @Post('/create')
  async createMaintanance(
    @Session()
    session: SessionContainer,
    @Body() createMaintananceInput: any,
  ) {
    return await this.maintananceService.create(
      session,
      createMaintananceInput,
    );
  }

  @Post('/count')
  async maintenanceCount(
    @Session()
    session: SessionContainer,
    @Body('limit') limit: number,
    @Body('offset') offset: number,
    @Body('orderBy') orderBy: any,
    @Body('where') where: any,
  ) {
    return await this.maintananceService.count(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Patch('/update')
  async updateMaintanance(
    @Session()
    session: SessionContainer,
    @Body() updateMaintananceInput: any,
    @Param('id') id: number,
  ) {
    return await this.maintananceService.update(
      session,
      id,
      updateMaintananceInput,
    );
  }

  @Delete('/:id')
  async delete(
    @Session()
    session: SessionContainer,
    @Param('id') id: number,
  ) {
    return await this.maintananceService.remove(session, id);
  }

  @Get('/dropdown')
  async dropdown(
    @Session()
    session: SessionContainer,
  ) {
    return await this.maintananceService.dropdown(session);
  }
}
