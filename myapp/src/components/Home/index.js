import "./Home.css";
import { useEffect, useState, useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { AUTHORS } from "../../constants";
import { ChatList } from "../ChatList";
import { useParams} from "react-router-dom";
import {
    ThemeProvider,
    useTheme,
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

const initialChats = {
  chat1: {
    messages: [{ text: "this is chat 1", author: AUTHORS.human, id: "chat1-1" }],
    name: "Chat 1",
    id: "chat1",
  },
  chat2: {
    name: "Chat 2",
    id: "chat2",
    messages: [
      { text: "this is chat 2", author: AUTHORS.human, id: "chat2-1" },
    ],
  },
  chat3 : { name: "Chat 3", id: "chat3", messages: [] },
    chat4 : { name: "Chat 4", id: "chat4", messages: [] } 
};

function Home() {
    
  const { chatId } = useParams();
  console.log(chatId);

  // const [messages, setMessages] = useState([
  //   { text: "Dummy", author: AUTHORS.human, id: 1 },
  // ]);
  const [chats, setChats] = useState(initialChats);

  const handleSendMessage = useCallback(
    (newMessage) => {
      // setMessages([...messages, newMessage]);
      setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messages: [...chats[chatId].messages, newMessage],
        },
      });
    },
    [chats, chatId]
  );

  useEffect(() => {
    if (
      !chatId ||
      !chats[chatId]?.messages.length ||
        chats[chatId].messages[chats[chatId].messages.length - 1].author ===
          AUTHORS.robot
    ) {
      return;
    }
    

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      handleSendMessage(newMessage);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [chats]);

  if(chatId === undefined)
{  return  ( 
  <> 
  <ChatList chats={chats} />  
  </>);}
  if (!chatId || !chats[chatId] ) {
  
    return  ( 
    <> 
    <ChatList chats={chats} />
    <h3> Такого чата не существует.Выбери чат </h3>
    </>);

  }
  


  return (<ThemeProvider theme={theme}>
    <div className="root">
      <ChatList chats={chats} />
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