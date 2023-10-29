"use client"
import {useState, useEffect} from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname } from 'next/navigation'
import {LinkTo} from 'next/link'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,NavbarMenuToggle, Button, Input, DropdownItem,Link, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { FiAlignJustify, FiHome, FiSearch} from "react-icons/fi";

export default function App() {
  const pathname = usePathname()
  console.log(pathname)
  const { data: session, status } = useSession()
  const [User, setUser] = useState(session);
  const [state, setStatus] = useState(status)
  console.log(session)
  console.log(status)
  // useEffect(()=>{
  //   setUser(session)
  //   setStatus(status)
  // } , [])
  useEffect(()=>{
    setUser(session)
    setStatus(status)
  },[status])
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered  className="bg-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-black">Thrifty</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" >
        <NavbarItem  isActive={pathname == "/reg"}>
          <Link color="foreground" href="/reg">
            {/* <  FiAlignJustify size={25}/> */}
            <span className="font-semibold text-default-600 text-medium">Home</span>
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/sw.js"} >
          <Link  color="foreground" href="/" aria-current="page">
          {/* <FiHome size={25}/> */}
          <span className="font-semibold text-default-600 text-medium">Trade View</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {/* < FiHome size={25}/> */}
            <span className="font-semibold text-default-600 text-medium">Marketplace</span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      </NavbarContent>

     
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FiSearch size={18} />}
          type="search"
        />
       { state == "authenticated" ?
        <Dropdown >
      <DropdownTrigger>
      <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={User.user.image}
            />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="">
      <DropdownItem key="profile" className="h-14 gap-2" >
              <p className="font-semibold text-default-800">signed in as</p>
              <p className="font-semibold text-default-800">{User.user.name}</p>
            </DropdownItem>
            <DropdownItem key="settings" className="text-default-800"><Link href="/user/4">My Profile</Link></DropdownItem>
            <DropdownItem key="team_settings" className="text-default-800">Team Settings</DropdownItem>
            <DropdownItem key="analytics" className="text-default-800">Analytics</DropdownItem>
            <DropdownItem key="system" className="text-default-800">System</DropdownItem>
            <DropdownItem key="configurations" className="text-default-800">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback" className="text-default-800">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" className="text-default-800" onClick={() => signOut({redirect:false})}>
              Log Out
            </DropdownItem>
      </DropdownMenu>
    </Dropdown>
:
 <Button onClick={() => signIn('github', {redirect:false})}> Sign In </Button>
} 
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
    </Navbar>
  );
}
