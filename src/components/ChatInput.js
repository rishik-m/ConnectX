import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function ChatInput() {

    const sendMessage = (e) => {
        e.preventDefault();
    }

    return (
        <ChatInputSection>
            <form>
               <input placeholder= {`Message #ROOM`} />
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