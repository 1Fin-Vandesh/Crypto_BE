import { Module } from '@nestjs/common';
import { TopGainerLoserWebsocketGateWay } from './top_gainer_loser_websocket.gateway';
import { MasterService } from '../master.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [TopGainerLoserWebsocketGateWay, MasterService],
})
export class MasterGatewayModule {}
