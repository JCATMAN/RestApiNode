import db from "../db/models";

export default class MessageService {
  async findAll() {
    const { messages } = db;
    return await messages.findAll();
  }
}
