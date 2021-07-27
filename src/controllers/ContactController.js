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

  async findOrCreateContact(message, senderId) {
    await this.contactService.findOrCreate(senderId);
    await this.messageController.sendMessage(message, senderId);
  }

  async findContactBySenderId(senderId) {
    return await this.contactService.findBySenderId(senderId);
  }
}
