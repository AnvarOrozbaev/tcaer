import { PROFILE_TOGGLE_SHOW } from "./actions";
import { CHANGE_NAME } from "./actions";
const initialState = {
    showName: false,
    name: 'Ridze'
  }
  
  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_NAME: 
        return {
          ...state,
          name: action.payload
        }
      default: return state;
    }
  }
 