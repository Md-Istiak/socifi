import {useState, useEffect} from "react"
import { useRouter } from 'next/navigation'
import {ethers} from "ethers"
import {Input, RadioGroup, Radio, Switch, Button} from "@nextui-org/react"
import { useMetaMask } from 'metamask-react';
export default function Trade(props){
  const router = useRouter()
   const [cost , setCost] = useState(0);
   const [fee, setFee] = useState(0);
   const [buyInput, setBInput] = useState('');
   const [disable , setDisable] = useState(false)
   const [sellInput, setSInput] = useState('')
  const {nft, tier} = props;
  const {status,  connect, account, chainId, ethereum } = useMetaMask();
  async function  buyHandler(e){
    setBInput(e.target.value);
    const costing = await nft.buyEstimate(tier, e.target.value);
    setCost(Number(costing[1]))
    setFee(Number(costing[2]) + Number(costing[3]))

  }
  async function  sellHandler(e){
    setSInput(e.target.value);
    const costing = await nft.sellEstimate(tier, e.target.value);
    setCost(Number(costing[1]))
    setFee(Number(costing[2]) + Number(costing[3]))

  }
  async function  Buy(){
    setDisable(true)
    if(status == "notConnected"){
      connect()
    }
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xa869' }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0xa869',
                chainName: 'Fuji (C-Chain)',
                rpcUrls: ['https://api.avax-test.network/ext/C/rpc'] /* ... */,
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    }
    const provider = new ethers.BrowserProvider(window.ethereum)


  // var customHttpProvider = new JsonRpcProvider(
  //   "https://api.avax-test.network/ext/C/rpc"
  // );
  const signer = await provider.getSigner();
  const  balance = await provider.getBalance(signer.address);

    if(buyInput > 0 && cost <= balance){
      try{
       const tx = await (await nft.connect(signer)).buy(signer.address, tier, buyInput, {value:cost+fee})
       router.refresh();
       await tx.wait(1)
       
      }catch(err){
        console.log(err)
      }
    }
    

  }

  async function  Sell(){
    setDisable(true)
    if(status == "notConnected"){
      connect()
    }
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xa869' }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0xa869',
                chainName: 'Fuji (C-Chain)',
                rpcUrls: ['https://api.avax-test.network/ext/C/rpc'] /* ... */,
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    }
    const provider = new ethers.BrowserProvider(window.ethereum)


  // var customHttpProvider = new JsonRpcProvider(
  //   "https://api.avax-test.network/ext/C/rpc"
  // );
  const signer = await provider.getSigner();
  const  balance = Number(await nft.balanceOf(signer.address, tier))

    if(sellInput <= balance){
      try{
       const tx = await (await nft.connect(signer)).sell(tier, sellInput)
       router.refresh()
       await tx.wait(1)
       
      }catch(err){
        console.log(err)
      }
    }
    

  }
return (

    <div>
       <div className="flex-col">
    <div className=" flex  justify-between gap-1">
    <Input
      type="number"
      className="w-5/6"
      color="primary"
    //   label="Buy"
      placeholder="0.00"
      value={buyInput}
      onChange={buyHandler}
      labelPlacement="outside"
    //   endContent={
    //     <div className="pointer-events-none flex items-center">
          
    //     </div>
    //   }
    />

    <Button isDisabled={disable} radius="full" size="sm" className="mt-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onClick={Buy}>Buy</Button>

    </div>
    
    
   
    {/* <div className="w-full grid flex gap-0">
    <h6 className="text-small tracking-tight text-default-400">Cost: 0.00002 Avax</h6>
    <h6 className="text-small tracking-tight text-default-400">Protocol: 0.00002 Avax</h6>
    <Switch defaultSelected size="sm">Slippage</Switch>
    </div> */}

<div className="mt-2 flex  justify-between gap-1">
    <Input
      type="number"
      className="w-5/6"
      color="primary"
      // label=""
      placeholder="0.00"
      value={sellInput}
      onChange={sellHandler}
      labelPlacement="outside"
    //   endContent={
    //     <div className="pointer-events-none flex items-center">
          
    //     </div>
    //   }
    />

    <Button isDisabled={disable} radius="full" size="sm" className="mt-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onClick={Sell}>Sell</Button>

    </div>
  
    <div className="w-full grid my-2 gap-1 justify-between">
    <h5 className="text-small tracking-tight text-default-500">    Cost: ${(cost/(10**18)).toFixed(5)} Avax</h5>
    <h5 className="text-small tracking-tight text-default-500">Protocol: ${(fee/(10**18)).toFixed(5)} Avax</h5>
    <Switch defaultSelected size="sm">Slippage</Switch>
    </div>
</div>
</div>
)
}