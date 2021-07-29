import React, { useState, useRef } from 'react';
import { AUTHORS } from '../../constants';

export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      author: AUTHORS.human,
      id: Date.now(),
      text: value,
    });
    setValue('');
  }

  return (
    <form className = "chat__form" onSubmit={handleSubmit}>
      <input className ="input__text" ref={inputRef} type="text" value={value} onChange={handleChange} />
      <input className ="input__btn" type="submit" />
    </form>
  )
}