import React from 'react';
import MessageForm from '../message-form/message-form.component';
import MyMessage from '../mymessage/mymessage.component';
import TheirMessage from '../TheirMessage/TheirMessage.component';

const ChatFeed=(props)=>{
    const {chats,activeChat,userName,messages }=props;
    const chat=chats && chats[activeChat]
    // console.log(chat,userName,messages)
    const renderMessages=()=>{
        const keys=Object.keys(messages);
        console.log(keys)
        return keys.map((key,index)=>{
            const message=messages[key]; //returning message with this specific key 

        })
    }
    renderMessages();
    return(
        <div>
            chatfeed
        </div>
    );
}

export default ChatFeed;