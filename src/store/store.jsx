
import { compose } from "@mui/system";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage  from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { articlesReducer } from "./articles/articlesReducer";
import { chatsListReducer } from "./chat/chatListReducer";
import { profileReducer } from "./profile/profileReducer";
// import { messageReducer } from "./message/messageReducer";

const persistConfig = {
key: "gbChats",
storage,
};

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsListReducer,
    articles: articlesReducer,
    // message: messageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
    );

export const persistor = persistStore(store);    