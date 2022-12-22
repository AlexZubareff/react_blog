import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm'
import Button from '@mui/material/Button';
import { logIn, signUp } from '../services/firebase';
import { useState } from 'react';


export const Home = ({ onAuth, isSignUp }) => {
    const [error, setError] = useState('');
    const handleSubmit = async ({login, pass}) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        } catch (e) {
            setError(e.message);
        }
    };


    return (
        <>
            <h3>Home</h3>
            <LoginForm onSubmit={handleSubmit} />
            {error && <h5>{error}</h5>}
            <Link to={isSignUp ? "/" : "/signup"}>
                {isSignUp ? "to login" : "to signup"}
            </Link>
            {/* <Button type="submit" onClick={onAuth} variant="contained" size="small">AUTH</Button> */}
        </>
    );
};