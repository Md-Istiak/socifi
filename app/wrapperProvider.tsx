"use client"
import { SessionProvider, useSession } from "next-auth/react"
import Navbar from "../components/navbar"

// import { MetaMaskProvider } from '@metamask/sdk-react';
import { MetaMaskProvider } from 'metamask-react';
import type {Session} from "next-auth"
type props = {
    children : React.ReactNode;
    session : Session | null;
}
export default function WrapperProvider({children, session} : props){
    
    return(
        
       
    //        <MetaMaskProvider debug={false} sdkOptions={{
    //   checkInstallationImmediately: false,
    //   dappMetadata: {
    //     name: "Demo React App"
    //   }
    // }}>
    <MetaMaskProvider>
         <SessionProvider session={session}>
            <Navbar/>
            
        {children}
        </SessionProvider>
         </MetaMaskProvider>
   

    )
   
}