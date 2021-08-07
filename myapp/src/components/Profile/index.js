import React from 'react'
import { store } from "../../store";
import { useCallback } from "react";
import { PROFILE_TOGGLE_SHOW } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

export  const Profile = () => {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();
  

  
    const setShowName = useCallback(() => {
      dispatch({
        type: PROFILE_TOGGLE_SHOW,
      });
    }, [dispatch]);
  
    return (
        <div>
          <h3>Profile</h3>
          <input 
             type="checkbox"
             checked={showName}
             value={showName}
             onChange={setShowName}
            
          />
          <span style={{fontSize: 20}}>Show Name</span>
          {showName && <div style={{fontSize: 20, textAlign: 'center', width: 200 }} >{name}</div>}
        </div>
    );
  
  }
  