import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {gistsReducer} from './gists/reduser'
import { profileReducer } from "./profileRreducer";
import { chatsReducer } from "./chats/reducer";
import { middleware } from "./middlewares";
import thunk from "redux-thunk";

const persistConfig = {
  key: "GB-messenger",
  storage,
};

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  gists: gistsReducer
 
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);


