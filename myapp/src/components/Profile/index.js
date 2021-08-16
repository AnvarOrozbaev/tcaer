import React from 'react'
import { store } from "../../store";
import { useCallback, useState } from "react";
import { PROFILE_TOGGLE_SHOW, changeName, CHANGE_NAME } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {
  
  const  name  = useSelector((state) => state.profile.name);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');


  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const setName = useCallback(() => {
    dispatch(changeName(value))
  }, [dispatch, value]);
  
 

  return (
    <>
      <div>
        <h4>Profile, {name} </h4>
      </div>
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <div>
        <button onClick={setName}>Change Name</button>
      </div>
    </>
  );

}
