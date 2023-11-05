import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Avatar} from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-[1600px]  grid grid-cols-12 grid-rows-2 h-[200px] ">
    <Card className="col-span-4 row-span-2 h-[200px] " radius="none" >
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">@0xd3v</p>
        <h4 className="text-white font-medium text-large">NFT what is top the everest</h4>
      </CardHeader>
      <Image
        radius="none"
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/OIP._uqECX1oZFenV1Jzjh0-hwHaEj?pid=ImgDet&rs=1"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
        <Avatar src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Buy Now!</Button>
      </CardFooter>
       
    </Card>
    <Card className="col-span-4 h-[100px]" radius="none">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start" >
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        radius="none"
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/OIP.A4Z_eI9NJql6aEfjJ36cgwHaE8?pid=ImgDet&rs=1"
      />
     {/* <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Become Hot </p>
          <p className="text-black text-tiny">Buy it Now!.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Buy
        </Button>
      </CardFooter> */}
    </Card>
    <Card className="col-span-2 h-[100px]" radius="none">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        radius="none"
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/R.4da5ba87d259412dafbe0cc5a956fc4d?rik=gDgIr%2fjFkKUGAg&pid=ImgRaw&r=0"
      />
    </Card>
    <Card className="col-span-2 h-[100px]" radius="none">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        radius="none"
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/OIP.pEU1fMmGFhvDeHy9PmwyMAHaHa?pid=ImgDet&w=3000&h=3000&rs=1"
      />
    </Card>
    <Card isFooterBlurred className="col-span-4 h-[100px]" radius="none">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
      </CardHeader>
      <Image
        radius="none"
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://pbs.twimg.com/profile_banners/1552147927065174016/1684093620/1500x500"
      />
      {/* <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Become Hot </p>
          <p className="text-black text-tiny">Buy it Now!.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Buy
        </Button>
      </CardFooter> */}
    </Card>
    <Card className="col-span-2 h-[100px]" radius="none">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        radius="none"
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://preview.redd.it/c745q0p21kk81.png?width=1000&format=png&auto=webp&s=f2fc1bb1f34e7ec16045eceec829c3914af0a0b8"
      />
    </Card>
    <Card className="col-span-2 h-[100px]" radius="none">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        radius="none"
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://pbs.twimg.com/media/FlymstLXEAEP58W.jpg"
      />
    </Card>
  </div>
  );
}
