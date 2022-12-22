import { useDispatch, useSelector } from "react-redux"
import { toggleCheckbox } from "../store/profile/actionsProfile";
import { selectChecked, selectText } from "../store/profile/profileSelectors";
import Button from '@mui/material/Button';
import { logOut, userRef, userCheckedRef } from "../services/firebase";
import { useEffect } from "react";
import { onValue, set } from "firebase/database";
import { useState } from "react";

export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();

const [checked, setChecked] = useState('');
const [name, setName] = useState('');


    // const checked = useSelector(selectChecked);
    // const text = useSelector(selectText);


    const handleClick = () => {
        // dispatch(toggleCheckbox);

        set(userCheckedRef, !checked);


        // set(userRef,{
        //     checked: !checked,
        //     name, 
        // });
    }; 

    useEffect(() => {
       const unsubscribe = onValue(userRef, (snapshot) => {
           console.log(snapshot.key);
            console.log(snapshot.val());
            
            setChecked(snapshot.val().checked);
            setName(snapshot.val().name);

        });

        return unsubscribe;

    }, []);
 
    return (
        <>
            <h3>Profile</h3>
            <input type="checkbox" onClick={handleClick} name="mem" id="mem" />
            {checked && <span>{name}</span>}
            <Button type="submit" onClick={logOut} variant="contained" size="small">LOGOUT</Button>
        </>
    )
}