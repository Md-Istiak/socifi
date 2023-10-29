import {useState} from "react"
import { useSearchParams  } from 'next/navigation'
import {Button, Chip, Card, CardBody,Tab, Tabs, CardHeader, Avatar, AvatarGroup, useDisclosure} from "@nextui-org/react"
import TradeModal from "./TradeModal"
export default function DashContent(props){
  const {address, price} = props;
  
    const pathname = useSearchParams ()
    console.log(pathname)
      const [params, setParams] = useState(pathname)
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [state, setstate] = useState(0)
    console.log(params)
    const handleClick = (key)=>{
      setstate(key)
      onOpen()
    }
    return(
        <>
         <TradeModal isOpen={isOpen} onOpenChange={onOpenChange} option={state} address={address}/>
        <div className="w-full static justify-between flex   ">
        <div className="w-1/3 flex gap-5 ">
              {/* <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" /> */}
              <div className="w-full flex flex-col gap-2 items-start justify-center">
                <h4 className="text-small font-bold leading-none underline  decoration-1 text-sky-500">Price</h4>
                <h4 className="text-medium font-bold leading-none  decoration-1 text-sky-700">{`${(price/(10**18)).toFixed(6)} avax`}</h4>
                <h5 className="text-small tracking-tight text-default-400">Token ID: 1</h5>
                <Chip color="secondary">ERC-1155</Chip>
              </div>
            </div>
            <div className=" w-2/3 flex justify-end  gap-2  pr-0.5" >
           <div>
            <Button
              className={false ? "bg-transparent text-foreground gorw border-default-200" : ""}
              color="primary"
              radius="full"
              size="sm"
              onPress={onOpen}
              variant={false ? "bordered" : "solid"}
            //   onPress={() => setIsFollowed(!isFollowed)}
            >
              Trade 
            </Button></div>
            
            <div>
            <Button
              className={false ? "bg-transparent grow text-foreground border-default-200" : ""}
              color="primary"
              radius="full"
              size="sm"
              variant={false ? "bordered" : "solid"}
              onPress={() => handleClick("4")}
            >
              Subscribe 
            </Button></div>
            <div>
            <Button
              className={false ? "bg-transparent text-foreground border-default-200" : ""}
              color="primary"
              radius="full"
              size="sm"
              variant={false ? "bordered" : "solid"}
              onPress={() => handleClick("5")}
            >
              Upgrade 
            </Button></div>
            </div>
            </div>
            
            <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-2">
       
        <Card className="col-span-12 sm:col-span-4 h-[100px] mt-2">
        <CardHeader className="">
          <h4 className="text-small font-bold leading-none  decoration-1 text-sky-500">Holdings</h4>
          </CardHeader>
          <AvatarGroup
          className="p-2"
            size="sm"
          isBordered
          max={3}
          total={10}
          renderCount={(count) => (
            <p className="font-semibold text-default-400 text-small mx-1"> + {count} other Holdings</p>
          )}
        >
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[100px]">
        <CardHeader className="">
          <h4 className="text-small font-bold leading-none  decoration-1 text-sky-500">Holders</h4>
          </CardHeader>
          <AvatarGroup
            className="p-2"
            size="sm"
          isBordered
          max={3}
          total={10}
          renderCount={(count) => (
            <p className="font-semibold text-default-400 text-small mx-1"> + {count} other Holders</p>
          )}
        >
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[100px]">
         <CardHeader className="">
          <Tabs variant="underlined" color="primary" aria-label="Disabled Options">
            <Tab key="photos" title="Buy">
              <Card>
                <CardBody className="flex items-center">
                <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">245876543</h2>
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="music" title="Sell">
              <Card>
              <CardBody className="flex items-center">
                <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">5678809097</h2>
                </CardBody>
              </Card> 
            </Tab>
          </Tabs>
        </CardHeader>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[100px]">
        <CardHeader className="">
          <h4 className="text-small font-bold leading-none  decoration-1 text-sky-500">Total Supply</h4>
          </CardHeader>
          <Card className="m-2">
              <CardBody className="flex items-center">
                <h2 className="text-large font-bold leading-none   text-default-800">5678809097</h2>
                </CardBody>
          </Card>  
        </Card>
        
      </div>
      </>
    )
}