import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { NoRoute } from './pages/NoRoute';
import { ChatList } from './pages/ChatList';
import { Chat } from './pages/Chat';
import { Articles } from './pages/Articles';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useEffect, useState } from 'react';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const App = (data) => {

  const [authed, setAuthed] = useState(false);
 
  const handleLogin = () => {
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogin();
      } else {
        handleLogout();
      }
    });

    return unsubscribe;

  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <header className='App-header '>BLOG</header>
        <div className='Body'>
          <div className='Left'>
            <NavBar />
          </div>
          <div className='Right'>
            <Routes>
              <Route path="/" element={<PublicRoute authed={authed} />} >
                <Route path="" element={<Home onAuth={handleLogin} />} />
                <Route path="signup" element={<Home onAuth={handleLogin} isSignUp />} />
              </Route>

              <Route exact path="/profile" element={<PrivateRoute authed={authed} />}>
                <Route path="" element={<Profile onLogout={handleLogout} />} />
              </Route>

              <Route path="chats" >
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<Chat />} />
              </Route>

              <Route exact path="/articles" element={<Articles />} />
              <Route path="*" element={<NoRoute />} />
            </Routes>
          </div>
        </div>
        <footer className='App-footer'>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
