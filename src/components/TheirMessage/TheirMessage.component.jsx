import React from 'react';
// handle the message other prople sent 

const TheirMessage=({lastMessage,message})=>{
    // when working with someone elses ,message we want to know is it the first message by that user 
    const isFirstMessageByUser=!lastMessage ||lastMessage.sender.username !== message.sender.username
    return(
        <div className="message-row">
           {isFirstMessageByUser &&(
               <div
               className="message-avatar"
               style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                />

           )}
           {
               // now checking out message is an attachment or an image
            (message?.attachmeans?.lenght>0)
         ?(
            <img src={message.attachment[0].file}
            alt="message-attachment"
            className="message-image"
            styles={{marginLeft: isFirstMessageByUser ? '4px': '48px' }}
             />
            ):( 
                
                <div className="message"
                style={{float:'left',backgroundColor:'#CABCDC',marginLeft: isFirstMessageByUser ? '4px': '48px'}}
                >
                   {message.text}
                </div>
        
             )
    
           }
        </div>
    )
}

export default TheirMessage;