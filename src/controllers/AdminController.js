import AdminService from "../service/AdminService";
import MessageService from "../service/MessageService";
import ContactController from "./ContactController";
import ChatController from "./ChatController";
/**
 * In this controller we can find the BUSINESS LOGIC,
 * here is when we process our data but JUST RELATED WITH THE NAME OF CONTROLLER
 */
export default class ChatController {
  /**
   * This is the instance for access to DB Layer
   */
  adminService = new AdminService();
  messageService = new MessageService();
  contactController = new ContactController();
  chatController = new ChatController();

  async findAllAdmins() {
    return await this.adminService.findAll();
  }

  async findAdmin() {
    return await this.adminService.findOne();
  }

  async sendAdminMessage(message, senderId) {
    const contact = await this.contactController.findContactBySenderId(
      senderId
    );
    const admin = await this.adminController.findAdmin();
    const chat = await this.chatController.findOrCreateChats(
      contact.id,
      admin.id
    );
    await this.messageService.create({
      message,
      contactId: contact.id,
      adminId: admin.id,
      chatId: chat.id,
      time: new Date().toISOString(),
      isSendByAdmin: true,
    });
  }
}
