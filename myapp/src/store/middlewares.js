import { ADD_CHAT, SEND_MESSAGE } from "./chats/actionTypes";
import { addChat, sendMessage } from "./chats/actions";
import { AUTHORS } from "../constants";

export const middleware = (store) => (next) => (action) => {


  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author !== AUTHORS.robot
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(action.payload.chatId, {
          text: "I'm robot",
          author: AUTHORS.robot,
        })
      );
    }, 1000);
  }

  return next(action);
};
