import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../store/message/messageSelectors";

import { addMessages } from "../store/message/messageActions";





export const Chat = ({ addChats }) => {

    const chatMessages = useSelector(selectMessages);
    const dispatch = useDispatch();
    const inputRef = useRef(null)


    const { chatId } = useParams();
    console.log(chatId);
    console.log(chatMessages);

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

        dispatch(addMessages(newMessage, chatId));


    }



    return <>
        <h4>{chatMessages[chatId].nameChat}</h4>

        {chatMessages[chatId].message.map((item, index) =>
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
            <input className="Input" type="text" name="author" placeholder='Name' />
            <input ref={inputRef} className="Input" type="text" name="text" placeholder='Message' />
            <Button onClick={handleSend} variant="contained" size="small">SEND</Button>
        </form>
    </>

}


