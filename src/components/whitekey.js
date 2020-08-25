import React ,{useState,useRef,useEffect}from 'react';
import {play,keyPress,keyUp} from '../functions'
function  WhiteKey({name,audioSrc,keyCode,letter}){
const key=useRef();
const[active,setActive]=useState(false);

useEffect(()=>{
    keyPress(key,keyCode,setActive);
    keyUp(setActive)
   
   
},[])

return(<><div className={`white  key ${active?'active-white':null}`} onClick={()=>{play(key)}}><h3>{letter}</h3></div>
 <audio src={audioSrc}  ref={key}/>
</>)
}
export default WhiteKey;