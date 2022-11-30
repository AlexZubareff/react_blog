import '../App.css';
import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../store/chat/chatSelectors';
import { ADD_CHAT, DEL_CHAT } from '../store/chat/actionsChatList';



export const ChatList = () => {

  const chats_1 = useSelector(selectChats);
  const dispatch = useDispatch();
  console.log(chats_1);
  
// const [nameChat, setNameChat] = useState('');

  const onSubmit = (ev) => {
  
    const value = ev.target.nameChat.value;

    ev.preventDefault()

    if (value) {
        dispatch
        ({
          type: ADD_CHAT,
          payload: value,
        });
       }
    }

  const deleteChat = (index) => {
    console.log(index);

    dispatch({
      type: DEL_CHAT,
      payload: index,
    });
  }  

    


    return <>
      {chats_1.map((item, index) => (
        <List key={index} className = "ChatList">
            {/* <ListItemButton><Link to={`/chats/${index}`}>{item.nameChat}({index})</Link></ListItemButton> */}
            <ListItemButton to={`/chats/${index}`}>{item.nameChat}({index})</ListItemButton>
            <Button type="submit" onClick={() => deleteChat(index)} variant="contained" size="small">DELETE CHAT: {item.nameChat}</Button>


            {/* <ListItem>{item.nameChat}({item.id})</ListItem> */}
            {/* <ListItem>{item.date}</ListItem> */}
        </List>
        
      ))}
      <form onSubmit={onSubmit}>
        <input  className = "Input" type="text" name="nameChat" placeholder='Enter chat name'  />
        <Button type="submit" variant="contained" size="small">ADD CHAT</Button>
    </form>
  </>
    
}