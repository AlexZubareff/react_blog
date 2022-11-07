import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

export const FormSendMessage = ({Message, handleSendMessage}) => {
    
    const handleSend = () => {
        // ev.preventDefault()
        const newMessage = {
            name: '333',
            text: '444444'
          }
          console.log(newMessage)

        handleSendMessage([...Message, newMessage])  
        // console.log(ev.target.elements.name.value)
        //     console.log(ev.target.elements.text.value)
        }
  

    
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
    <form onSubmit={handleSend}>
        <Input size="small" type="text" name="author" placeholder='Name'></Input>
        <Input size="small" type="text" name="text" placeholder='Message'></Input>
        <Button variant="contained">SEND</Button>
    </form>
    </>

}