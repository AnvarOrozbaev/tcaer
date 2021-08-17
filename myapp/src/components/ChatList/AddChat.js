import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'theme.palette.background.paper',

  },
  button: {
   
    width: '50px',
  display: 'flex',  
  justifyContent: 'flex-end',
},
addBtn:{
  display: 'flex', 
  justifyContent: 'flex-end',
  marginLeft: '100px',
  marginTop : '10px',
  
},
input:{
  display: 'flex', 
  justifyContent: 'flex-end',
  marginLeft: '100px',
  
}
}));
export const AddChat = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const newId = `chat-${Date.now()}`;
    dispatch(addChat(newId, value));
  };

  return (
    <form action="" onSubmit={handleSubmit} >
    <input className={classes.addBtn} onChange={handleChange} value={value} ></input>
  <Button
        variant="contained"
        color="primary"
        className={classes.addBtn}
        value={value}
        onClick={handleSubmit}
      >Добавить чат
      </Button>

      </form>
  );
};
