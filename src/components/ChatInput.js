import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelId, channelName, chatRef }) {

    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth"
        });

        setInput("");
    };

    return (
        <ChatInputSection>
            <form>
               <input onChange= {e => setInput(e.target.value)} value= {input} placeholder= {`Message #${channelName}`} />
               <Button type= "submit" hidden onClick= {sendMessage}>
                  SEND
               </Button>
            </form>
        </ChatInputSection>
    )
}

export default ChatInput

const ChatInputSection = styled.div`
   border-radius: 20px;

   > form {
       position: relative;
       display: flex;
       justify-content: center;

       > input {
           position: fixed;
           bottom: 30px;
           width: 70%;
           border: 1px solid gray;
           border-radius: 3px;
           padding: 12px;
           outline: none;
       }

       > Button {
           display: none;
       }
   }
`;