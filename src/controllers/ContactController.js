import ContactService from "../service/ContactService";
import MessageController from "./MessageController";
/**
 * In this controller we can find the BUSINESS LOGIC,
 * here is when we process our data but JUST RELATED WITH THE NAME OF CONTROLLER
 */
export default class ContactController {
  /**
   * This is the instance for access to DB Layer
   */
  contactService = new ContactService();
  messageController = new MessageController();

  async findAllContacts() {
    return await this.contactService.findAll();
  }

  async findOrCreateContact(message, senderId, adminId, chatId) {
    const contact = await this.contactService.findOrCreate(senderId);
    return await this.messageController.sendMessage(message, senderId, contact[0].dataValues.id, adminId, chatId);
  }

  async findContactBySenderId(senderId) {
    return await this.contactService.findBySenderId(senderId);
  }

  async findOrCreate(senderId){
    return await this.contactService.findOrCreate(senderId);
  }
}
