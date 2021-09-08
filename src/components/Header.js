import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <HeaderSection>

           <HeaderLeft>
               <HeaderAvatar />
               <AccessTimeIcon />
           </HeaderLeft>

           <HeaderCenter>
               <SearchIcon />
               <input placeholder= "SEARCH" />
           </HeaderCenter>

           <HeaderRight>
               <HelpOutlineIcon />
           </HeaderRight>
           
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

const HeaderCenter = styled.div`
   flex: 0.4;
   opacity: 1;
   border-radius: 6px;
   border: 1px solid gray;
   text-align: center;
   display: flex;
   padding: 0 50px;
   color: gray;
   background-color: #421f44;

   > input {
       outline: none;
       background-color: transparent;
       color: white;
       border: none;
       text-align: center;
       min-width: 30vw;
   }
`;

const HeaderRight = styled.div`
   flex: 0.3;
   display: flex;
   align-items: flex-end;

   > .MuiSvgIcon-root {
       margin-right: 20px;
       margin-left: auto;
   }
`;