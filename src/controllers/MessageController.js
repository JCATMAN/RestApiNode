import MessageService from "../service/MessageService";
import { messageHelper } from "../helpers/messages.helper";
import { sendMessage } from "../helpers/twilio.helper";

/**
 * In this controller we can find the BUSINESS LOGIC,
 * here is when we process our data but JUST RELATED WITH THE NAME OF CONTROLLER
 */
export default class MessageController {
  /**
   * This is the instance for access to DB Layer
   */
  messageService = new MessageService();

  async findAllContacts() {
    return await this.messageService.findAll();
  }

  async saveMessage(message, senderId, contactId, adminId, chatId, isSendByAdmin = false) {

    console.log({ chatId });

    await this.messageService.create({
      message,
      contactId,
      adminId,
      chatId,
      time: new Date().toISOString(),
      isSendByAdmin,
    });
  }

  async sendMessage(message, senderId, contactId, adminId, chatId) {
    switch (message.toLowerCase()) {
      case "hola":
        await sendMessage(messageHelper["hola"], senderId);
        await this.saveMessage(
          message,
          senderId,
          contactId,
          adminId,
          chatId
        );
        await this.saveMessage(
          messageHelper["hola"],
          senderId,
          contactId,
          adminId,
          chatId, 
          true,
        );
        break;
      case "quiero un auto":
        await sendMessage(messageHelper["auto"], senderId);
        await this.saveMessage(
          message,
          senderId,
          contactId,
          adminId,
          chatId
        );
        await this.saveMessage(
          messageHelper["auto"],
          senderId,
          contactId,
          adminId,
          chatId, 
          true,
        );
        break;
      case "grande":
        await sendMessage(messageHelper["grande"], senderId);
        await this.saveMessage(
          message,
          senderId,
          contactId,
          adminId,
          chatId
        );
        await this.saveMessage(
          messageHelper["grande"],
          senderId,
          contactId,
          adminId,
          chatId, 
          true,
        );
        break;
      case "para mañana":
        await sendMessage(messageHelper["mañana"], senderId);
        await this.saveMessage(
          message,
          senderId,
          contactId,
          adminId,
          chatId
        );
        await this.saveMessage(
          messageHelper["mañana"],
          senderId,
          contactId,
          adminId,
          chatId, 
          true,
        );
        break;
      case "mañana":
        await sendMessage(messageHelper["mañana"], senderId);
        await this.saveMessage(
          message,
          senderId,
          contactId,
          adminId,
          chatId
        );
        await this.saveMessage(
          messageHelper["mañana"],
          senderId,
          contactId,
          adminId,
          chatId, 
          true,
        );
        break;
      default:
        await sendMessage(messageHelper["default"], senderId);
        await this.saveMessage(
          message,
          senderId,
          contactId,
          adminId,
          chatId
        );
        await this.saveMessage(
          messageHelper["default"],
          senderId,
          contactId,
          adminId,
          chatId, 
          true,
        );
    }
  }

  async findAllMessagesByChatId(chatId) {
    return await this.messageService.findAllMessagesByChatId(chatId);
  }
}
