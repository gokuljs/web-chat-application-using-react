import React from 'react';
// basically a chat bubble we sent 

const MyMessage=({message})=>{
    // now checking out message is an attachment or an image
    if (message?.attachmeans?.lenght>0){
        return (
            <img src={message.attachment[0].file}
            alt="message-attachment"
            className="message-image"
            styles={{float:'right'}}
             />
        )
    }
    return(
        <div className="message"
        style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}
        >
           {message.text}
        </div>
    )
}

export default MyMessage;