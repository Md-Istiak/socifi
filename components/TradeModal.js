import {useEffect, useState} from "react"
import {Contract, JsonRpcProvider} from 'ethers'
import {Tabs, Tab, Input, Button, Radio, Modal, RadioGroup, ModalBody, ModalContent,Divider, ModalHeader} from "@nextui-org/react"
import {FiCheckCircle, FiZap, FiShield} from "react-icons/fi"
import accountABI from "../data/accountAbi.json"
import {MdFlipCameraAndroid} from "react-icons/md"
import Trade from "./Trade"
export default function TradeModal(props){
  const {isOpen,  onOpenChange, option, address} = props;
  const [nft , setNFT] = useState()
  
  useEffect(()=>{
    const getContract = async()=>{
      var customHttpProvider = new JsonRpcProvider(
      "https://api.avax-test.network/ext/C/rpc"
    );
    const accountNFT = new Contract(address, accountABI, customHttpProvider);
    setNFT(accountNFT)
      }
      getContract()
  }, [])
  
  
    return(
      <Modal 
      size="lg" 
      isOpen={isOpen} onOpenChange={onOpenChange} 
    >
       <ModalContent>
          {(onClose) => (
            <>
             <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
             <ModalBody>
        <div className="flex w-full flex-col">
        <Tabs aria-label="Options" color="primary" variant="bordered" defaultSelectedKey={option}>
          <Tab
            key="1"
            title={
              <div className="flex items-center space-x-2">
                <FiCheckCircle/>
                <span>Basic</span>
              </div>
            }
          >
         <Trade nft={nft} tier={1}/>
          </Tab>
          <Tab
            key="2"
            title={
              <div className="flex items-center space-x-2">
                <FiShield/>
                <span>Premium</span>
              </div>
            }
          >
            <Trade nft={nft} tier={2}/>
          </Tab>
          <Tab
            key="3"
            title={
              <div className="flex items-center space-x-2">
                <FiZap/>
                <span>Ultra</span>
              </div>
            }
          >
          <Trade nft={nft} tier={3}/>
          </Tab>
          <Tab
            key="4"
            title={
              <div className="flex items-center space-x-2">
                <FiZap/>
                <span>Subscribe</span>
              </div>
            }
          >

    <div className="flex-col">
    <RadioGroup
      label="Select Duration"
      orientation="horizontal"
    >
      <Radio value="sydney">6 Mon</Radio>
      <Radio value="san-francisco">9 Mon</Radio>
      <Radio value="london">12 Mon</Radio>
    </RadioGroup>
    <Button color="primary" variant="ghost" className="w-full mt-2">
        Subscribe
      </Button> 
        </div>
        <Divider className="my-2" />     
    <div className="flex-col">
    <div className="grid gap-2">
        <h5 className="text-small tracking-tight text-default-400">Return: 0.00002 Avax</h5>
        <h5 className="text-small tracking-tight text-default-400">Tax: 0.00002 Avax</h5>
        </div>
        
      <Button color="primary" variant="flat" className="w-full mt-2">
        Withdraw
      </Button>
        </div>
          
          </Tab>
          <Tab
            key="5"
            title={
              <div className="flex items-center space-x-2">
                <MdFlipCameraAndroid/>
                <span>Upgrade</span>
              </div>
            }
          >
          <div className="flex-col">
          <Input
          type="number"
          label="From"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Divider className="my-2" />
        <Input
          type="number"
          className="mt-2"
          label="To"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <div className="flex mt-2 gap-1">
        <Button color="primary" variant="ghost">
        Flip
      </Button>
      <Button color="primary" variant="flat">
        swap
      </Button>
        </div>
          </div>
          </Tab>
        </Tabs>
      </div>  
      </ModalBody>
      </>
       )}
       </ModalContent>
     </Modal>
    )
}






























