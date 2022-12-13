import { useDispatch, useSelector } from "react-redux"
import { toggleCheckbox } from "../store/profile/actionsProfile";
import { selectChecked, selectText } from "../store/profile/profileSelectors";
import Button from '@mui/material/Button';
import { logOut, userRef } from "../services/firebase";
import { useEffect } from "react";
import { onValue } from "firebase/database";

export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();
    const checked = useSelector(selectChecked);
    const text = useSelector(selectText);


    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    useEffect(() => {
       const unsubscribe = onValue(userRef, (snapshot) => {
            console.log(snapshot.val());
        });

        return unsubscribe;

    }, []);
 
    return (
        <>
            <h3>Profile</h3>
            <input type="checkbox" onClick={handleClick} name="mem" id="mem" />
            {checked && <span>{text}</span>}
            <Button type="submit" onClick={logOut} variant="contained" size="small">LOGOUT</Button>
        </>
    )
}