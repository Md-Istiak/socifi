"use client"
import { Web3, eth } from 'web3';
// import fs from "fs"
// import { useSDK } from '@metamask/sdk-react';
import thriftyABI from "./thriftyABI.json"
import {Contract, JsonRpcProvider, Wallet, BrowserProvider, ethers} from "ethers"
import {Avatar} from "@web3uikit/core"
import { useSession, signIn, signOut } from "next-auth/react"
import {Button, ButtonGroup, Dropdown, DropdownMenu, DropdownTrigger, User} from "@nextui-org/react";
import EthCrypto from "eth-crypto";
const publicKey = EthCrypto.publicKeyByPrivateKey(
    '0x045bf9e0ed1b2653ebe288b5bfc6a5d30936764f35ec8d9f69b59bbddc513cbf'
);
export const getcontract = async()=>{
  var customHttpProvider = new JsonRpcProvider(
    "https://api.avax-test.network/ext/C/rpc"
  );
  const users = [];
console.log(customHttpProvider)
  const thriftyNFT = new Contract("0x205D8513bC1ad6F5345C73392A49D629A7b8b5c0", thriftyABI, customHttpProvider);
  console.log(thriftyNFT);
const numAccount = Number(await thriftyNFT._tokenIds());
for (let index = 0; index < numAccount; index++) {
  let user 
  const account = await thriftyNFT.TBAbytokenId(index);
  const slicedAddress = account.slice(0, 4) + "..." + account.slice(-4);
  const uri =  await thriftyNFT.tokenURI(index);
  const status = await thriftyNFT.nfts(account);
  const userId = await thriftyNFT.userByTokenId(index);
  
  user.name = <User   
    name="Jane Doe"
    description="Product Designer"
    avatarProps={{
      src: {uri}
    }}
  />;
  user.price = Number(status[0].toString()/(10**18)).toFixed(4)
  // user.push(slicedAddress)
  user.volume = (Number(status[1].toString()/(10**18)).toFixed(4)) 
  user.holding = ("")
  user.holder = ("")
  user.address = (slicedAddress)
  user.activity = (
    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
  )
  
  
  users.push(user)
}
return users
}





export async function mint(session, account, router){
  // const wallet = Wallet.createRandom();
  // const password = "password"
  // const encryptedJson = await  wallet.encrypt(password)
       
  
  
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
 
  // await ethereum
  // .request({
  //   method: 'eth_sendTransaction',
  //   // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
  //   params: [
  //     {
  //       from: defaultAccount, // The user's active address.
  //       to: wallet.address, // Required except during contract publications.
  //       value: "60000000000000", // Only required to send ether to the recipient from the initiating external account.
  //       gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
  //       maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
  //       maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.
  //     },
  //   ],
  // })
  
//  fs.writeFileSync("../json/`${session.user.name}.json`", encryptedJson);
const provider = new ethers.BrowserProvider(window.ethereum)


  // var customHttpProvider = new JsonRpcProvider(
  //   "https://api.avax-test.network/ext/C/rpc"
  // );
  const signer = await provider.getSigner();
  console.log(signer)

 
  const tier1 = [100000000000000,100000000000000,20,122018454,100,100,50000000,200000000]
  const tier2 = [1000000000000000,1000000000000000,200,122018454,10,10,60000000,300000000]
  const tier3 = [10000000000000000,10000000000000000,20,122018454,1,1,100000000,500000000] 
const encodeBytes = eth.abi.encodeFunctionCall({
    name: 'initialize',
    type: 'function',
    inputs: [{
        type: 'address',
        name: 'treasery'
    },
    {
        type: 'address',
        name: 'dapp'
    },
    {
        type: 'address',
        name: 'initer'
    },
    {
        type: 'address',
        name: 'ref'
    },
    {
        type: 'uint256',
        name: 'value'
    },
    {
        type: 'uint256[]',
        name: "_tier1"
    },
    {
        type: 'uint256[]',
        name: '_tier2'
    },
    {
        type: 'uint256[]',
        name: '_tier3'
    }
]
}, ['0xb56A5705b53b9b74ADb8226cdf1cF1080f3a6a57',signer.address , '0xE938F2776dC76f3cD70e17c62f5Cd0Bb3dAD9f23', '0x0000000000000000000000000000000000000000', '0', tier1, tier2,tier3])
console.log(encodeBytes)

  
//   const users = [];
// console.log(customHttpProvider)
  const thriftyNFT = new Contract("0x205D8513bC1ad6F5345C73392A49D629A7b8b5c0", thriftyABI, provider);
  const ThriftNFTsigner = thriftyNFT.connect(signer)
  const message = EthCrypto.hash.keccak256([
    {type: "string",value: `${await thriftyNFT._tokenIds()} , ${account}`}
  ]);
  const signature = EthCrypto.sign('0x045bf9e0ed1b2653ebe288b5bfc6a5d30936764f35ec8d9f69b59bbddc513cbf', message);
 
  console.log(thriftyNFT);
  try{
    const tx = await ThriftNFTsigner.mint(
          session.user.name,
          session.user.image,
          signer.address,
          encodeBytes,
          message,
          signature
    )
    const Tx = await tx.wait(1)
    console.log(Tx)
  }catch(err){
    console.log(err.message)
  }
}