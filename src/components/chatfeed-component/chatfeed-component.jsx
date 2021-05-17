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
            // two this we have to know about 
            // first is it the last message that is sent 
            // and is the last message was mine or not 
            const LastMessageKey =index === 0 ? null : keys[index-1]
            const isMyMessage = userName === message.sender.userName;
            // we all the information to create diffrent types of images
            return(
                <div key={`msg_${index}`} style={{width:'100%'}}>
                
                    <div className="message-block">
                    {/* if is mymessage then we are rendering my message component */}
                    {/* if it is their message then we are rendering theirmessage component */}
                    {
        
                        isMyMessage 
                        ? <MyMessage />
                        : <TheirMessage />                        
                    }

                    </div>

                    <div className='read-receipts' style={{marginRight: isMyMessage ? '18px' : '0px',marginLeft: isMyMessage ? 'opx' : '68px'}}>
                    read-receipts
                    </div>

                </div>
            );


        })
    }
    renderMessages();
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
        
                <div className="chat-title">{chat?.title}  {/* make sures that chat exist before title is printed on it  */}</div>
            </div>
        </div>
    );
}

export default ChatFeed;