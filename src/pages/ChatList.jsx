import '../App.css';
import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../store/chat/chatListSelectors';
import { addChat, deleteChat } from '../store/chat/chatListActions';
import { useState } from 'react';
import { onValue, remove, set } from 'firebase/database';
import { getChatRefById, chatsRef, getMsgsRefById } from '../services/firebase';
import { useEffect } from 'react';


export const ChatList = () => {

  const [chats, setChats] = useState([]);
  // const chats = useSelector(selectChats, shallowEqual);
  const dispatch = useDispatch();
  console.log(chats);


  const onSubmit = (ev) => {

    const value = ev.target.nameChat.value;
    console.log(value);

    const newChat = {
      nameChat: ev.target.nameChat.value,
      // message: [],
      date: new Date().toLocaleTimeString(),
      id: "chat-" + nanoid(),
    };
    console.log(newChat);

    ev.preventDefault()

    if (value) {
      set(getChatRefById(newChat.id), newChat);
      set(getMsgsRefById(newChat.id), { exist: true });
      // dispatch(addChat(newChat));
    }
  }

  const delChat = (id) => {
    console.log(id);
    console.log(id);

    remove(getChatRefById(id)); 
    set(getMsgsRefById(id), null);

    console.log(chats);
    // dispatch(deleteChat(index));
    
  }


  useEffect(()=> {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      // console.log(snapshot.val());
      setChats(Object.values(snapshot.val() || {}));
    });
    return unsubscribe;
  }, []);


  return <>
    {chats.map((item, index) => (
      <List key={index} className="ChatList">
        <ListItemButton to={`/chats/${chats[index].id}`} >{item.nameChat}({index})</ListItemButton>
        <Button type="submit" onClick={() => delChat(chats[index].id)} variant="contained" size="small">DELETE CHAT: {item.nameChat}</Button>
      </List>

    ))}
    <form onSubmit={onSubmit}>
      <input className="Input" type="text" name="nameChat" placeholder='Enter chat name' />
      <Button type="submit" variant="contained" size="small">ADD CHAT</Button>
    </form>
  </>

}