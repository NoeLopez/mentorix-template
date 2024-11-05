/*
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  sendMessage(event: string, data: any) {
    this.server.emit(event, data);
  }
}*/
