
import '../../App.css';
import Hero from './Hero/Hero';

import HeroErrorBoundries from './HeroErrorBoundries';



function ErrorBox(){
    return(
        
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
        

    </div> 
    )
}
export default ErrorBox;       