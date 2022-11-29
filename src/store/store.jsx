
import { combineReducers, createStore } from "redux";
import { chatsListReducer } from "./chat/chatListReducer";
import { profileReducer } from "./profile/profileReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsListReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );