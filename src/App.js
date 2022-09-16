
import './App.css';

import AuthContext from './components/contex/AuthContext';
import ErrorBox from './components/ErrorBoundries/ErrorBox';
import {useState} from "react"
import ColorThemeComponents from './components/ColorTheme/ColorThemComponets';
import Counter from './components/useReducer/Counter';


function App() {

 const[next,setNext] = useState(1);

 function NextPage(){
    setNext(Number(next)+1);
 }
 function PrevPage(){
    setNext(Number(next)-1);
 }
 function firstPage(){
    setNext(1);
 }
 
 

  return (
   <>
      <div>
     {next===1 ? <ErrorBox /> : ""}
     {next===2 ? <AuthContext /> : "" }
     {next===3  ? <ColorThemeComponents/> : "" } 
     {next===4 ? <Counter/> : ""}
     
     
      
    </div>
     <div className='btn'>
     <button onClick={NextPage} > Next Page </button>
     <button onClick={PrevPage} > Prev Page </button>
     <button onClick={firstPage} > First Page </button>
    </div>
   </>
  )
}

export default App;
