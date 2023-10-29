"use client"
import {useEffect, useState} from "react";
import getContract from "../data/contract";
import MasterTable from "./antdTable";
import {GrOverview} from "react-icons/gr"
import {Card, CardHeader, CardBody, Divider,Accordion, AccordionItem, Avatar, AvatarGroup, Tabs, Tab} from "@nextui-org/react"
export default function Widget(){
    
    const [data, setdata] = useState([])
    // useEffect(() => {
    //   getContract().then((res)=> {
    //     setdata(res)
    //     console.log(res)
    //   })},[]);
    return(
        <>
       
        <Accordion fullWidth={true} className="" >
      <AccordionItem key="1" aria-label="Accordion 1" title={
        <div className="flex space-x-2">
        <GrOverview size={25}/>
      <span className="font-semibold text-default-200 text-large mx-1">OverView</span>
        </div>
      }>
      <div className="w-full   grid grid-cols-12 grid-rows-2 gap-1 sm:mt-2 border-none bg-transparent ">
      <Card className="w-full col-span-12 sm:col-span-4 h-[160px]">
   <CardHeader className="">
     <h4 className="text-medium font-bold leading-none  decoration-1 text-sky-500">TOTAL VALUE LOCK</h4>
     </CardHeader>
     <div className="flex w-full flex-col">
      <Tabs variant="underlined" color="primary" aria-label="Disabled Options">
        <Tab key="photos" title="Last 24hr">
          <Card>
            <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">245876543</h2>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Till Today">
          <Card>
          <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">5678809097</h2>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
   </Card>
   <Card className="col-span-12 sm:col-span-4 h-[160px]">
   <CardHeader className="">
     <h4 className="text-medium font-bold leading-none  decoration-1 text-sky-500">TOTAL VALUE LOCK</h4>
     </CardHeader>
     <div className="flex w-full flex-col">
      <Tabs variant="underlined" color="primary" aria-label="Disabled Options">
        <Tab key="photos" title="Last 24hr">
          <Card>
            <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">245876543</h2>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Till Today">
          <Card>
          <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">5678809097</h2>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
   </Card>
   <Card className="col-span-12 sm:col-span-4 h-[160px]">
   <CardHeader className="">
     <h4 className="text-medium font-bold leading-none  decoration-1 text-sky-500">TOTAL DISTRIBUTION</h4>
     </CardHeader>
     <div className="flex w-full flex-col">
      <Tabs variant="underlined" color="primary" aria-label="Disabled Options">
        <Tab key="photos" title="Last 24hr">
          <Card>
            <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">245876543</h2>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Till Today">
          <Card>
          <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">45374737412</h2>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
   </Card>
   <Card className="col-span-12 sm:col-span-4 h-[100px]">
    <CardHeader className="">
    <h4 className="text-medium font-bold leading-none  decoration-1 text-sky-500">USERS</h4>
      </CardHeader>
      <AvatarGroup
        className="p-2"
        size="sm"
      isBordered
      max={10}
      total={1000}
      renderCount={(count) => (
        <p className="font-semibold text-default-400 text-small mx-1"> + {count} other Users</p>
      )}
    >
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[100px]">
    <CardHeader className="">
    <h4 className="text-medium font-bold leading-none  decoration-1 text-sky-500">NFTs</h4>
      </CardHeader>
      <AvatarGroup
        className="p-2"
        size="sm"
      isBordered
      max={4}
      total={1000}
      renderCount={(count) => (
        <p className="font-semibold text-default-400 text-small mx-1"> + {count} other NFTs</p>
      )}
    >
      <Avatar radius="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar radius="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar radius="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar radius="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar radius="sm"  src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar radius="sm"   src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar radius="sm"  src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
    </Card>
   <Card className="col-span-12 sm:col-span-4 h-[100px]">
     <CardHeader className="">
      <Tabs variant="underlined" color="primary" aria-label="Disabled Options">
        <Tab key="photos" title="Total Buy">
          <Card>
            <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">245876543</h2>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Total Sell">
          <Card>
          <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">5678809097</h2>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
     </CardHeader>
     {/* <Divider className="my-1 px-1"/> */}
     {/* <CardBody>
     <Tabs variant="underlined" color="primary" aria-label="Disabled Options">
        <Tab key="photos" title="Last 24hr">
          <Card>
            <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">245876543</h2>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Till Today">
          <Card>
          <CardBody className="flex items-center">
            <h2 className="text-large font-bold leading-none  decoration-1 text-default-800">5678809097</h2>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
     </CardBody> */}
     
   </Card>
        
   </div>
        
      </AccordionItem>
      
       
    </Accordion>

   <MasterTable userdata={data}/>
        </>
    )
}