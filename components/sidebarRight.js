import React from "react";
import {Listbox, ListboxItem, Avatar,Card, CardHeader, CardBody, Button, Divider, Tooltip} from "@nextui-org/react";
import {FiCheckCircle, FiXCircle} from "react-icons/fi"
// import {IconWrapper} from "./IconWrapper";
// import {ItemCounter} from "./ItemCounter";
// import {BugIcon} from "./BugIcon";
// import {PullRequestIcon} from "./PullRequestIcon";
// import {ChatIcon} from "./ChatIcon";
// import {PlayCircleIcon} from "./PlayCircleIcon";
// import {LayoutIcon} from "./LayoutIcon";
// import {TagIcon} from "./TagIcon";
// import {UsersIcon} from "./UsersIcon";
// import {WatchersIcon} from "./WatchersIcon";
// import {BookIcon} from "./BookIcon";
// import {ChevronRightIcon} from "./ChevronRightIcon";

export default function App() {
  return (
    <div className="w-full flex flex-col " >
        <h1 className="text-default-800 test-lg font-bold my-3"> Friend requests</h1>
       
               <Listbox 
      aria-label="User Menu"
      color="primary"
      // onAction={(key) => alert(key)}
      className="w-full gap-0 divide-y  dark:divide-default-100/80 bg-transparent max-w-[300px] overflow-visible shadow-small "
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem
        key="home"
      > 
         <div className="flex justify-between">
         <div className="flex gap-1">
            <Avatar src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-700">@0xwd3v</h6>
        </div>
        <div className="flex ">
        <Tooltip content="Approve">
              <Button isIconOnly className="bg-transparent hover:bg-sky-500" size="sm"><FiCheckCircle size={20} /></Button>
              </Tooltip>
              <Tooltip content="Decline">
              <Button isIconOnly className="bg-transparent hover:bg-red-500" size="sm"><FiXCircle size={20} /></Button>
              </Tooltip>
        </div>
         </div>

    
      </ListboxItem>
      <ListboxItem
        key="dashboard"
      > 
         <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-700">@0xwd3v</h6>
        </div>
        <div className="flex ">
        <Tooltip content="Approve">
              <Button isIconOnly className="bg-transparent hover:bg-sky-500" size="sm"><FiCheckCircle size={20} /></Button>
              </Tooltip>
              <Tooltip content="Decline">
              <Button isIconOnly className="bg-transparent hover:bg-red-500" size="sm"><FiXCircle size={20} /></Button>
              </Tooltip>
        </div>
         </div>
      </ListboxItem>
      <ListboxItem
        key="message"
      > 
       <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-700">@0xwd3v</h6>
        </div>
        <div className="flex ">
        <Tooltip content="Approve">
              <Button isIconOnly className="bg-transparent hover:bg-sky-500" size="sm"><FiCheckCircle size={20} /></Button>
              </Tooltip>
              <Tooltip content="Decline">
              <Button isIconOnly className="bg-transparent hover:bg-red-500" size="sm"><FiXCircle size={20} /></Button>
              </Tooltip>
        </div>
         </div>
      </ListboxItem>
      {/* <ListboxItem
        key="groups"
      > 
        <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-700">@0xwd3v</h6>
        </div>
        <div className="flex gap-1">
        <Button isIconOnly color="primary" aria-label="Like" size="sm">
        <FiCheckCircle />
      </Button>
      <Button isIconOnly color="danger" aria-label="Like" size="sm">
       <FiXCircle />
      </Button>
        </div>
         </div>
      </ListboxItem>
      <ListboxItem
        key="premium"
      > 
        <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-700">@0xwd3v</h6>
        </div>
        <div className="flex gap-1">
        <Button isIconOnly color="primary" aria-label="Like" size="sm">
        <FiCheckCircle />
      </Button>
      <Button isIconOnly color="danger" aria-label="Like" size="sm">
       <FiXCircle />
      </Button>
        </div>
         </div>
      </ListboxItem>
      <ListboxItem
        key="marketplace"
      > 
       <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar  src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-700">@0xwd3v</h6>
        </div>
        <div className="flex gap-1">
        <Button isIconOnly color="primary" aria-label="Like" size="sm">
        <FiCheckCircle />
      </Button>
      <Button isIconOnly color="danger" aria-label="Like" size="sm">
       <FiXCircle />
      </Button>
        </div>
         </div>
      </ListboxItem> */}
      
    </Listbox> 
    <h1 className="text-default-800 test-lg font-bold my-3">Trendy NFT</h1>
      
        <Listbox
      aria-label="User Menu"
      color="primary"
      onAction={(key) => alert(key)}
      className="w-full gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-transparent max-w-[300px] overflow-visible shadow-small "
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem
        key="home"
      > 
         <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar radius="sm" src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-800">0.002 AVAX</h6>
        </div>
        {/* <Button radius="full" color="primary"  size="sm">
                Trade
              </Button> */}
         </div>

    
      </ListboxItem>
      <ListboxItem
        key="dashboard"
      > 
      <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar radius="sm" src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-800">0.002 AVAX</h6>
        </div>
        {/* <Button radius="full" color="primary"  size="sm">
                Trade
              </Button> */}
         </div>
      </ListboxItem>
      <ListboxItem
        key="message"
      > 
        <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar radius="sm" src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-800">0.002 AVAX</h6>
        </div>
        {/* <Button radius="full" color="primary"  size="sm">
                Trade
              </Button> */}
         </div>
      </ListboxItem>
      {/* <ListboxItem
        key="groups"
      > 
       <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar radius="sm" src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-800">0.002 AVAX</h6>
        </div>
        <Button radius="full" color="primary"  size="sm">
                Trade
              </Button>
         </div>
      </ListboxItem>
      <ListboxItem
        key="premium"
      > 
        <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar radius="sm" src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-800">0.002 AVAX</h6>
        </div>
        <Button radius="full" color="primary"  size="sm">
                Trade
              </Button>
         </div>
      </ListboxItem>
      <ListboxItem
        key="marketplace"
      > 
        <div className="flex justify-between ">
         <div className="flex gap-1">
            <Avatar radius="sm" src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg" size="sm"/>
            <h6 className="text-sm font-bolds mt-1 text-default-800">0.002 AVAX</h6>
        </div>
        <Button radius="full" color="primary"  size="sm">
                Trade
              </Button>
         </div>
      </ListboxItem> */}
      
    </Listbox> 

       </div>
  );
}
