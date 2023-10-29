"use client"
import { useRouter } from 'next/navigation'
import {useState, useEffect} from "react"
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, Image, Divider, Checkbox} from "@nextui-org/react";
import {FiGithub, FiTwitter} from "react-icons/fi"
import { useMetaMask } from 'metamask-react';
import { useSession, signIn, signOut , getProviders} from "next-auth/react"
import {dappWalletgenaretor} from "../data/dappWallet"
import { Col, Row } from 'antd';
import thriftyLogo from "../public/images/icon-192x192.png"
import {mint} from "../data/contract"

export default  function SignIn(){
  const router = useRouter()
    const { data: session, status } = useSession()
    // const provider = await getProviders()
    const [state, setState] = useState(status);
    const [User, setUser] = useState(session)
    const [selected, setSelected] = useState("login");
    const [dappWallet, setDappWallet] = useState('')
    const [select, setSelect] = useState(false)

   const [disable, setDisable] = useState(false)
    const {  connect, account, chainId, ethereum } = useMetaMask();
    console.log(session)
    const connected =  async() => {
      setDisable(true)
       await mint(User, account, router);
      router.replace(process.env.NEXTAUTH_URL+ `/user/${User.name}`)
      
      // try {
      //   const accounts = await sdk?.connect();
      //   setAccount(accounts?.[0]);
      // } catch(err) {
      //   console.warn(`failed to connect..`, err);
      // }
      try {
        
            // console.log(walletJson)
          } catch (addError) {
            // handle "add" error
          }
        }
        // handle other "switch" errors
       
        // useEffect(()=>{
        //  console.log(status)
        // },[])
      
    function chnageHandler(provider){
      if(select == false){
        signIn(provider, {redirect:false})
      }
      setSelect(!select);
    }

  return (
   
    <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-2 h-screen">
      <div className="hidden col-span-12 sm:col-span-6 md:col-span-6 h-auto sm:h-screen sm:grid md:grid lg:col-span-6 justify-center items-center overflow-hidden">
      <Card className="bg-transparent" shadow="none">
      <CardHeader className="flex gap-3">
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={thriftyLogo}
          width={40}
        /> */}
         
        <div className="flex flex-col">
         <h1 className="decoration-white decoration-2 text-5xl  font-extrabold text-default-200">WELCOME</h1>
          <p className="text-small text-bold text-default-100 ">       Unleash The full potential of NFT</p>
        </div>
        <Divider className="my-1"/>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-xl text-default-200 ">
            Thrifty Social &amp; Marketplace is  currently an invitation
            platform only
          </p>
          <p className="text-xl text-default-200 ">
            To join you need an invitation from an 
            existing user
          </p>
          <Link href='/sign-in'><p className="text-md text-default-800 ">
           Already An User ?
          </p></Link>
      </CardBody>
      {/* <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
     
      
     
          
       

      </div>

    <div className="col-span-12 sm:col-span-6 grid justify-center items-center  h-screen overflow-hidden ">
    <div className="flex flex-col w-full">
    <div className="flex-col sm:hidden">
        <div className="flex gap-3">
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={thriftyLogo}
          width={40}
        /> */}
         
        <div className="flex flex-col">
        <h1 className="decoration-white decoration-2 text-4xl  font-extrabold text-default-200">WELCOME</h1>
          <p className="text-small text-default-300"> To unleash The full potential of NFT</p>
        </div>

        </div>
        
        <Divider className="my-1" />
      </div>
      <Card className="max-w-full  h-auto  shadow-lg">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="New Here ?">
              <form className="flex flex-col gap-4 p-1 ">
                {/* <Input isRequired label="Email" placeholder="Enter your email" type="email" /> */}
                <Input
                  
                  isRequired
                  label="Invitation Code"
                  placeholder="Enter your Invitation Code .."
                  // labelPlacement="outside"
                  type="password"
                />
                
                <div className="flex items-center justify-center gap-3">
                  <Checkbox isRequired isDisabled={state == "authenticated"} isSelected={select || state == "authenticated"} icon={<FiGithub/>} size="lg" color="warning" onChange={()=>chnageHandler("github")}><p className="font-semibold text-default-400 text-small mx-1">GitHub</p></Checkbox>
                   <Checkbox isRequired isDisabled={state == "authenticated"} isSelected={select || state == "authenticated"} icon={<FiTwitter/>} color="warning" size="lg" onChange={()=>chnageHandler("github")}><p className="font-semibold text-default-400 text-small mx-1">Twitter</p></Checkbox>
                </div> 
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Log In
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button isDisabled={disable} fullWidth color="primary" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onClick={connected}>
                    Mint Now
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Already Joined ?">
              <form className="flex flex-col gap-4 p-1  h-auto">
              <Input
                  isRequired
                  label="NFT ID"
                  placeholder="Enter your  NFT ID .."
                  // labelPlacement="outside"
                  type="number"
                />
                <Input
                  isRequired
                  label="Pasword"
                  placeholder="Enter your Password .."
                  // labelPlacement="outside"
                  type="password"
                />
                {/* <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                /> */}
                <div className="w-full flex justify-center items-center gap-1">
                  <Divider className="w-1/3 items-start"/>
                  <h6 className=" items-center">or</h6>
                  <Divider className="w-1/3 items-end"/>

                </div>
                <div className="flex items-center justify-center gap-3">
                  <Checkbox defaultSelected icon={<FiGithub/>} size="lg" color="warning"><p className="font-semibold text-default-400 text-small mx-1">GitHub</p></Checkbox>
                   <Checkbox defaultSelected icon={<FiTwitter/>} color="warning" size="lg"><p className="font-semibold text-default-400 text-small mx-1">Twitter</p></Checkbox>
                </div> 
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    Sign In
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
    
    </div>
    </div>
  );
}