
import React from "react";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selectors";
import { AUTHORS } from "../../constants";

export const Message = ({ text, author }) => {
  const name = useSelector(selectName);
  return (
    <div>
    <p className = "chat__text"  ><span className="auhor__text "  >{author === AUTHORS.human ? name : author}</span>: {text}</p>
  </div>
  );
};
