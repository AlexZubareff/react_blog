import { useEffect, useState } from 'react';

export const Message = () => {

    const chatsList = [
        {
          nameChat: 'Chat_1',
          from: 'Alex',
          too:'Mike',
          message: 'Sed sit amet consequat enim. Phasellus sed porta.',
          date: new Date().toLocaleTimeString() ,
        },
        {
          nameChat: 'Chat_2',
          from: 'Elena',
          too:'Mike',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed.',
          date: new Date().toLocaleTimeString(),
        },
        {
          nameChat: 'Chat_3',
          from: 'Nike',
          too:'Elena',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis.',
          date: new Date().toLocaleTimeString(),
        },
        {
          nameChat: 'Chat_4',
          from: 'Alex',
          too:'Elena',
          message: 'Pellentesque vel justo quis magna.',
          date: new Date().toLocaleTimeString(),
        },
      ]
    
      const [chats, setChat] = useState(chatsList);
    

    return (
        <>
        {chats.map((item, index) => (
            <ul key={index} className='list'>
                <li><h5>{item.from} to {item.too}:</h5>{item.message}</li>
                {/* <li>Text: {item.text}</li> */}
            </ul>
              ))}
        </>
    
    )
} 