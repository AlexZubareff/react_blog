import { ADD_CHAT, ADD_MESSAGE, DEL_CHAT, DEL_MESSAGE } from "./chatListActions";
import { nanoid } from 'nanoid';

const initialState = [{
  nameChat: 'Chat_1',
  message: [
    {
      from: 'Alex',
      too: 'Mike',
      text: 'first message from Alex.',
      date: new Date().toLocaleTimeString(),
    },
  ],
  date: new Date().toLocaleTimeString(),
  id: nanoid()
},
{
  nameChat: 'Chat_2',
  message: [
    {
      from: 'Alex',
      too: 'Mike',
      text: 'first message from Alex.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Mike',
      too: 'Alex',
      text: 'first message from Mike.',
      date: new Date().toLocaleTimeString(),
    },
  ],
  date: new Date().toLocaleTimeString(),
  id: nanoid()
},
{
  nameChat: 'Chat_3',
  message: [
    {
      from: 'Alex',
      too: 'Mike',
      text: 'first message from Alex.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Mike',
      too: 'Alex',
      text: 'first message from Mike.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Alex',
      too: 'Mike',
      text: 'second message from Alex.',
      date: new Date().toLocaleTimeString(),
    },
  ], date: new Date().toLocaleTimeString(),
  id: nanoid()
},
{
  nameChat: 'Chat_4',
  message: [
    {
      from: 'Alex',
      too: 'Mike',
      text: 'first message from Alex.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Mike',
      too: 'Alex',
      text: 'first message from Mike.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Alex',
      too: 'Mike',
      text: 'second message from Alex.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Mike',
      too: 'Alex',
      text: 'second message from Mike.',
      date: new Date().toLocaleTimeString(),
    },
  ], date: new Date().toLocaleTimeString(),
  id: nanoid()
},
{
  nameChat: 'Chat_5',
  message: [
    {
      from: 'Alex',
      too: 'Mike',
      text: 'first message from Alex.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Mike',
      too: 'Alex',
      text: 'first message from Mike.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Alex',
      too: 'Mike',
      text: 'second message from Alex.',
      date: new Date().toLocaleTimeString(),
    },
    {
      from: 'Mike',
      too: 'Alex',
      text: 'second message from Mike.',
      date: new Date().toLocaleTimeString(),
    },
  ], date: new Date().toLocaleTimeString(),
  id: nanoid()
},];


export const chatsListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      console.log(state);
      return [...state, payload]
    }

    case DEL_CHAT: {
      return state.filter((state, index) => index !== payload)
    }

    case ADD_MESSAGE: {
      return state.map(
        (item, index) => index != payload.chatId ? item : {...item, message: [...item.message, payload.newMessage]}
      );
    }

    case DEL_MESSAGE: {
      return state.map((item) => {
        return { ...item, message: item.message.filter((item, index) => index !== payload.indexMsg) }
      });
    }


    default:
      return state;
  }
};