import { ADD_CHAT, DEL_CHAT } from "./actionsChatList";
import { nanoid } from 'nanoid';
import { ActionTypes } from "@mui/base";
import { Action } from "@remix-run/router";

const initialState = [{
    nameChat: 'Chat_1',
    message: [
      {
        from: 'Alex',
        too:'Mike',
        text: 'first message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'first message from Mike.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Alex',
        too:'Mike',
        text: 'second message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'second message from Mike.',
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
        too:'Mike',
        text: 'first message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'first message from Mike.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Alex',
        too:'Mike',
        text: 'second message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'second message from Mike.',
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
        too:'Mike',
        text: 'first message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'first message from Mike.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Alex',
        too:'Mike',
        text: 'second message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'second message from Mike.',
        date: new Date().toLocaleTimeString(),
      },
    ],          date: new Date().toLocaleTimeString(),
    id: nanoid()
  },
  {
    nameChat: 'Chat_4',
    message: [
      {
        from: 'Alex',
        too:'Mike',
        text: 'first message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'first message from Mike.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Alex',
        too:'Mike',
        text: 'second message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'second message from Mike.',
        date: new Date().toLocaleTimeString(),
      },
    ],          date: new Date().toLocaleTimeString(),
    id: nanoid()
  },
  {
    nameChat: 'Chat_5',
    message: [
      {
        from: 'Alex',
        too:'Mike',
        text: 'first message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'first message from Mike.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Alex',
        too:'Mike',
        text: 'second message from Alex.',
        date: new Date().toLocaleTimeString(),
      },
      {
        from: 'Mike',
        too:'Alex',
        text: 'second message from Mike.',
        date: new Date().toLocaleTimeString(),
      },
    ],          date: new Date().toLocaleTimeString(),
    id: nanoid()
  },];

export const chatsListReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CHAT: {
            return [...state, payload] 
        }
        case DEL_CHAT: {
            return state.filter((state, index) => index !== payload)
        }

        default:
            return state;
    }
};