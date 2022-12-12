import '../App.css';
import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../store/chat/chatListSelectors';
import { addChat, deleteChat } from '../store/chat/chatListActions';
import { showMessages } from '../store/message/messageActions';



export const ChatList = () => {

  const chats = useSelector(selectChats, shallowEqual);
  const dispatch = useDispatch();
  console.log(chats);


  const onSubmit = (ev) => {

    const value = ev.target.nameChat.value;
    const newChat = {
      nameChat: ev.target.nameChat.value,
      message: [],
      date: new Date().toLocaleTimeString(),
      id: nanoid()
    };
    console.log(newChat);

    ev.preventDefault()

    if (value) {
      dispatch(addChat(newChat));
    }
  }

  const delChat = (index) => {
    console.log(index);

    dispatch(deleteChat(index));
  }

  return <>
    {chats.map((item, index) => (
      <List key={index} className="ChatList">
        <ListItemButton to={`/chats/${index}`} >{item.nameChat}({index})</ListItemButton>
        <Button type="submit" onClick={() => delChat(index)} variant="contained" size="small">DELETE CHAT: {item.nameChat}</Button>
      </List>

    ))}
    <form onSubmit={onSubmit}>
      <input className="Input" type="text" name="nameChat" placeholder='Enter chat name' />
      <Button type="submit" variant="contained" size="small">ADD CHAT</Button>
    </form>
  </>

}