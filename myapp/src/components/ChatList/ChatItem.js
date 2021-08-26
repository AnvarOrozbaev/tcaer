import React from 'react';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch } from "react-redux";
import { deleteChatWithFB } from "../../store/chats/actions";

export const ChatItem = ({ id, name, classes }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteChatWithFB(id));
  };

    return(
<ListItem
      button
      key={id}
      divider={true}
     
       >
      <Link to={`/home/${id}`}
       className = "chat__link"
       >
      <ListItemText primary={name} />
      </Link> 
      <Button
        variant="contained"
        color="primary"
        startIcon={<DeleteIcon />}
        className={classes}
        onClick={handleDelete }
      >
      </Button>
      
    </ListItem>
   
    )}