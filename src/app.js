import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/chatfeed-component/chatfeed-component';
import './app.css'

const App=() =>{
    return (
        <ChatEngine
        height="100vh"
        projectID="827382dd-cbe5-4445-94a1-327f7c387452"
        userName="diablo"
        userSecret="123456"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;
