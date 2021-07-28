import db from "../db/models";

export default class MessageService {
  async findAll() {
    const { messages } = db;
    return await messages.findAll();
  }

  async findAllMessagesByChatId(chatId) {
    const { messages } = db;
    return await messages.findAll({
      where: { chatId },
    });
  }

  async create(message) {
    const { messages } = db;
    return await messages.create(message);
  }
}