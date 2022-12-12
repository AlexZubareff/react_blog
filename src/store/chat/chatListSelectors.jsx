export const selectChats = (state) => (state.chats);
export const selectMessages = (chatId)=>(state) => (state.chats[chatId]);