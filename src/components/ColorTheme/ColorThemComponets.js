import React from "react";
import {useState} from "react"
import { ThemeContext } from '../contex/ThemeContext';
import ColorTheme from './ColorTheme';
import "./theme.css"


function ColorThemeComponents(){
    

 const[darktheme , setDarkTheme] = useState(false);


    function touggleTheme (){
        setDarkTheme((prev)=> !prev);
      }
     

    return(
        <div className="theme-container">
             <ThemeContext.Provider value={{darktheme  }} >
                       <ColorTheme />
                   <button onClick={touggleTheme}
                    >toggle theme</button>
            </ThemeContext.Provider>

        </div>
    )
}
export default ColorThemeComponents ;