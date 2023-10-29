import {useState, useEffect} from "react";
import {ethers, Contract, JsonRpcProvider} from "ethers"
import accountABI from "../data/accountAbi.json"
import {Tabs, Tab, Chip, Card, CardHeader, CardFooter, AvatarGroup, CardBody, Image, Button, Avatar, Divider} from "@nextui-org/react";
import {FiCheckCircle, FiShield, FiZap} from "react-icons/fi";
import Content from "./dashbordContent"


export default function App(props) {
  const{address} = props;
  const [nft, setNFT] = useState()
  const [basicPrice, setBPrice] = useState(0)
  const [prePrice, setPPrice] = useState(0)
  const [ultraPrice, setUPrice] = useState(0)
  useEffect(()=>{
    const getContract = async ()=>{
      var customHttpProvider = new JsonRpcProvider(
        "https://api.avax-test.network/ext/C/rpc"
      );
        
            const accountNFT = new Contract(address, accountABI, customHttpProvider);
            setNFT(accountNFT)
            setBPrice(Number((await accountNFT.Tier(1))[0]))
            setPPrice(Number((await accountNFT.Tier(2))[0]))
            setUPrice(Number((await accountNFT.Tier(3))[0]))

    }
    getContract()
},[])
  return (
    <div className="flex w-full flex-col">
      <Tabs 
        aria-label="Options" 
        color="primary" 
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]"
        }}
      >
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <FiCheckCircle/>
              <span>Basic</span>
            </div>
          }
        >
       <Content address={address} price={basicPrice}/>
        </Tab>
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <FiShield/>
              <span>Premium</span>
            </div>
          }
        >
          <Content address={address} price={prePrice}/>
        </Tab>
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <FiZap/>
              <span>Ultra</span>
            </div>
          }
          >
          <Content address={address} price={ultraPrice}/>
        </Tab>
      </Tabs>
    </div>  
  );
}
