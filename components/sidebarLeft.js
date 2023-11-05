import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const handlesidebar = (keyword)=>{
    console.log(`${process.env.NEXTAUTH_URL}${keyword}`)
    if(keyword == "dashboard"){
      router.push(process.env.NEXTAUTH_URL)
    }else{
    router.push(process.env.NEXTAUTH_URL.concat(keyword))
    }
    
  }
  return (
    <div className="w-full flex  justify-end" >
    <Listbox
      aria-label="User Menu"
      onAction={(key) => handlesidebar(key)}
      className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem
        key="home" 
      > 
        <h4 className="text-default-800 text-lg font-bold">Home</h4>
      </ListboxItem>
      <ListboxItem
        key="dashboard"
        
      > 
        <h4 className="text-default-800 text-lg font-bold">Dashboard</h4>
      </ListboxItem>
      <ListboxItem
        key="message"
      > 
        <h4 className="text-default-800 text-lg font-bold">Message</h4>
      </ListboxItem>
      <ListboxItem
        key="groups"
      > 
        <h4 className="text-default-800 text-lg font-bold">Groups</h4>
      </ListboxItem>
      <ListboxItem
        key="marketplace"
        
      > 
        <h4 className="text-default-800 text-lg font-bold">Marketplace</h4>
      </ListboxItem>
      <ListboxItem
        key="premium"
      > 
        <h4 className="text-default-800 text-lg font-bold">Premium</h4>
      </ListboxItem>
      
    </Listbox>
    </div>
  );
}
