import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';

function Login() {

    const login = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <LoginSection>
            <LoginInner>
               <img
                 src= "data:image/png;base64,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"
                 alt= ""
               />
               <h1> Sign in to join the Codewayy community </h1>
               <Button onClick= {login}> Sign in with Google </Button>
            </LoginInner>
        </LoginSection>
    )
}

export default Login

const LoginSection = styled.div`
   height: 100vh;
   display: grid;
   place-items: center;
   background-color: #f8f8f8;
`;

const LoginInner = styled.div`
   text-align: center;
   padding: 80px;
   background-color: white;
   border-radius: 10px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

   > img {
       object-fit: contain;
       height: 100px;
       margin-bottom: 40px;
   }

   > Button {
       background-color: #0a8d48;
       color: white;
       margin-top: 50px;
       text-transform: inherit;

       :hover {
           background-color: white;
           color: #0a8d48;
       } 
   }
`;