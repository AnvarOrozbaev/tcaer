import "./Home.css";
import { useEffect, useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { AUTHORS } from "../../constants";
import { ChatList } from "../ChatList";
import { useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import { sendMessageWithReply, sendMessage, deleteChat } from "../../store/chats/actions";
import { selectName } from "../../store/chats/selectors";
import {
    ThemeProvider,
  
    createTheme,
   } from "@material-ui/core/styles";
   
   const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9800",
      },
      secondary: {
        main: "#0098FF",
      },
    },
   });

   
function Home() {
    
  const { chatId } = useParams();

  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();
 
 
  const name = useSelector(selectName);


  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessage(chatId, {...newMessage, author: name}));
    },
    [chatId]
  );

  const handleDeleteChat = useCallback((id) => {
    dispatch(deleteChat(id));
  }, []);

     

  if(chatId === undefined)
{  return  ( 
  <> 
  <ChatList chats={chats} onDeleteChat={handleDeleteChat} />  
  </>);}
  if (!chatId || !chats[chatId] ) {
  
    return  ( 
    <> 
    <ChatList chats={chats}  onDeleteChat={handleDeleteChat} />
    <h3> Такого чата не существует.Выбери чат </h3>
    </>);

  }
  


  return (<ThemeProvider theme={theme}>
    <div className="root">
    <ChatList chats={chats} onDeleteChat={handleDeleteChat} />
      {!!chatId && (
        <div className = "container">
            <MessageList messages={chats[chatId].messages } />
            <Form onSendMessage={handleSendMessage} />
          
          
        </div>
      )}
    </div>
    </ThemeProvider>
  );
  
}

export default Home; 