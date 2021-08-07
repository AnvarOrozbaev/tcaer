import React from "react";


export const Message = ({ text, author }) => (
  <div>
    <p className = "chat__text"  ><span className="auhor__text "  >{author}</span>: {text}</p>
  </div>
);
