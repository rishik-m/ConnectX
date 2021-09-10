import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import SortIcon from '@material-ui/icons/Sort';
import ChatIcon from '@material-ui/icons/Chat';
import InboxIcon from '@material-ui/icons/Inbox';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
    return (
        <SidebarSection>

           <SidebarHeader>
               <SidebarInfo>
                  <h2> Codewayy </h2>
                  <h3>
                    <FiberManualRecordIcon />
                    Rishik Makhija
                  </h3>
               </SidebarInfo>
               <CreateIcon />
           </SidebarHeader>

           <SidebarOption Icon= {SortIcon} title= "All unreads" />
           <SidebarOption Icon= {ChatIcon} title= "All DMs" />
           <SidebarOption Icon= {InboxIcon} title= "Mentions & reactions" />
           <SidebarOption Icon= {TurnedInNotIcon} title= "Saved items" />
           <SidebarOption Icon= {FindInPageIcon} title= "Channel browser" />
           <SidebarOption Icon= {FileCopyIcon} title= "File browser" />
           <SidebarOption Icon= {PeopleAltIcon} title= "People & user groups" />
           <SidebarOption Icon= {AppsIcon} title= "Apps" />
           <SidebarOption Icon= {ExpandLessIcon} title= "Show less" />
           <hr />
           <SidebarOption Icon= {ExpandMoreIcon} title= "Channels" />
           <hr />
           <SidebarOption Icon= {AddIcon} addChannelOption title= "Add Channel" />

        </SidebarSection>
    )
}

export default Sidebar

const SidebarSection = styled.div`
   flex: 0.3;
   background-color: var(--ap-color);
   color: white;
   margin-top: 60px;
   border-top: 1px solid #49274b;
   max-width: 260px;

   > hr {
       border: 1px solid #49274b;
       margin-bottom: 10px;
       margin-top: 10px;
   }
`;

const SidebarHeader = styled.div`
   display: flex;
   border-bottom: 1px solid #49274b;
   padding: 13px;

   > .MuiSvgIcon-root {
       border-radius: 999px;
       background-color: white;
       color: #49274b;
       padding: 8px;
       font-size: 18px;
   }
`;

const SidebarInfo = styled.div`
   flex: 1;

   > h2 {
       font-size: 15px;
       font-weight: 900;
       margin-bottom: 5px;
   }

   > h3 {
       font-size: 13px;
       display: flex;
       align-items: center;
       font-weight: 400;

       > .MuiSvgIcon-root {
           color: green;
           margin-right: 2px;
           margin-top: 1px;
           font-size: 14px;
       }
   }
`;