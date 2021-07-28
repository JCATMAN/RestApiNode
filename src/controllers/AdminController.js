import AdminService from "../service/AdminService";
import MessageService from "../service/MessageService";
/**
 * In this controller we can find the BUSINESS LOGIC,
 * here is when we process our data but JUST RELATED WITH THE NAME OF CONTROLLER
 */
export default class AdminController {
  /**
   * This is the instance for access to DB Layer
   */
  adminService = new AdminService();
  messageService = new MessageService();

  async findAllAdmins() {
    return await this.adminService.findAll();
  }

  async findAdmin() {
    return await this.adminService.findOne();
  }

  async sendAdminMessage(message, contactId, adminId, chatId) {
    await this.messageService.create({
      message,
      contactId,
      adminId,
      chatId,
      time: new Date().toISOString(),
      isSendByAdmin: true,
    });
  }
}
