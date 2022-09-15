
import './App.css';
// import Hero from './components/Hero/Hero';
import Login from './components/Login/Login.js';
import Profile from './components/Login/Profile';
import HeroErrorBoundries from './errorboundries/HeroErrorBoundries';
import {useState} from "react"
import {userContext} from "./components/contex/contextlogin.js"

function App() {


  const [showprofile , setShowprofile] =useState(false);
  const [username , setUserName] = useState('');

  return (
   
      <>

  
{/* 
    <div className="Error-boundries">

     
     <HeroErrorBoundries >
    <Hero heroname="spidermann" />
    </HeroErrorBoundries>
    
    <HeroErrorBoundries >
    <Hero heroname="Ironman" />
    </HeroErrorBoundries>
    
    <HeroErrorBoundries >
    <Hero heroname="Batman" />
    </HeroErrorBoundries>
    
    <HeroErrorBoundries >
    <Hero heroname="joker" />
    </HeroErrorBoundries>
    
    <HeroErrorBoundries >
    <Hero heroname="superman" />
    </HeroErrorBoundries>        
        

    </div>  */}

    
    
   <div className="login-main">
   
       

    < userContext.Provider value={{setShowprofile , setUserName}}>
    { showprofile ? < Profile  username={username}/> : < Login showprofile={showprofile}/> }
      
    </userContext.Provider>
     

    <div/>

  
   </div>
   </>
  )
}

export default App;
