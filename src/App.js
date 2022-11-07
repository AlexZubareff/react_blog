import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import { FormSendMessage } from './components/FormSendMessage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';





export const App = (data) => {

  const messageList = [
    {
      name: 'Alex',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed.'
    },
    {
      name: 'Mike',
      text: 'Sed sit amet consequat enim. Phasellus sed porta.'
    },
    {
      name: 'Nike',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis.'
    },
    {
      name: 'Elena',
      text: 'Pellentesque vel justo quis magna.'
    },
  ]

  const [textMessage, setTextMessage] = useState(messageList);


  const chatList = [
    {
      name: 'Alex',
      id: '1'
    },
    {
      name: 'Mike',
      id: '2'    },
    {
      name: 'Nike',
      id: '3'    },
    {
      name: 'Elena',
      id: '4'    },
  ]

  const [chat, setChat] = useState(chatList);


  // // useEffect((data) => {
  // //   const newMessage = {
  // //     name: 'Bot',
  // //     text: 'Hello, guest!'
  // //   }
    
  // //   setTextMessage([...textMessage, newMessage])
  // //   console.log(textMessage)
  // //  setTextMessage(messageList)
  // // }, [])

  const startChatList = chat.map((item) => {
    return <List>
      <ListItem disablePadding disableMargin>
        <ListItemButton>{item.name} (id chat: {item.id})</ListItemButton>
      </ListItem>
    </List>;
    
  })

  const startMessageList = textMessage.map((item) => {
    return <ul className='list'>
      <li><h3>Author: {item.name}</h3></li>
      <li>Text: {item.text}</li>
    </ul>;
    
  })

  return (
      <div className="App">
        <header className='App-header '>BLOG</header>

          <div className='Body'>
            <div className='Left'>
            {startChatList}
            </div>

            <div className='Right'>
              {/* <Message className="Right"/> */}
              {startMessageList}
            </div>

          </div> 
        <footer className='App-footer'>
          <FormSendMessage Message = {textMessage} handleSendMessage = {setTextMessage}/>
        </footer>
        
      </div> 
  );
}

export default App;
