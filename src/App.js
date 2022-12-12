import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { NoRoute } from './pages/NoRoute';
import { ChatList } from './pages/ChatList';
import { Chat } from './pages/Chat';
import { Articles } from './pages/Articles';


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


      // const chatsList = [
      //   {
      //     nameChat: 'Chat_1',
      //     message: [
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'first message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'first message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'second message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'second message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //     ],
      //     date: new Date().toLocaleTimeString(),
      //     id: nanoid()
      //   },
      //   {
      //     nameChat: 'Chat_1',
      //     message: [
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'first message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'first message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'second message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'second message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //     ],
      //     date: new Date().toLocaleTimeString(),
      //     id: nanoid()
      //   },
      //   {
      //     nameChat: 'Chat_2',
      //     message: [
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'first message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'first message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'second message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'second message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //     ],          date: new Date().toLocaleTimeString(),
      //     id: nanoid()
      //   },
      //   {
      //     nameChat: 'Chat_3',
      //     message: [
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'first message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'first message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'second message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'second message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //     ],          date: new Date().toLocaleTimeString(),
      //     id: nanoid()
      //   },
      //   {
      //     nameChat: 'Chat_4',
      //     message: [
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'first message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'first message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Alex',
      //         too:'Mike',
      //         text: 'second message from Alex.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //       {
      //         from: 'Mike',
      //         too:'Alex',
      //         text: 'second message from Mike.',
      //         date: new Date().toLocaleTimeString(),
      //       },
      //     ],          date: new Date().toLocaleTimeString(),
      //     id: nanoid()
      //   },
      // ]

      // const chats = useSelector(state => state.chats);
      // const dispatch = useDispatch();

      // const [chats, setChat] = useState(chatsList);
      // console.log(chats);

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
    // <Provider store={store}>
      // <PersistGate persistor={persistor}>
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
                      <Route index element={ <ChatList/> } />
                      <Route path=":chatId" element={ <Chat /> } />
                  </Route>
                  <Route exact path="/profile" element = { <Profile />} />
                  <Route exact path="/articles" element = { <Articles />} />

                  <Route path="*" element = { <NoRoute />} />

                
              </Routes>
              
            </div>

          </div> 
         <footer className='App-footer'>

        </footer>
      </div> 
    </BrowserRouter>
    /* </PersistGate> */
    /* </Provider> */
  );
}

export default App;
