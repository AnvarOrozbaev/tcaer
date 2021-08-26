// import { ADD_MESSAGE } from "./action";

// const initialState = {
//   // to be stored like this {[chatId]: [{id, text, author}]}
//   messageList: {},
// };

// export const messageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_MESSAGE: {
//       const currentList = state.messageList[action.chatId] || [];
      
//       return {
//         ...state,
//         messageList: {
//           ...state.messageList,
//           [action.chatId]: [
//             ...currentList,
//             {
//               ...action.message,
//               id: `${action.chatId}${currentList.length}`,
//             },
//           ],
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };
import { SET_MESSAGES } from "./actionTypes"

const initialState = {
  messages: {}
}

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case (SET_MESSAGES): {
      return {
        ...state,
        messages: payload
      }
    }
    default: return state
  }
}

