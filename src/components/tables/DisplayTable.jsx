import {  Table } from 'antd';
import {DeleteOutlined,EditOutlined} from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { deleteItem,updataItem } from '../../store/displayData';
import ModfiyItems from '../modal/ModfiyItems';
import { useState } from 'react';
const DisplayTable  = ({data,setUpdata,totalIncome,setIsModalOpen,isModalOpen}) => {
const dispatch = useDispatch()
const [updataItemsId,setUpdataItemsId] = useState(null)

  const handleUpdate = (id) =>{
    dispatch(updataItem(id))
     setIsModalOpen(true)
     setUpdataItemsId(id)
  }
 
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
 
    },
    {
      title:'Income',
      dataIndex:'income',
      sorter: true,
 
     },
     {
      title: 'Expenses',
      dataIndex: 'expenses',
      sorter: true,
 
     },
     
    {
      title: 'Category',
      dataIndex: 'category',
      sorter: true,
 
     },
    {
      title: 'Date',
      dataIndex: 'date',
      sorter: true,
 
      },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: true,
 
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
 
      render: (_,record) => (
        <span onClick={()=>handleUpdate(record.id)} style={{color:"#00635B",cursor:"pointer",fontWeight:"bold",fontSize:"20px"}}>
           <EditOutlined />
        </span>
      ),  
    },
 
    {
      title: 'Delete',
      dataIndex: 'delete',
 
      render: (_,record) => (
        <span onClick={()=>dispatch(deleteItem(record.id))} style={{color:"red",cursor:"pointer",fontWeight:"bold",fontSize:"20px"}}>
         <DeleteOutlined />
        </span>
      ),
    },
  ];
 
  return (
    <>
    <Table columns={columns} dataSource={data}  scroll={{ x: true }}/>
    <ModfiyItems isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} updataItemsId={updataItemsId}/>
    </>
  );
};

export default DisplayTable;