import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Image} from "@nextui-org/react";
import {FiThumbsUp, FiMessageCircle, FiSend} from "react-icons/fi"
import {PiCurrencyEthDuotone} from "react-icons/pi"
export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="w-full 2xl:w-50% items-center bg-inherit hover:bg-transparent" isHoverable="true">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/https://pbs.twimg.com/media/F9y3sA3a4AAoo5q?format=jpg&name=small" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">@zoeylang</h4>
            <h5 className="text-small tracking-tight text-default-400">Basic: 0.00078 Avax</h5>
          </div>
        </div>
        <div className="flex gap-1">
        <Button
        //   className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant="solid"
        //   onPress={() => setIsFollowed(!isFollowed)}
        >
          follow
        </Button>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="sm">
                Trade
              </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">

      
      <div className="grid grid-cols-2">
      {/* <Card className="grid col-span-2 sm:col-span-1 bg-transparent" radius="none" >
      <CardBody>
        <p></p>
      </CardBody>
    </Card> */}
      <div className="grid col-span-2 sm:col-span-1">
      Make beautiful websites regardless of your design experience. Make beautiful websites regardless of your design experience.Make beautiful websites regardless of your design experience.Make beautiful websites regardless of your design experience.Make beautiful websites regardless of your design experience.
        </div>
       <div className="grid col-span-2 sm:col-span-1">
       <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://pbs.twimg.com/media/F9y3sA3a4AAoo5q?format=jpg&name=small"
          // width="full"
        />
       </div> 
       </div> 
      </CardBody>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <div><FiThumbsUp /></div>
          <p className="font-semibold text-default-400 text-small">4</p>
        </div>
        <div className="flex gap-2">
          <div><FiMessageCircle /></div>
          <p className="font-semibold text-default-400 text-small">4</p>
        </div>
        <div className="flex gap-2">
          <div><FiSend /></div>
          <p className="font-semibold text-default-400 text-small">4</p>
        </div>
        <div className="flex gap-2">
          <div><PiCurrencyEthDuotone /></div>
          <p className="font-semibold text-default-400 text-small">4 AVAX</p>
        </div>
      </CardFooter>
    </Card>
  );
}
