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
  return (
    <div className="w-full flex  justify-end" >
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
        color="black"
        onClick={router.push(`https://socifi.vercel.app/home`)}
        
      > 
        <h4 className="text-default-800 text-lg font-bold">Home</h4>
      </ListboxItem>
      <ListboxItem
        key="dashboard"
        onClick={router.push(`https://socifi.vercel.app`)}
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
        onClick={router.push(`https://socifi.vercel.app/marketplace`)}
      > 
        <h4 className="text-default-800 text-lg font-bold">Marketplace</h4>
      </ListboxItem>
      <ListboxItem
        key="marketplace"
      > 
        <h4 className="text-default-800 text-lg font-bold">Premium</h4>
      </ListboxItem>
      
    </Listbox>
    </div>
  );
}
