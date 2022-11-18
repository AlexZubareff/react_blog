import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/Message';




export const App = (data) => {

  

  const messageList = [
    {
      name: 'Alex',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed.'
    },
    {
      name: 'Mike',
      text: 'Sed sit amet consequat enim. Phasellus sed porta.'
    },
    {
      name: 'Nike',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis.'
    },
    {
      name: 'Elena',
      text: 'Pellentesque vel justo quis magna.'
    },
  ]

  const [textMessage, setTextMessage] = useState(messageList);

    function sendText(ev) {
        ev.preventDefault()
        const newMessage = {
          name: ev.target.elements.author.value,
          text: ev.target.elements.text.value
        }
        console.log(newMessage)
        setTextMessage([...textMessage, newMessage])
        console.log(ev.target.elements.text.value)
    }


  // useEffect((data) => {
  //   const newMessage = {
  //     name: 'Bot',
  //     text: 'Hello, guest!'
  //   }
    
  //   setTextMessage([...textMessage, newMessage])
  //   console.log(textMessage)
  //  setTextMessage(messageList)
  // }, [])


  const res = textMessage.map((item) => {
    return <ul className='list'>
      <li><h3>Author: {item.name}</h3></li>
      <li>Text: {item.text}</li>
    </ul>;
    
  })

  return (
      <div className="App">
        <header className='App-header '>BLOG</header>
        <div className='Body'>
        
        </div> 
          <Message className="Right"/>
          {res}
        <footer className='App-footer'>
        <form onSubmit={sendText}>
        <input type="text" name="author" placeholder='Name'></input>
        <input type="text" name="text" placeholder='Message'></input>
        <button >SEND</button>
        </form>
        
        </footer>
      </div> 
  );
}

export default App; 
