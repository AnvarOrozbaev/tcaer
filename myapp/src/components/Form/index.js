import React, { useState,  } from 'react';
import { AUTHORS } from '../../constants';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

//import { IconLabelButtons } from "./components/Buttons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '0px',
  },

}));


export const Form = ({ onSendMessage }) => {
// const inputElement = useRef(null);
//   useEffect(() => {
    
//       inputElement.current?.focus();
    
//   }, []);
// const callbackRef = useCallback((inputElement) => {
//   if (inputElement) {
//       inputElement.focus();
//   }
// }, []);
  
  // function inputRef() {
  //   textInput.current.focus();
  // }
  const classes = useStyles();
  const [value, setValue] = useState('');


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
     <form id = "myform" className = "chat__form" onSubmit={handleSubmit}>
       {/* <input className ="input__text" ref={inputRef} type="text" value={value} onChange={handleChange} />
       
     */}
    <TextField
   // style={{ margin: '20px' }}
    id="outlined-basic"
    label="your message"
    variant="outlined"
    value={value}
    onChange={handleChange}
    inputRef={input => input && input.focus()}
    //inputRef = {inputElement}
    //inputRef = {callbackRef}
    //autoFocus = {true}
    color="primary"
  />
  {/* //<input className ="input__btn" type="submit" value = "SEND"/> */}
  <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        type="submit"        //set the buttom type    is submit
        form="myform"
       // onClick={inputRef}
        
      >
        Send
      </Button>
   </form>

  )
}
