
import Login from '../Login/Login';
import Profile from '../Login/Profile';

import {useState} from "react"
import {userContext} from "./contextlogin"


function AuthContext(){

    const [showprofile , setShowprofile] =useState(false);
    const [username , setUserName] = useState('');
  

    return(
        <div className="login-main">
   
       

        < userContext.Provider value={{setShowprofile , setUserName}}>
        { showprofile ? < Profile  username={username}/> : < Login showprofile={showprofile}/> }
          
        </userContext.Provider>
         
    
        </div>
    )
}
export default AuthContext;