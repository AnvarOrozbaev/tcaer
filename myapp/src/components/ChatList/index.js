import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import  {  useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddChat } from './AddChat';
import {  deleteChat } from "../../store/chats/actions";
import {ChatItem} from './ChatItem'
//import { addChat } from "../../store/Chats/actions";
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import { shallowEqual } from "react-redux";
// import { getChatList } from "../../store/chats/selectors";
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

export  function ChatList({chats, onDeleteChat}) {

    
  const classes = useStyles();
  const dispatch = useDispatch();
//  const chats = useSelector(state => state.chats);
//
  return (
    <div className={classes.root}>
      <List component="nav" 
      aria-label="main mailbox folders"
      > 
      { Object.values(chats).map((item) => (
    <ChatItem
    name={item.name}
    key={item.id}
    id={item.id}
    onDelete={onDeleteChat}
    classes={classes.button}
  />
  ))}
  <AddChat/>
</List>


    </div>
  );
}
