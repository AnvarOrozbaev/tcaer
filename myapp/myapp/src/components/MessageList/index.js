import React, { useCallback } from "react";
import { Message } from "../Message";
import {useSelector} from "react-redux"

export const MessageList = ({ messages }) => {
 //  const messages = useSelector(state => state.messages.messageList);
  const renderMessage = useCallback((mess) => (
    <Message text={mess.text} author={mess.author} key={mess.id} />
  ), []);

  return messages.map(renderMessage);
};
