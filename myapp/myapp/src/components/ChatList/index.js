import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import { AddChat } from './AddChat';

import { ChatItem } from './ChatItem'

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
  addBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: '100px',
    marginTop: '10px',

  },
  input: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: '100px',

  }
}));

export function ChatList({ chats, onDeleteChat }) {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <List component="nav"
        aria-label="main mailbox folders"
      >
        {Object.values(chats).map((item) => (
          <ChatItem
            name={item.name}
            key={item.id}
            id={item.id}
            onDelete={onDeleteChat}
            classes={classes.button}
          />
        ))}
        <AddChat />
      </List>


    </div>
  );
}
