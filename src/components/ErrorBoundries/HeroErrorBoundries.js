import React from "react";
import "./Hero/Hero.css"
class HeroErrorBoundries extends React.Component {
      
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }
     static getDerivedStateFromError(error){
        return {
            hasError : true
        }
     }

    render(){
        if(this.state.hasError){
        return(
            <h3 className="ErrorBoundries">
          something went wrong Error 404 
            </h3>
        )
        }else {
           return this.props.children
        }
    }
};
export default HeroErrorBoundries;