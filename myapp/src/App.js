import PropTypes from "prop-types";


import "./App.css";
import { useRef, useEffect, useState, useCallback,  } from "react";
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";
import { Form } from "./components/Form";
import { AUTHORS } from "./constants";
import SimpleList from "./components/ChatList";
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
 


function App() {
  const [messages, setMessages] = useState([

  ]);
 
  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

  useEffect(() => {
    if (
      !messages.length ||
      messages[messages.length - 1].author === AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      setMessages([...messages, newMessage]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (<ThemeProvider theme={theme}>
  <SimpleList />
    <div className = "container">
  
     
      <Form onSendMessage={handleSendMessage} />
      <MessageList messages={messages} />
    </div>
    </ThemeProvider>
  );
}

export default App;
