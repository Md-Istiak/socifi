import {useState, UseEffect} from "react"
import NextImage from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import profile_cover_img from '/public/images/profile-cover-img.png';
import {Image, Avatar, AvatarGroup, Accordion, AccordionItem, Button, Divider, Chip} from "@nextui-org/react";
import {BsWallet2} from "react-icons/bs"
import {RiNftFill} from "react-icons/ri"


export default  function UserAbout(props){
  
  const { data: session, status } = useSession()
  const [User, setUser] = useState(session);
  const [state, setStatus] = useState(status)
    return (
        <div>
              <NextImage
            className='avatar-img w-100 h-30  rounded-md'
             src={profile_cover_img}
            alt='image'
          />
       
        <div className="w-full flex-col gap-2  mt-2">
        
    <div className="flex justify-between p-2">
    <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={User.image} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{User.name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={false ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={false ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {false ? "Unfollow" : "Follow"}
        </Button>
        </div>
        <div className="px-3 py-1 text-small text-default-400">
        <h3>NFT Address: </h3><Snippet>0x000000000000000000000000000000 </Snippet>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
        
      </div>
      <div className="flex gap-3 justify-start p-2">
        <div className="">
        <AvatarGroup
        size="sm"
      isBordered
      max={3}
      total={10}
      renderCount={(count) => (
        <p className="font-semibold text-default-400 text-small mx-1"> +{count} followers</p>
      )}
    >
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
        </div>
      </div>

          {/* <div className=" w-1/3 mt-1 h-400px ">
          <User   
      name="Junior Garcia"
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
          @jrgarciadev
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
      }}
      // className="w-full h-full"
    />
    </div>
    <div className="w-2/3 h-300px mt-1 ">
      {/* hello */}
    {/* <Card className=" w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card> 
     </div> */} 
        </div>
          {/* <Divider className="my-1"/> */}
          <Accordion variant="multiple" disableKeys={[1]}>
      {/* <AccordionItem key="1" aria-label="Accordion 1" title={
            <div className="w-full  flex justify-between space-x-2">
                <div className="flex space-x-2">
                <BsWallet2 size={25}/>
              <span className="font-semibold text-default-600 text-large mx-1">DappWallet</span>
                </div>
                <h3>hello</h3>
              
            </div>
          }>
      
      </AccordionItem> */}
      <AccordionItem key="2" aria-label="Accordion 1" title={
            <div className="w-full  flex justify-between space-x-2">
            <div className="flex space-x-2">
            <RiNftFill size={25}/>
          <span className="font-semibold text-default-600 text-large mx-1">NFT Info</span>
            </div>
           <div className="fles gap-8">
           <Chip color="secondary" size="md">ERC-721</Chip>
           <Chip color="success" size="md">ERC-6551</Chip>
           </div>
          
        </div>
          }>
      <p className="font-semibold text-default-400 text-small mx-1">#Token ID: 2</p>
      <p className="font-semibold text-default-400 text-small mx-1">Contract Address: ##################</p>
      </AccordionItem>
    </Accordion>
       
       
      {/* <div className=" w-full flex h-5 items-start space-x-4 text-small">
        <div>DASHBOARD</div>
        <Divider orientation="vertical" />
        <div>POST</div>
        <Divider orientation="vertical" />
        <div>NFTS</div>
        <Divider orientation="vertical" />
        <div>PHOTOS</div>
      </div> */}
        </div>
    )
}