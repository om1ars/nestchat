import { Message } from './types/Message.type';

export class ChatService {
  message: Message[] = [];

  getMessages(): Message[] {
    return this.message;
  }

  storeMessage(message: Message) {
    this.message.push(message);
  }
}
