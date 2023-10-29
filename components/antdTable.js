
import {FiSearch} from "react-icons/fi"
import { useRouter } from 'next/navigation'
import React, { useRef, useState , useEffect} from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import {User} from "@nextui-org/react"
import thriftyABI from "../data/thriftyABI.json"
import accountABI from "../data/accountAbi.json"
import {JsonRpcProvider, Contract} from "ethers"
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     price: 32,
//     volume:45,
//     holding:20,
//     holder:78,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Joe Black',
//     price: 32,
//     volume:57,
//     holding:70,
//     holder:45,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Jim Green',
//     price: 12,
//     volume:90,
//     holding:50,
//     holder:60,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     price: 320,
//     volume:675,
//     holding:10,
//     holder:88,
//     address: 'London No. 2 Lake Park',
//   },
// ];
const App = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [data , setData] = useState([])
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<FiSearch />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <FiSearch
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      fixed: 'left',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '10%',
      
      ...getColumnSearchProps('price'),
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
      key: 'volume',
      width: '10%',
      
      ...getColumnSearchProps('volume'),
      sorter: (a, b) => a.volume - b.volume,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Holdings',
      dataIndex: 'holding',
      key: 'holding',
      width: '10%',
      
      ...getColumnSearchProps('holding'),
      sorter: (a, b) => a.holding - b.holding,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Holders',
      dataIndex: 'holder',
      key: 'holder',
      width: '10%',
      
      ...getColumnSearchProps('holder'),
      sorter: (a, b) => a.Holders - b.Holders,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '10%',
      
      // ...getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Activity',
      dataIndex: 'activity',
      key: 'activity',
      width: '10%',
      fixed: 'right',
      // ...getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
  ];

  useEffect(()=>{
     const getcontract = async()=>{
      var customHttpProvider = new JsonRpcProvider(
        "https://api.avax-test.network/ext/C/rpc"
      );
      const users = [];
    console.log(customHttpProvider)
      const thriftyNFT = new Contract("0x205D8513bC1ad6F5345C73392A49D629A7b8b5c0", thriftyABI, customHttpProvider);
      console.log(thriftyNFT);
    const numAccount = Number(await thriftyNFT._tokenIds());
    for (let index = 0; index < numAccount; index++) {
      
      const account = await thriftyNFT.TBAbytokenId(index);
      const slicedAddress = account.slice(0, 4) + "..." + account.slice(-4);
      const uri =  await thriftyNFT.tokenURI(index);
      const status = await thriftyNFT.nfts(account);
      const userId = await thriftyNFT.userByTokenId(index);
      let user = {
        key: account,
      name : <User   
        // name="Jane Doe"
        // description="Product Designer"
        avatarProps={{
          src: {uri}
        }}
      />,
      price : Number(status[0].toString()/(10**18)).toFixed(4),
      // user.push(slicedAddress)
      volume : (Number(status[1].toString()/(10**18)).toFixed(4)) ,
      holding : (""),
      holder : (""),
      address : slicedAddress,
      activity : 
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >Buy</Button>
      
      }

      users.push(user)
      
    }
    setData(users)
    }
    getcontract()
  },[])
  
  return <Table columns={columns} dataSource={data}  expandable={true}  scroll={{
    x: 800
  }}
  onRow={(record) => {
    return {
      onClick: (e) => {router.push(`http://localhost:3000/user/nft?address=${record.key}`)}, // click row
    };
  }}/>;
};
export default App;
