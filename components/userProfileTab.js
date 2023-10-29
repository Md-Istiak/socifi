import {Tabs, Tab, } from "@nextui-org/react"
import {FiAirplay, FiSidebar, Divider} from "react-icons/fi"
import {RiNftFill} from "react-icons/ri"
import DashBoard from "./dashboard"
export default function ProfileTab(props){
  const {address} = props;
    return (
        <>
        <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="light" >
        <Tab
          key="dashboard"
          title={
            <div className="flex items-center space-x-2">
              <FiAirplay/>
              <span>Dashboard</span>
            </div>
          }
        >
        {/* <Divider className=" w-full my-1"/> */}
        <DashBoard address={address} />
        </Tab>
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <FiSidebar/>
              <span>Post</span>
            </div>
            
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <RiNftFill/>
              <span>NFTs</span>
            </div>
           
          }
        />
      </Tabs>
      </div> 
        </>
    )
}