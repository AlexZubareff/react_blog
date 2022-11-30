export const ADD_CHAT = "CHAT::ADD_CHAT";
export const DEL_CHAT = "CHAT::DEL_CHAT";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const deleteChat = (index) => ({
    type: DEL_CHAT,
    payload: index,
});