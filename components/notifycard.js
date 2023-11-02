import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function App() {
  return (
    <div className="grid grid-cols-12 grid-rows-1 ">
        <div className="w-full col-span-4 h-100px border-2 border-black row-span-2 ">hello</div>
        <div className="w-full col-span-4 h-50px border-2 border-black ">hello</div>
        <div className="w-full col-span-2 h-50px border-2 border-black ">hello</div>
        <div className="w-full col-span-2 h-50px border-2 border-black ">hello</div>
        <div className="w-full col-span-4 h-50px border-2 border-black ">hello</div>
        <div className="w-full col-span-2 h-50px border-2 border-black">hello</div>
        <div className="w-full col-span-2 h-50px border-2 border-black">hello</div>  
    </div>
  );
}
