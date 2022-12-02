export const ADD_MESSAGE = "MESSAGE::ADD_MESSAGE";
export const DEL_MESSAGE = "MESSAGE::DEL_MESSAGE";
export const SHOW_MESSAGE = "MESSAGE::SHOW_MESSAGE";


export const showMessages = (index) => ({
    type: SHOW_MESSAGE,
    payload: index,
});

export const addMessages = (newMessage, index) => ({
    type: ADD_MESSAGE,
    payload: newMessage,
    index,
});

export const deleteMessages = (index) => ({
    type: DEL_MESSAGE,
    payload: index,
});