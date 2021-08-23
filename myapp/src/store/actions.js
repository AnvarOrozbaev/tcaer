export const PROFILE_TOGGLE_SHOW = "PROFILE_TOGGLE_SHOW";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName,
  });
  