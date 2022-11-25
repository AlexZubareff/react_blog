import { ADD_CHAT, DELETE_CHAT } from "./actionsChat";

const initialState = [];

export const chatsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CHAT: {
            return [...state, payload]
        }
        case DELETE_CHAT: {
            return state.filter(({index}) => index !== payload)
        }

        default:
            return state;
    }
};