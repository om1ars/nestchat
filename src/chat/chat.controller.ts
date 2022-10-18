import { Controller, Get, HttpStatus, Response } from '@nestjs/common';

@Controller('message')
export class ChatController {
  constructor(private chatService: ChatSerivce) {}

  @Get()
  async getAllMessages(@Response() res) {
    const messages = await this.chatService.getMessage();
    res.status(HttpStatus.OK).json(messages);
  }
}
