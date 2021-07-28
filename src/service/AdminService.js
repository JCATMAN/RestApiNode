import db from "../db/models";

export default class AdminService {
  async findAll() {
    const { admin } = db;
    return await admin.findAll();
  }

  async findOne() {
    const { admin } = db;
    return await admin.findOne();
  }
}
