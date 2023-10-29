import { getServerSession } from "next-auth/next"
import Profile from "./profile"
import RegPage from "../../../components/sign-in"
export default async function UserProfileMain() { 
    const session = await getServerSession() 
    return(
        <>
        {session == undefined ? <RegPage/> : <Profile/>}
        </>
    )
}