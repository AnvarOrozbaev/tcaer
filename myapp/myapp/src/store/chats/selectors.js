//   import { AUTHORS } from "../../constants";

// export function getChatList(state) {
//     return state.chats.chatList
//   }


// export const selectName = (state) => state.profile.name || AUTHORS.human;
  
export const selectChats = (state) => state.chats.chats;