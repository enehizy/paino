import React ,{useRef,useEffect,useState}from 'react';
import {play,keyPress,keyUp} from '../functions'
function BlackKey({name,audioSrc,keyCode,letter}){
const key=useRef();
const[active,setActive]=useState(false);
useEffect(()=>{
    keyPress(key,keyCode,setActive);
    keyUp(setActive)
},[])
return(<><div className={`black  key ${active?'active-black':null}`}   onClick={()=>{play(key)}}>{letter}</div>
 <audio src={audioSrc}  ref={key}/>
</>)
}
export default BlackKey;