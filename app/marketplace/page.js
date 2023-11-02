"use client"
import {Card,CardBody, CardHeader, Image, Button, CardFooter, Avatar, Dropdown, DropdownItem, DropdownMenu,Accordion, AccordionItem, DropdownTrigger, Tabs, Tab} from "@nextui-org/react"
import SidebarLeft from "../../components/sidebarLeft"

import NotiFy from "../../components/notifycard"
import Create from "../../components/create"
import PostList from "../../components/postlist"
export default function home(){
    const list = [
        {
          title: "Orange",
          img: "/images/fruit-1.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/images/fruit-2.jpeg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "/images/fruit-3.jpeg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "/images/fruit-4.jpeg",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: "/images/fruit-5.jpeg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "/images/fruit-6.jpeg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "/images/fruit-7.jpeg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "/images/fruit-8.jpeg",
          price: "$12.20",
        },
      ];
    return(
        <div className="grid  grid-cols-12 grid-rows-1 justify-center bg-white "> 
        <div className="hidden sm:grid col-span-2 "><SidebarLeft /></div>
        <div className="grid col-span-12 sm:col-span-10 overflow-y-auto ">
        <Card radius="none">
            <CardHeader className="flex justify-between">
               <h2 className="text-medium text-default-800 font-bold">Marketplace</h2>
               <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Create NFT
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit", "delete"]}>
        <DropdownItem key="new"> Private NFt</DropdownItem>
        <DropdownItem key="copy">Public NFt</DropdownItem>
        <DropdownItem key="edit">Add NFt</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete NFt
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
            </CardHeader>
            <CardBody>
            <Tabs  variant="underlined" aria-label="Tabs variants">
          <Tab key="all" title="All">
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small flex justify-between">
          <Accordion>
         <AccordionItem key="1" aria-label="Accordion 1" title={
                 <div className="flex justify-between ">
                 <div className="flex gap-1">
                    <Avatar  src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
                    <h6 className="text-sm font-bolds mt-1 text-default-800">0.002 AVAX</h6>
                </div>
                <Button radius="full" color="primary"  size="sm">
                        Trade
                      </Button>
                 </div>
         }>
          <div>NFT details</div>
         </AccordionItem>
     
    </Accordion>
          
          </CardFooter>
        </Card>
      ))}
    </div>
          </Tab>
          <Tab key="myNft" title="My NFt"/>
          <Tab key="trend" title="Trending"/>
          <Tab key="saved" title="Saved"/>
        </Tabs>
            </CardBody>
        </Card>
       

          
        </div>
        </div>
    )
}