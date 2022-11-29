import { useDispatch, useSelector } from "react-redux"
import { toggleCheckbox } from "../store/profile/actionsProfile";
import { selectChecked, selectText } from "../store/profile/profileSelectors";

export const Profile = () => {
    const dispatch = useDispatch();
    const checked = useSelector(selectChecked);
    const text = useSelector(selectText);


    const handleClick = () => {
        dispatch(toggleCheckbox);
    }


    return (<>
    <h3>Profile</h3>
    <input type="checkbox" onClick={handleClick} name="mem" id="mem"/>
    {checked && <span>{text}</span>}
    </>
    )

}