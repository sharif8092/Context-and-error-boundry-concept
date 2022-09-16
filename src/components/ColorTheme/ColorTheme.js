import React from "react"
import {ThemeContext} from "../contex/ThemeContext";
import {useContext} from "react";
import "./theme.css"

function ColorTheme (){

const {darktheme} = useContext(ThemeContext);
 const themeStyle = {
    backgroundColor: darktheme ? "black" : "white",
    color : darktheme ? "white" : "black"
  
 } 

 console.log(darktheme);
    return (
        <div className="color-theme-container" style={themeStyle}>
              <h1>This is text</h1>
        </div>
    )
}
export default ColorTheme;