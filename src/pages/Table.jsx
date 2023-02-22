// import { ColumnDirective, ColumnsDirective,  Inject, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
// import { data } from './datasource';
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
  const dispatch = useDispatch()


  const getUsers=async()=>{
    try {

      //  dispatch(showLoading())
      
      const {data}=await getUser()
      setUsers(data)
      console.log(data,"jjjjjjjjjjjjjjjjj")
    } catch (error) {
      
    }
  }

    const titleGrid = [
        {
          headerText: "Username ",
          width: "150",
          field: "name",
          textAlign: "Center",
        },
        { field: "email", headerText: "Email", width: "170", textAlign: "Center" },
        {
          field: "status",
          headerText: "Status",
          width: "135",
          format: "yMd",
          textAlign: "Center",
        },
        {
          field: "Actions",
          headerText: "Actions",
          // template: gridUserStatus,
          width: "120",
          textAlign: "Center",
        },
      ];



      useEffect(() => {
        getUsers()
       
      }, []);
      

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