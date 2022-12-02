import { TOGGLE_CHECKBOX } from "./actionsProfile";

const initialState = {
    checked: false,
    text: "Checked",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return{
                ...state,
                checked: !state.checked,
            }
        }
        default:
            return state;
    }
};