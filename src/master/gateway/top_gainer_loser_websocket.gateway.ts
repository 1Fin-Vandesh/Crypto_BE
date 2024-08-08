import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { MasterService } from '../master.service';

@WebSocketGateway()
export class TopGainerLoserWebsocketGateWay
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly masterService: MasterService) {}

  afterInit(server: Server) {
    console.log('Initialized');
  }

  handleDisconnect(client: Socket) {
    console.log(`Client Disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client Connected: ${client.id}`);
  }

  async sendTopGainersSocket() {
    const response = await this.masterService.topGainerCryptos();
    this.server.emit('topGainersSocket', response);
  }

  async sendTopLoserSocket() {
    const response = await this.masterService.topGainerCryptos();
    this.server.emit('topGainersSocket', response);
  }
}
