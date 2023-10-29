"use client"
import {Table, EmptyRowsForSkeletonTable, Avatar, Input, Button} from "@web3uikit/core"
import { useRouter } from 'next/navigation'
import {FiSearch} from "react-icons/fi"
export default function Widget(props){
  const router = useRouter()

    const {userdata} = props;
         return(
             <>
            <div className="w-full  px-1">
            {/* <Input
          classNames="w-full bg-white m-1"
          placeholder="Type to search..."
          size="sm"
          startContent={<FiSearch size={18} />}
          type="search"
          fullWidth={true}
        /> */}
        <Input
      isClearable
      type="search"
      variant="bordered"
      placeholder="Type to search..."
      onClear={() => console.log("input cleared")}
      className="w-full "
      startContent={<FiSearch size={18} color="white"/>}
      fullWidth={true}
    />

            </div>

             
           <Table
        className="mt-2 p-1"
  columnsConfig="1fr 1fr 1fr 1fr 1fr 1fr "
//   customLoadingContent={<div className="flex-col w-full h-auto"><EmptyRowsForSkeletonTable /><EmptyRowsForSkeletonTable /><EmptyRowsForSkeletonTable /></div>}
   data={
    // userdata}
   [
    [
      <Avatar isRounded size={36} theme="image" image="./favicon.ico"/>,
      9,
      7,
      7,
      8,
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
      
    ],
    [
      <Avatar fontSize={36} isRounded theme="image"/>,
      87,
      6,
      7,
      8,
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
      
    ],
    [
      <Avatar fontSize={36} isRounded theme="image"/>,
      87,
      5,
      4,0,
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
      
    ],
    [
      <Avatar fontSize={36} isRounded theme="image"/>,
      53,
      4,
      9,2,
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
      
    ],
    
    [
      <Avatar fontSize={36} isRounded theme="image"/>,
      11,
      2,
      1,10,
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
      
    ],
   
   
    [
      <Avatar fontSize={36} isRounded theme="image"/>,
      7,
      3,
      5,4,
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
     
    ],
    [
      <Avatar fontSize={36} isRounded theme="image"/>,
      5,
      1,
      2,7,
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
      
    ]
  ]}

  header={[
    <span>User</span>,
    <span>Price</span>,
    <span>address</span>,
    <span>Holder</span>,
    <span>Holding</span>,
    <span>Activity</span>
  ]}
  isColumnSortable={[
    false,
    true,
    true,
    true,
    true,
    true
  ]}
  isScrollableOnOverflow={true}
//   isLoading={userdata.length == 0}
  maxPages={3}
  onPageNumberChanged={function noRefCheck(){}}
   onRowClick={() => router.push('/user/4')}
  pageSize={6}
/>
         </>
//  <div> hello</div>
    )
}