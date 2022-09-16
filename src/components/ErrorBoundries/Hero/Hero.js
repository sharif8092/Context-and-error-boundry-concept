import "./Hero.css"
function Hero(props){
     
    if(props.heroname === "joker"){
        throw new Error("Not a Hero! ")
    }
    

    return(
        <div>
           <h1 className="hero" >{props.heroname}</h1>

        </div>
    )
}
export default Hero;