import React from 'react'
import styled from 'styled-components'

function SidebarOption({Icon, title, addChannelOption}) {
    return (
        <SidebarOptionSection>
            {Icon && <Icon fontSize= "small" style= {{ padding: 10 }} />}
            {Icon ? (
                <h3> {title} </h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionSection>
    )
}

export default SidebarOption

const SidebarOptionSection = styled.div`
   display: flex;
   align-items: center;
   font-size: 12px;
   padding-left: 2px;
   cursor: pointer;

   :hover {
       opacity: 0.9;
       background-color: #340e36;
   }

   > h3 {
       font-weight: 500;
   }

   > h3 > span {
       padding: 15px;
   }
`;

const SidebarOptionChannel = styled.div`
`;