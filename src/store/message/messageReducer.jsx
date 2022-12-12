
import { useParams } from "react-router-dom";
import { ADD_MESSAGE, DEL_MESSAGE, SHOW_MESSAGE } from "./messageActions";
import { nanoid } from 'nanoid';


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

// const initialState = [];

export const messageReducer = (state = initialState, {type, payload, index}) => {

    
    switch (type) {
        case SHOW_MESSAGE: {
          //   return [...state, state[payload].message];
          console.log(state[payload].message);
          return [...state];


        }
        case ADD_MESSAGE: {
            return [...state, state[index].message.push(payload)]; 
        }
        case DEL_MESSAGE: {
            return state.filter((state, index) => index !== payload)
        }

        default:
            return state;
    }
}