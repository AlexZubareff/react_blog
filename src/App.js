import { useState } from 'react';
import './App.css';
import { Message } from './components/Message';

export const App = () => {

  const [textMessage, setTextMessage] = useState('Привет, Майк')

  return (
      <div className="App">
        <header className='App-header '>BLOG</header>
        <div className='Body'>
          </div> 
          <Message textMessage={textMessage}  className="Right"/>
      </div> 
  );
}

export default App;
