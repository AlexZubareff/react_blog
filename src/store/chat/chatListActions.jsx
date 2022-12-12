export const ADD_CHAT = "CHAT::ADD_CHAT";
export const DEL_CHAT = "CHAT::DEL_CHAT";

export const ADD_MESSAGE = "MESSAGE::ADD_MESSAGE";
export const DEL_MESSAGE = "MESSAGE::DEL_MESSAGE";
export const SHOW_MESSAGE = "MESSAGE::SHOW_MESSAGE";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const deleteChat = (index) => ({
    type: DEL_CHAT,
    payload: index,
});

export const showMessages = (index) => ({
    type: SHOW_MESSAGE,
    payload: index,
});

export const addMessages = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage,
        chatId,
    },
});

export const deleteMessages = (chatId, indexMsg) => ({
    type: DEL_MESSAGE,
    payload: {
        indexMsg,
        chatId,
    },
});