/* import { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import {nanoid} from 'nanoid';

 */
export const FormSendMessage = ({Chat, handleSendMessage}) => {

/*     console.log(Chat)

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus();
        }, []);



    const handleSend = (ev) => {

        ev.preventDefault()
        const newMessage = {
            nameChat: 'Chat_2',
            from: ev.target.form.author.value,
            too:'Mike',
            message: ev.target.form.text.value,
            date: new Date().toLocaleTimeString(),
            id: nanoid()
          }
          console.log(newMessage)

        handleSendMessage([...Chat, newMessage])  
        
        }
 */  

    
        // function sendText(ev) {
        //     ev.preventDefault()
        //     const newMessage = {
        //       name: ev.target.elements.author.value,
        //       text: ev.target.elements.text.value
        //     }
        //     console.log(newMessage)
        //     setTextMessage([...textMessage, newMessage])
        //     console.log(ev.target.elements.text.value)
        // }


    return <>
{/*     <form >
        <input  className = "Input" type="text" name="author" placeholder='Name' />
        <input  ref={inputRef} className = "Input" type="text" name="text" placeholder='Message' />
        <Button onClick={handleSend} variant="contained" size="small">SEND</Button>
    </form>
 */}    {/* <form onSubmit={handleSend}>
        <Input  className = "Input" type="text" name="author" placeholder='Name' />
        <Input  ref={inputRef} className = "Input" type="text" name="text" placeholder='Message' />
        <Button variant="contained" size="large">SEND</Button>
    </form> */}
    </>

}