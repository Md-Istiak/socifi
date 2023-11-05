"use client"
import {useState, useEffect} from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname , useRouter} from 'next/navigation'
import {LinkTo} from 'next/link'
import metamask from "../public/images/metmask.png"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,NavbarMenuToggle, Button, Input,  DropdownItem,Link, Badge, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenuItem, NavbarMenu, Tooltip} from "@nextui-org/react";
import Logo from "../components/AcmeLogo"
import { FiAlignJustify, FiHome, FiSearch, FiMessageCircle, FiMessageSquare} from "react-icons/fi";
import {BsWallet2} from "react-icons/bs"
import {GrNotification} from "react-icons/gr"
import {GiFoxHead} from "react-icons/gi"
export default function Nav(){
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, status } = useSession()
  const [User, setUser] = useState(session);
  const [state, setStatus] = useState(status)
  console.log(session)
  console.log(status)
  // useEffect(()=>{
  //   setUser(session)
  //   setStatus(status)
  // } , [])

  const handlelink = (keyword)=>{
    const path = keyword.toLowerCase()
    // if(path == "dashboard"){
    //   router.push(process.env.NEXTAUTH_URL)
    // }else{
    // router.push(process.env.NEXTAUTH_URL.concat(path))
    // }
    
  }
  useEffect(()=>{
    setUser(session)
    setStatus(status)
  },[status])
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Dashboard",
    "Message",
    "Groups",
    "Marketplace",
    "Premium",
    "Settings"
  ];

  return (
    <Navbar isBordered  className="bg-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <Logo/> */}
          <p className=" font-bold text-black">Thrifty</p>
        </NavbarBrand>
       

      </NavbarContent>

     
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-[40px] sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FiSearch size={18} />}
          type="search"
        />
        <NavbarItem>
        <Badge content="5" color="warning"><GrNotification size={25}/></Badge>
        </NavbarItem>
        <NavbarItem>
        <Badge content="5" color="warning"><FiMessageSquare size={25}/></Badge>
         
        </NavbarItem>
       {/* { state == "authenticated" ? */}
        <Dropdown >
      <DropdownTrigger>

      {/* <Badge
        isOneChar
        content={<Tooltip content="metamask connected"><GiFoxHead /></Tooltip>}
        color="success"
        placement="bottom-right"
      > */}
      <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://pbs.twimg.com/profile_images/1657834006229164034/DQSW-DS3_400x400.jpg"
            />
        {/* </Badge> */}
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="">
      <DropdownItem key="profile" className="h-14 gap-2" >
              <p className="font-semibold text-default-800">signed in as</p>
              <p className="font-semibold text-default-800">{"istiak"}</p>
            </DropdownItem>
            <DropdownItem key="settings" className="text-default-800"><Link href="/user/4">My Profile</Link></DropdownItem>
            <DropdownItem key="team_settings" className="text-default-800"
             startContent={
              <div className="flex gap-1">
                <BsWallet2/>
                <h6>dappWallet</h6>
              </div>
             } 
             endContent={<h4>0.2334 AVAX</h4>}
             />
            <DropdownItem key="analytics" className="text-default-800"
            startContent={
              <div className="flex gap-1">
                <FiMessageCircle/>
                <h6>Messages</h6>
              </div>
             } 
             endContent={<h4>10</h4>}
             />
            <DropdownItem key="system" className="text-default-800"
            startContent={
              <div className="flex gap-1">
                <GrNotification/>
                <h6>Messages</h6>
              </div>
             } 
             endContent={<h4>23</h4>}
             />
            <DropdownItem key="configurations" className="text-default-800"startContent={
              <div className="flex gap-1">
                <GrNotification/>
                <h6>Deshboard</h6>
              </div>
             } 
             
             />
            <DropdownItem key="help_and_feedback" className="text-default-800"startContent={
              <div className="flex gap-1">
                <GrNotification/>
                <h6>My NFTs</h6>
              </div>
             } 
             
             />
             <DropdownItem key="help_and_feedback" className="text-default-800"startContent={
              <div className="flex gap-1">
                <GrNotification/>
                <h6>Reffaral and Gifts</h6>
              </div>
             } 
             
             />
             <DropdownItem key="help_and_feedback" className="text-default-800"startContent={
              <div className="flex gap-1">
                <GrNotification/>
                <h6>Friends and followers</h6>
              </div>
             } 
             
             />
             <DropdownItem key="help_and_feedback" className="text-default-800"startContent={
              <div className="flex gap-1">
                <GrNotification/>
                <h6>Settings</h6>
              </div>
             } 
             
             />
             <DropdownItem key="help_and_feedback" className="text-default-800"startContent={
              <div className="flex gap-1">
                <GrNotification/>
                <h6>Terms And Conditions</h6>
              </div>
             } 
             
             />
             <DropdownItem key="help_and_feedback" className="text-default-800"startContent={
              <div className="flex gap-1">
                <GrNotification/>
                <h6>Privacy Policy</h6>
              </div>
             } 
             
             />
            <DropdownItem key="logout" color="danger" className="text-default-800" onClick={() => signOut({redirect:false})}>
              Log Out
            </DropdownItem>
      </DropdownMenu>
    </Dropdown>
{/* :
 <Button onClick={() => signIn('github', {redirect:false})}> Sign In </Button>
}  */}
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu >
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold ext-default-800">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}
          onClick={handlelink(item)}
          >
            {item}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
