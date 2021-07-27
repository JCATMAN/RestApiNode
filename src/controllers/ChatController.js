import ChatService from "../service/ChatService";
import MessageController from "./MessageController";
/**
 * In this controller we can find the BUSINESS LOGIC,
 * here is when we process our data but JUST RELATED WITH THE NAME OF CONTROLLER
 */
export default class ChatController {
  /**
   * This is the instance for access to DB Layer
   */
  chatService = new ChatService();
  messagesController = new MessageController();

  async findAllChats() {
    return await this.chatService.findAll();
  }

  async findOrCreateChats(contactId) {
    await this.chatService.findOrCreate(contactId);
  }

  async findChatWithMessages(contactId) {
    const chat = await this.findOrCreateChats(contactId);
    const messages = await this.messagesController.findAllMessagesByChatId(
      chat.id
    );
    return { chat, messages };
  }
}
