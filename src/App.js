import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import { FormSendMessage } from './components/FormSendMessage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { BrowserRouter,HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { NoRoute } from './pages/NoRoute';
import { ChatList } from './pages/ChatList';
import { Chat } from './pages/Chat';
import { nanoid } from 'nanoid';


export const App = (data) => {

  // const messageList = [
  //   {
  //     name: 'Alex',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed.'
  //   },
  //   {
  //     name: 'Mike',
  //     text: 'Sed sit amet consequat enim. Phasellus sed porta.'
  //   },
  //   {
  //     name: 'Nike',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis.'
  //   },
  //   {
  //     name: 'Elena',
  //     text: 'Pellentesque vel justo quis magna.'
  //   },
  // ]

  // const [textMessage, setTextMessage] = useState(messageList);


      const chatsList = [
        {
          nameChat: 'Chat_1',
          from: 'Alex',
          too:'Mike',
          message: 'first message.',
          date: new Date().toLocaleTimeString(),
          id: nanoid()
        },
        {
          nameChat: 'Chat_1',
          from: 'Mike',
          too:'Alex',
          message: 'second message.',
          date: new Date().toLocaleTimeString(),
          id: nanoid()
        },
        {
          nameChat: 'Chat_2',
          from: 'Elena',
          too:'Mike',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed.',
          date: new Date().toLocaleTimeString(),
          id: nanoid()
        },
        {
          nameChat: 'Chat_3',
          from: 'Nike',
          too:'Elena',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis.',
          date: new Date().toLocaleTimeString(),
          id: nanoid()
        },
        {
          nameChat: 'Chat_4',
          from: 'Alex',
          too:'Elena',
          message: 'Pellentesque vel justo quis magna.',
          date: new Date().toLocaleTimeString(),
          id: nanoid()
        },
      ]


      const [chats, setChat] = useState(chatsList);


  // // useEffect((data) => {
  // //   const newMessage = {
  // //     name: 'Bot',
  // //     text: 'Hello, guest!'
  // //   }
    
  // //   setTextMessage([...textMessage, newMessage])
  // //   console.log(textMessage)
  // //  setTextMessage(messageList)
  // // }, [])

  // const startChatList = chats.map((item, index) => {

  //   if(index)
  //   return <List key={index.toString()}>
  //             <ListItem>
  //               {/* <ListItemButton>{item.nameChat}({index})</ListItemButton> */}
  //               <ListItem>{item.nameChat}({index})</ListItem>

  //             </ListItem>
  //             <ListItem>{item.date}</ListItem>
  //         </List>;
    
  // })

  // const startMessageList = textMessage.map((item, index) => {
  //   return <ul key={index.toString()} className='list'>
  //     <li><h4>{item.name}:</h4>{item.text}</li>
  //     {/* <li>Text: {item.text}</li> */}
  //   </ul>;
    
  // })


  // const startMessageList = chats.map((item, index) => {
  //   return <ul key={index} className='list'>
  //     <li><h5>{item.from} to {item.too}:</h5>{item.message}</li>
  //     {/* <li>Text: {item.text}</li> */}
  //   </ul>;
    
  // })




  return (
    <BrowserRouter>
          <div className="App">
        <header className='App-header '>BLOG</header>

          <div className='Body'>
            <div className='Left'>
              <NavBar />
              
            </div>

            <div className='Right'>
              {/* <Message className="Right"/> */}
              {/* {startMessageList} */}
              <Routes>
                  <Route path="/" element = { <Home />} />

                  <Route path="chats" >
                      {/* <Route path=":chatId" element={ <Chat /> } /> */}
                      <Route index element={ <ChatList chats = {chats} addChat = {setChat}/> } />
                      <Route path=":chatId" element={ <Chat chat = {chats} addChats = {setChat}/> } />
                  </Route>
                  <Route exact path="/profile" element = { <Profile />} />
                  <Route path="*" element = { <NoRoute />} />

                
              </Routes>
              
            </div>

          </div> 
        <footer className='App-footer'>
          <FormSendMessage Chat = {chats} handleSendMessage = {setChat} />
        </footer>
        
      </div> 
    </BrowserRouter>
  );
}

export default App;
