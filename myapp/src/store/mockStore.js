import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const mockState = {
    chats: {},
    error: null,
};
const mockStateChats = {
    ...mockState,
    chats: {
        ...mockState.chats
    }
};
const store = configureStore([thunk]);
export const mockStore = store(() => mockState);
export const chats = store(()=> mockStateChats);