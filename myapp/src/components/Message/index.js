import React from "react";
import { usePrev } from "../../utils";

export const Message = ({ text, author }) => (
  <div>
    <p className = "chat__text" color="primary"><span className="auhor__text " color="secondary" >{author}</span>: {text}</p>
  </div>
);
