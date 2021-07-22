import dotenv from "dotenv";
import Twilio from "twilio";
import { messageHelper } from "./messages.helper";

dotenv.config();
const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  {
    lazyLoading: true,
  }
);

const sendMessage = async (message, senderId) => {
  try {
    await client.messages.create({
      to: senderId,
      body: message,
      from: messageHelper.sender,
    });
  } catch (error) {
    throw error;
  }
};

export { sendMessage };
