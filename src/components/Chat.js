import React from 'react'
import styled from 'styled-components'
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';

function Chat() {

    const roomId = useSelector(selectRoomId);

    return (
        <ChatSection>
            <>
                <Header>
                <HeaderLeft>
                    <h4> <strong> #Room-name </strong> </h4>
                    <StarOutlineOutlinedIcon />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
                </Header>

                <ChatMessages> {/* All messages*/} </ChatMessages>
                
                <ChatInput
                    channelId= {roomId}
                />
            </>
        </ChatSection>
    )
}

export default Chat

const ChatSection = styled.div`
   flex: 0.7;
   flex-grow: 1;
   overflow-y: scroll;
   margin-top: 60px;
`;

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
   border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
   display: flex;
   align-items: center;

   > h4 {
       display: flex;
       text-transform: lowercase;
       margin-right: 10px;
   }

   > h4 > .MuiSvgIcon-root {
       font-size: 10px;
   }
`;

const HeaderRight = styled.div`
   > p {
       display: flex;
       align-items: center;
       font-size: 14px;

       > .MuiSvgIcon-root {
           font-size: 16px;
           margin-right: 5px;
       }
   }
`;

const ChatMessages = styled.div`
`;