import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

type Props = {
    isLoggedIn: boolean,
    setIsLoggedIn: (p: boolean) => void 
};

const AppRoutes = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
    setIsLoggedIn(props.isLoggedIn);
  }, [props.isLoggedIn])

  return (
    <div className="main-content">
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>} />
          <Route path="/register" element={<Register isLoggedIn={isLoggedIn}/>} />
        </Routes>
      )}
    </div>
  );
}

export default AppRoutes;
