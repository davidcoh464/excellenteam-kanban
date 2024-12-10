import { useState, useEffect } from 'react'
import AppRoutes from './Components/AppRoutes';
import Navbar from './Components/Navbar';
import "./styles/main.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const checkIfLoggedIn = async () => {
    const registeredUser = sessionStorage.getItem("registeredUser");
    return registeredUser ? true : false;
  };

  useEffect(() => {

    checkIfLoggedIn().then((res) => {setIsLoggedIn(res);});
  }, []);

  return (
    <div>
      {isLoggedIn?
        <>
          <Navbar/>
          <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </>
        :
        <>
          <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </>
      }
    </div>
  )
}

export default App
