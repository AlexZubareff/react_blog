import { useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../components/Message"
import { ChatList } from "./ChatList"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';




export const Chat = ({chat, addChats}) => {


    // console.log(chats);
    const { chatId } = useParams();
     console.log(chatId);
    const [chatsList, setChat] = useState(chat);
    console.log(chatsList);


    return <>
        {/* <Message messages={chatsList[chatId].message}/> */}
        {/* <ChatList chatList={chat} chatId = { chatId }/> */}
        
        {/* {chatsList.map((item) => ( */}
        {/* <List key={item.id} className = "ChatList"> */}
            {/* <ListItem>{item.nameChat} - {item.id} - {item.message}</ListItem> */}
            {/* <ListItemButton to={item.id}>{item.nameChat}({item.id})</ListItemButton> */}

            {/* <ListItem>{item.nameChat}({item.id})</ListItem> */}
            {/* <ListItem>{item.date}</ListItem> */}
        {/* </List> */}
        
      {/* ))} */}

          <h4>from: {chatsList[chatId].from}</h4>
          
          {chatsList[chatId].message}

          {/* chatsList.forEach(item => item.id && chatId ? <h1>{chatId}</h1> : <h2>Выбирите чат</h2>) */}
          
        
        </>

}