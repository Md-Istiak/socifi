"use client"
import {useDisclosure} from "@nextui-org/react"
import SidebarLeft from "../../components/sidebarLeft"
import SidebarRight from "../../components/sidebarRight"
import NotiFy from "../../components/notifycard"
import Create from "../../components/create"
import PostList from "../../components/postlist"
import CreateModal from "../../components/createmodal"
export default function home(){
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return(
      <>
        <div className="grid  grid-cols-12 grid-rows-1 justify-center bg-white "> 
        <div className="hidden sm:grid col-span-2 "><SidebarLeft /></div>
        <div className="grid col-span-12 sm:col-span-8 overflow-y-auto ">
         <NotiFy/>
          <Create openModal={onOpen}/>
          <PostList />
          <CreateModal Open={isOpen} onOpenChange={onOpenChange} />
        </div>
        {/* <div className="hidden sm:grid col-span-2 "><SidebarRight/></div> */}
        </div>
        </>
    )
}