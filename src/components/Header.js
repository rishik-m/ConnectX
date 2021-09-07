import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
    return (
        <HeaderSection>
           <HeaderLeft>
               <HeaderAvatar />
               <AccessTimeIcon />
           </HeaderLeft>
        </HeaderSection>
    )
}

export default Header;

const HeaderSection = styled.div`
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding: 10px 0;
   position: fixed;
   color: white;
   background-color: var(--ap-color);
`;

const HeaderLeft = styled.div`
   display: flex;
   align-items: center;
   margin-left: 20px;
   flex: 0.3;

   > .MuiSvgIcon-root {
       margin-right: 30px;
       margin-left: auto;
   }
`;

const HeaderAvatar = styled(Avatar)`
   cursor: pointer;

   :hover {
      opacity: 0.8;
   }
`;