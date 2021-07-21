import MessageService from "../service/MessageService";
/**
 * In this controller we can find the BUSINESS LOGIC,
 * here is when we process our data but JUST RELATED WITH THE NAME OF CONTROLLER
 */
export default class ContactController {
  /**
   * This is the instance for access to DB Layer
   */
  messageService = new MessageService();

  async findAllContacts() {
    return await this.messageService.findAll();
  }
}
