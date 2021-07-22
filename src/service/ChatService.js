import db from "../db/models";

export default class ChatService {
  async findAll() {
    const { chats } = db;
    return await chats.findAll();
  }
}
