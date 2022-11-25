import '../App.css';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';



export const ChatList = ({chats, addChat}) => {

  // console.log(ChatList);
const [nameChat, setNameChat] = useState('');

  const onAddChat = (ev) => {

    ev.preventDefault()

       if (nameChat) {
        addChat((prevChats) => [...prevChats, 
          {
            nameChat,
            message: [],
            date: new Date().toLocaleTimeString(),
            id: nanoid()
          }
        ]);
        setNameChat('');   
       }
    }

    


    return <>
      {chats.map((item, index) => (
        <List key={index} className = "ChatList">
            {/* <ListItemButton><Link to={`/chats/${index}`}>{item.nameChat}({index})</Link></ListItemButton> */}
            <ListItemButton to={`/chats/${index}`}>{item.nameChat}({index})</ListItemButton>
            <Button type="submit" variant="contained" size="small">DELETE CHAT: {item.nameChat}</Button>


            {/* <ListItem>{item.nameChat}({item.id})</ListItem> */}
            {/* <ListItem>{item.date}</ListItem> */}
        </List>
        
      ))}
      <form onSubmit={onAddChat}>
        <input  className = "Input" type="text" name="nameChat" placeholder='Enter chat name' value={nameChat} onChange={(e)=>setNameChat(e.target.value)} />
        <Button type="submit" variant="contained" size="small">ADD CHAT</Button>
    </form>
  </>
    
}