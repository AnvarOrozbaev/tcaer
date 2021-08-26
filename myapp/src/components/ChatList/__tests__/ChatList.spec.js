import react from 'react'
import {ChatList} from "../index"
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore, mockStateChats} from "../../../store/mockStore";



it('matches snapshot ', () => {
    
    const component = render(
      <Provider store={mockStore} >
         <ChatList chats={[]}/>
      </Provider>
    );
     expect(component).toMatchSnapshot();
    
  });


