import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
    return (
        <SidebarSection>
           <SidebarHeader>
               <SidebarInfo>
                  <h2> CodeMonster </h2>
                  <h3>
                     <FiberManualRecordIcon />
                     Rishik Makhija
                  </h3>
               </SidebarInfo>
           </SidebarHeader>
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
`;

const SidebarHeader = styled.div`
`;

const SidebarInfo = styled.div`
`;