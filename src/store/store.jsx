
import { combineReducers, createStore } from "redux";
import { chatsListReducer } from "./chat/chatListReducer";
import { profileReducer } from "./profile/profileReducer";
import { messageReducer } from "./message/messageReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsListReducer,
    message: messageReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);