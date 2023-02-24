import React from "react";
import { BlockUser } from "../Api/adminApi/getRequest";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {
    Inject,
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Search,
    Page,
    Toolbar,
  } from "@syncfusion/ej2-react-grids";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getUser } from '../Api/adminApi/getRequest';
import { useEffect } from 'react';

  
  function App() {

  
  // const data=[{username:"uhnhu",email:'njdsnkgshdigd',status:'blocked',Actions:'hhdfjdi'},{username:"uhnhu",email:'njdsnkgshdigd',status:'blocked',Actions:'hhdfjdi'},{username:"uhnhu",email:'njdsnkgshdigd',status:'blocked',Actions:'hhdfjdi'}]
  // console.log(data)
  const [users,setUsers]=useState([])
  const [change, setChange] = useState(false);
  const dispatch = useDispatch()
  useEffect(()=>{
    const getUsers=async()=>{
      try {
        const {data}=await getUser()
        setUsers(data)
        console.log(data,"jjjjjjjjjjjjjjjjj")
      } catch (error) {
        
      }
    }
    getUsers()
  },[change])

  
  const gridUserStatus = async(params, id) => {
    console.log(params, id, "paraamsssssssss");

      if(params.isActive === true){
      console.log(id,"llllllllll")
      const block = (id) => {
        console.log('hello ');
        confirmAlert({
          title: 'Confirm to ',
          message: 'Are you sure ! want to Block ?',
          buttons: [
            { 
              label: 'Yes',
              onClick: () => {blockAction(id)}
            },
            {
              label: 'No',
            }
          ]
        });
      };
      block(id)
        
    }else{
      const unBlock = (userId) => {
        confirmAlert({
          title: 'Confirm to ',
          message: 'Are you sure ! want to Unblock ?',
          buttons: [
            { 
              label: 'Yes',
              onClick: () => {unblockAction(userId)}
            },
            {
              label: 'No',
            }
          ]
        });

      };
      unBlock(id)
        // setTimeout(() => setChange(prevState => !prevState), 1000);
    }

    const blockAction = async (userId) => {
      console.log(userId,"User Id")
      await BlockUser(false, userId);
      // setActive(false);
      setTimeout(() => setChange(prevState => !prevState), 1000);
      //  dispatch(hideLoading())
    };
    const unblockAction = async (userId) => {
      await BlockUser(true, userId);
      // setActive(true);
      setTimeout(() => setChange(prevState => !prevState), 1000);
    };

  };



  


  

    const titleGrid = [
        {
          headerText: "Username ",
          width: "150",
          field: "name",
          textAlign: "Center",
        },
        { field: "email", headerText: "Email", width: "170", textAlign: "Center" },
        {
          field: "isActive",
          headerText: "Status",
          width: "135",
          format: "yMd",
          textAlign: "Center",
        },
        {
          field: "Actions",
          headerText: "Actions",
          template: (params) => {
            return (
              <button style={{ background: "#03C9D7" }} className="text-gray-500 py-1 px-2 capitalize rounded-2xl text-md"
                onClick={() => gridUserStatus(params, params._id)}>
                {params.isActive === true ? "Block" : "Unblock" }
              </button>
            );
          },
          // template: gridUserStatus,
          width: "120",
          textAlign: "Center",
        },
      ];



      
      

    return <GridComponent dataSource={users} width="auto"
    allowPaging={true}
    allowSorting={true}
    pageSettings={{
      pageSize: 10,
      totalRecordsCount: users.length,
      pageCount: 5,
    }}
    toolbar={["Search"]}>
        <ColumnsDirective>
          {titleGrid.map((item, index) => (
            <ColumnDirective key={item._id}  {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Toolbar, Search, Page]} />
    </GridComponent>
};
export default App;