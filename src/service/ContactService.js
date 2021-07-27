import db from "../db/models";

export default class ContactService {
  async findAll() {
    const { contacts } = db;
    return await contacts.findAll();
  }

  async findOrCreate(fullname) {
    const { contacts } = db;
    return await contacts.findOrCreate({
      where: { fullname },
      default: {
        fullname,
      },
    });
  }
}