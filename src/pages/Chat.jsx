import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';





export const Chat = ({chat, addChats, handleSendMessage}) => {

    const inputRef = useRef(null)


    // console.log(chats);
    const { chatId } = useParams();
     console.log(chatId);
    const [chatsList, setChat] = useState(chat);
    console.log(chatsList);

    useEffect(() => {
        inputRef.current?.focus();
        }, []);



    const handleSend = (ev) => {

        ev.preventDefault()
        const newMessage = {
            from: ev.target.form.author.value,
            too:'Mike',
            text: ev.target.form.text.value,
            date: new Date().toLocaleTimeString(),
          }
          console.log(newMessage)

          addChats(chatsList[chatId].message.push(newMessage))  

        
        }



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

          <h4>{chatsList[chatId].nameChat}</h4>
          
          {chatsList[chatId].message.map((item, index) => 
          <ul key={index}>
            <li>
                {item.from}
            </li>
            <li>
                {item.text}
            </li>
            <li>
                {item.date}
            </li>
          </ul>
          )}
                <form >
                    <input  className = "Input" type="text" name="author" placeholder='Name' />
                    <input  ref={inputRef} className = "Input" type="text" name="text" placeholder='Message' />
                    <Button onClick={handleSend} variant="contained" size="small">SEND</Button>
                </form>

          {/* chatsList.forEach(item => item.id && chatId ? <h1>{chatId}</h1> : <h2>Выбирите чат</h2>) */}
          
        
        </>

}


