import {ethers} from "ethers"
export function dappWalletgenaretor(){
    const wallet = ethers.Wallet.createRandom();
    return wallet.address;
}