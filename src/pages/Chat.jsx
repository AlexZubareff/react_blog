import { useRef, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectChats, selectMessages } from "../store/chat/chatListSelectors";

import { addMessages, deleteMessages, showMessages } from "../store/chat/chatListActions";





export const Chat = () => {

    // const chatMessages = useSelector(selectMessages);
    const { chatId } = useParams();
    const getMessages = useMemo(()=>selectMessages(chatId));
    const chat = useSelector(getMessages, shallowEqual);
    const dispatch = useDispatch();
    const inputRef = useRef(null)
    
    console.log(chatId);
    console.log(chat);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);



    const handleSend = (ev) => {

        ev.preventDefault()
        const newMessage = {
            from: ev.target.form.author.value,
            too: 'Mike',
            text: ev.target.form.text.value,
            date: new Date().toLocaleTimeString(),
        }
        console.log(chatId);
        console.log(newMessage);

        dispatch(addMessages(newMessage, chatId));


    }

    const delMessage = (indexMsg) => {
        console.log(indexMsg);
    
        dispatch(deleteMessages(chatId, indexMsg));
    }
    
    console.log(chat);
    console.log(chat.message);

    return <>
        <h4>{chat.nameChat}</h4>

        {chat.message.map((item, indexMsg) =>
            <ul key={indexMsg}>
                <li>
                    {indexMsg}
                </li>
                <li>
                    {item.from}
                </li>
                <li>
                    {item.text}
                </li>
                <li>
                    {item.date}
                </li>

                <Button type="submit" onClick={() => delMessage(indexMsg)} variant="contained" size="small">DELETE MSG: {indexMsg}</Button>
            </ul>
            
        )}

        <form >
            <input className="Input" type="text" name="author" placeholder='Name' />
            <input ref={inputRef} className="Input" type="text" name="text" placeholder='Message' />
            <Button onClick={handleSend} variant="contained" size="small">ADD MESSAGE</Button>
        </form>
    </>

}


