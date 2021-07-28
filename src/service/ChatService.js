import { Op } from "sequelize";
import db from "../db/models";

export default class ChatService {
  async findAll() {
    const { chats, messages, admin, contacts } = db;
    return await chats.findAll({
      include: [{ model: messages }, { model: admin }, { model: contacts }],
    });
  }

  async findOrCreate(contactId, adminId) {
    console.log({ contactId, adminId });
    const { chats } = db;
    return await chats.findOrCreate({
      where: { contactId },
      default: {
        contactId,
        adminId,
      },
    });
  }
}
