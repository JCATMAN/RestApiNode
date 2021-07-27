import MessageService from "../service/MessageService";
import { messageHelper } from "../helpers/messages.helper";
import { sendMessage } from "../helpers/twilio.helper";
import ContactController from "./ContactController";
import AdminController from "./AdminController";
import ChatController from "./ChatController";
/**
 * In this controller we can find the BUSINESS LOGIC,
 * here is when we process our data but JUST RELATED WITH THE NAME OF CONTROLLER
 */
export default class MessageController {
  /**
   * This is the instance for access to DB Layer
   */
  messageService = new MessageService();
  contactController = new ContactController();
  adminController = new AdminController();
  chatController = new ChatController();

  async findAllContacts() {
    return await this.messageService.findAll();
  }

  async saveMessage(message, senderId) {
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
    });
  }

  async sendMessage(message, senderId) {
    switch (message.toLowerCase()) {
      case "hola":
        await sendMessage(messageHelper["hola"], senderId);
        await this.saveMessage(messageHelper["hola"], senderId);
        break;
      case "quiero un auto":
        await sendMessage(messageHelper["auto"], senderId);
        await this.saveMessage(messageHelper["auto"], senderId);
        break;
      case "grande":
        await sendMessage(messageHelper["grande"], senderId);
        await this.saveMessage(messageHelper["grande"], senderId);
        break;
      case "para mañana":
        await sendMessage(messageHelper["mañana"], senderId);
        await this.saveMessage(messageHelper["mañana"], senderId);
        break;
      case "mañana":
        await sendMessage(messageHelper["mañana"], senderId);
        await this.saveMessage(messageHelper["mañana"], senderId);
        break;
      default:
        await sendMessage(messageHelper["default"], senderId);
        await this.saveMessage(messageHelper["default"], senderId);
    }
  }

  async findAllMessagesByChatId(chatId) {
    return await this.messageService.findAllMessagesByChatId(chatId);
  }
}
