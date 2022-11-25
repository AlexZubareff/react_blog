import { useDispatch, useSelector } from "react-redux"
import { toggleCheckbox } from "../store/profile/actionsProfile";

export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    }


    return (<>
    <h3>Profile</h3>
    <input type="checkbox" onClick={handleClick} name="mem" id="mem"/>
    {state.checked && <span>{state.text}</span>}
    </>
    )

}