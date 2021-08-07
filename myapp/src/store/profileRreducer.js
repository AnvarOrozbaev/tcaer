import { PROFILE_TOGGLE_SHOW } from "./actions";

const initialState = {
    showName: false,
    name: 'Ridze'
  }
  
  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROFILE_TOGGLE_SHOW:
        return {
          ...state,
          showName: !state.showName
        }
        default:
          return state
    }
  }
  
  