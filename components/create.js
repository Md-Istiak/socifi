import {Avatar, Textarea, Button, Divider, Tooltip} from "@nextui-org/react"
import {FiPlusCircle, FiImage} from "react-icons/fi";
export default function homePost(props){
  const {openModal} = props;
    return(
        <>
        {/* <div className="w-full flex  justify-between"> */}
         <div className=" flex flex-col items-center  mt-2">
            <div className=" w-5/6 flex gap-5">
            <Avatar className="w-45px mt-2" isBordered radius="full" size="md" src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/369909897_1742868839485075_4269428407098174442_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRKCjxfbvPhSbN3m9LETZMpOwLu7hhNv6k7Au7uGE2_tFzetayltNaArsfcWdaPCm9WK3STCua0eXsrvSCGAtm&_nc_ohc=gh_W3RJnSyoAX8dwHjY&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfDZ5dS_pwktlJl7TgSjwpIPUGgl3-6YKuDYwsGHyIjVfw&oe=65468983" />
            <Textarea
              isReadOnly
              // label="Description"
              variant="bordered"
              // labelPlacement="outside"
              placeholder="Dude! Express your Mode!"
              // defaultValue=""
              className="w-90%"
              maxRows={1}
             />
            </div>
            
            <div  className="w-5/6 flex justify-between mt-1 pl-11">
              <div className="flex gap-9  pl-5">
              <Tooltip content="Create An NFT">
              <Button isIconOnly className="bg-transparent" size="sm" onClick={openModal}><FiPlusCircle size={20} /></Button>
              </Tooltip>
              <Tooltip content="Add photos">
              <Button isIconOnly className="bg-transparent" size="sm"><FiImage size={20} /></Button>
              </Tooltip>
                
              </div>
              <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="sm">
                Post
              </Button>


            </div>
          
          
      </div>
      
      
        </>
    )
}