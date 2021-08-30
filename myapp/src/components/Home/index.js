

   import "./Home.css";
   import { useCallback, useEffect } from "react";
   import { useParams, Link } from "react-router-dom";
   import { useSelector, useDispatch } from "react-redux";
   
   import { MessageList } from "../MessageList";
   import { Form } from "../Form";
   import { ChatList } from "../ChatList";
   import { selectName } from "../../store/profile/selectors";
   import { selectChats } from "../../store/chats/selectors";
   import { selectMessages } from "../../store/messages/selectors";
   import {
     connectChatsToFB,
   } from "../../store/chats/actions";
   import {
     connectMessagesToFB,
     sendMessageWithFB,
   } from "../../store/messages/actions";
   import {
    ThemeProvider,
  
    createTheme,
   } from "@material-ui/core/styles";
import { chats } from "../../store/mockStore";
   
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
   
     const dispatch = useDispatch();
     const chats = useSelector(selectChats);
     const messages = useSelector(selectMessages);
     const name = useSelector(selectName);
   
     useEffect(() => {
       dispatch(connectChatsToFB());
       dispatch(connectMessagesToFB());
     }, []);
   
     const handleSendMessage = useCallback(
       (newMessage) => {
         dispatch(sendMessageWithFB(chatId, { ...newMessage, author: name }));
       },
       [chatId, name, dispatch]
     );
   
   


  return (<ThemeProvider theme={theme}>
    <div className="root">
    <div>
      <Link to="/login">Sign In</Link>
    </div>
    <div>
      <Link to="/signup">Sign Up</Link>
    </div>

    <ChatList chats={chats} />
      {!!chatId && (
        <div className = "container">
            <MessageList messages={messages[chatId] || []} />
            <Form onSendMessage={handleSendMessage} />
          
          
        </div>
      )}
    </div>
    </ThemeProvider>
  );
  
}

export default Home;