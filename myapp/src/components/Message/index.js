import React from "react";
import { usePrev } from "../../utils";

export const Message = ({ text, author }) => (
  <div>
    <p className = "chat__text"><span className="auhor__text ">{author}</span>: {text}</p>
  </div>
);
