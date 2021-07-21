import AdminService from "../service/AdminService";
/**
 * In this controller we can find the BUSINESS LOGIC,
 * here is when we process our data but JUST RELATED WITH THE NAME OF CONTROLLER
 */
export default class ChatController {
  /**
   * This is the instance for access to DB Layer
   */
  adminService = new AdminService();

  async findAllAdmins() {
    return await this.adminService.findAll();
  }
}
