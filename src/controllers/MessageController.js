import MessageService from "../service/MessageService";
import { messageHelper } from "../helpers/messages.helper";
import { sendMessage } from "../helpers/twilio.helper";
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

  async sendMessage(message, senderId) {
    switch (message.toLowerCase()) {
      case "hola":
        await sendMessage(messageHelper["hola"], senderId);
        break;
      case "quiero un auto":
        await sendMessage(messageHelper["auto"], senderId);
        break;
      case "grande":
        await sendMessage(messageHelper["grande"], senderId);
        break;
      case "para mañana":
        await sendMessage(messageHelper["mañana"], senderId);
        break;
      case "mañana":
        await sendMessage(messageHelper["mañana"], senderId);
        break;
      default:
        throw "No es una pregunta disponible";
    }
  }
}
