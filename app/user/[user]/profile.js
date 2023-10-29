"use client"
import {useEffect, useState} from "react"
import { useSearchParams  } from 'next/navigation'
import thriftyABI from "../../../data/thriftyABI.json" 
import accountABI from "../../../data/accountAbi.json"


import {Card, CardHeader,  CardBody, CardFooter, Divider,Tabs,Tab, Link, Image, User, Avatar,AvatarGroup, Chip, Accordion,Button, AccordionItem} from "@nextui-org/react";
//profile-cover-img.png
// import { FiAlignJustify, FiHome, FiSearch, FiAirplay, FiSidebar} from "react-icons/fi";
// import { BsWallet2 } from "react-icons/bs";
// import { RiNftFill } from "react-icons/ri";
// import Dashboard from "./dashboard";
// import TradeModal from "./tradeTab"
import {Contract, JsonRpcProvider} from 'ethers'
import UserAbout from "../../../components/userAbout"
import ProfileTab from "../../../components/userProfileTab"


import NextImage from 'next/image';
export default function UserProfilePage() { 
  const pathname = useSearchParams ()
    const [params, setParaqms] = useState(pathname)
    const [nft , setNFT] = useState()
    const [price , setPrice]= useState([0,0,0])
  
    
    const value = params.get("userId");
    const [nftAddress, setAddress] = useState()

    console.log(value)
    useEffect(()=>{
        const getContract = async ()=>{
            let userAddress = 0 ;
            if(params.has("address")){
              userAddress = params.get("address")
            }else{
                var customHttpProvider = new JsonRpcProvider(
                    "https://api.avax-test.network/ext/C/rpc"
                  );
                const thriftyNFT = new Contract("0x205D8513bC1ad6F5345C73392A49D629A7b8b5c0", thriftyABI, customHttpProvider);
                if(params.has("userid")){
                    const useerid = params.get("userid");
                    const tokenId = await thriftyNFT.userByTokenId(useerid)
                    userAddress = await thriftyNFT.TBAbytokenId(tokenId)
                }
                if(params.has("tokenid")){
                    const tokenId = params.get("tokenid")
                    userAddress = await thriftyNFT.TBAbytokenId(tokenId)
                }
            }
            setAddress(userAddress)
            
                // const accountNFT = new Contract(userAddress, accountABI, customHttpProvider);
                // setNFT(accountNFT)
                // let _price = []
                // setBPrice(Number((await accountNFT.Tier(1))[0]))
                // setPPrice(Number((await accountNFT.Tier(2))[0]))
                // setUPrice(Number((await accountNFT.Tier(3))[0]))
                //  _price.push(Number((await accountNFT.Tier(1))[0]))
                //  _price.push(Number((await accountNFT.Tier(2))[0]))
                //  _price.push(Number((await accountNFT.Tier(3))[0]))
                //  setPrice(_price)
                
            
          
        
        }
        getContract()
    },[])
    return (
        <div className=" w-full  grid  justify-items-center ">
            <Card className="w-full md:w-5/6 sm:w-400px  mt-1">
             <CardHeader className=" flex flex-col pt-5 p-x-2">
               <UserAbout/>
             </CardHeader>
             </Card>
            
            <Card className="w-full md:w-5/6 sm:w-400px  mt-1">
             <CardHeader className=" flex flex-col pt-5 p-x-2">
               <ProfileTab address={nftAddress} />
             </CardHeader>
             </Card>
            <Divider className="my-1" />
        

        </div>
    )
   
}