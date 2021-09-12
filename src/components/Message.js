import React from 'react'
import styled from 'styled-components'

function Message({ message, timestamp, user, userImage }) {
    return (
        <MessageSection>
            <img src= {userImage} alt= "" />
            <MessageInfo>
               <h4> {user} <span> {new Date(timestamp?.toDate()).toLocaleString()} </span> </h4>
               <p> {message} </p>
            </MessageInfo>
        </MessageSection>
    )
}

export default Message

const MessageSection = styled.div`
   display: flex;
   align-items: center;
   padding: 20px;

   > img {
       height: 42px;
       border-radius: 8px;
   }
`;

const MessageInfo = styled.div`
   padding-left: 10px;

   > h4 > span {
       color: gray;
       font-weight: 300;
       margin-left: 4px;
       font-size: 12px;
   }
`;