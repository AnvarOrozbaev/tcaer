
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
  import thunk from 'redux-thunk';

import storage from "redux-persist/lib/storage";

import { profileReducer } from "./profileRreducer";
import { chatsReducer } from "./chats/reducer";
import { middleware } from "./middlewares";

const persistConfig = {
  key: 'GB-messenger',
  storage,
}

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(middleware))
);

export const persistor = persistStore(store);

