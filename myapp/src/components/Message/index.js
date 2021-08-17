import React from "react";
import {useSelector} from "react-redux"
import { AUTHORS } from "../../constants";
export const Message = ({ text, author }) => {
  const profileName = useSelector(state => state.profile.name);
  
  
  
  return(
  
  <div>
    <p className = "chat__text"  ><span className="auhor__text "  >{author === AUTHORS.human ? profileName : author}</span>: {text}</p>
  </div>
);
}