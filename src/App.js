import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "./components/loading";
import User from './routes/user.jsx'
import Admin from './routes/Admin.jsx'

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    < >
    <BrowserRouter>
    {loading &&(<Loader/> )}
      <Toaster position="top-center" reverseOrder={false} />
     <Routes>
       <Route path="/*" element={<User/>}/>
       <Route path="/admin/*" element={<Admin/>}/>
       
     </Routes>
     </BrowserRouter>    
   </>

    
  );
}

export default App;
