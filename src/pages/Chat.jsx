import { useRef, useEffect, useMemo, useState } from "react";
import { nanoid } from 'nanoid';

import { Navigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectChats, selectMessages } from "../store/chat/chatListSelectors";

import { addMessages, deleteMessages, showMessages } from "../store/chat/chatListActions";
import { snapshot, onValue, set, push, remove, onChildChanged, onChildAdded } from "firebase/database";
import { getMsgsListRefById, getMsgsRefById } from "../services/firebase";





export const Chat = () => {
 
    const [messages, setMessages] = useState([]);

    // const chatMessages = useSelector(selectMessages);
    const { chatId } = useParams();
    const getMessages = useMemo(()=>selectMessages(chatId));
    // const chat = useSelector(getMessages, shallowEqual);
    const dispatch = useDispatch();
    const inputRef = useRef(null)
    
    console.log(chatId);
    console.log(messages);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);



    const handleSend = (ev) => {

        ev.preventDefault()
        const newMessage = {
            from: ev.target.form.author.value,
            too: 'Mike',
            text: ev.target.form.text.value,
            id: "msg-" + nanoid(),
            date: new Date().toLocaleTimeString(),
        }

        console.log(chatId);
        console.log(newMessage);

        push(getMsgsListRefById(chatId), newMessage);

        // dispatch(addMessages(newMessage, chatId));
    }

    
    const delMessage = (id) => {
        console.log(id);
        console.log(chatId);

    
        // dispatch(deleteMessages(chatId, indexMsg));

        remove(getMsgsListRefById(chatId)) ; 

    };

    useEffect(() => {
        const unsubscribe = onValue(getMsgsRefById(chatId), (snapshot) => {
            console.log(chatId);
            console.log(snapshot.val());
            const val = snapshot.val();

            if (!snapshot.val()?.exist) {
                setMessages(null); 
            } else {
                console.log(val.messageList);
                setMessages(Object.values(val.messageList) || {});
            }
        });
        return unsubscribe;
    }, [chatId]);




    if (!messages) {
        return <Navigate to="/chats" replace />
    };

    console.log(messages);
    // console.log(chat.message);

    return <>
        <h4>{messages.nameChat}</h4>

        {messages.map((item) =>
            <ul key={item.id}>
                <li>
                    {item.id}
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

                <Button type="submit" onClick={() => delMessage(item.id)} variant="contained" size="small">DELETE MSG: {item.id}</Button>
            </ul>
            
        )}

        <form >
            <input className="Input" type="text" name="author" placeholder='Name' />
            <input ref={inputRef} className="Input" type="text" name="text" placeholder='Message' />
            <Button onClick={handleSend} variant="contained" size="small">ADD MESSAGE</Button>
        </form>
    </>

}


