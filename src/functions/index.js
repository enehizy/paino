export function keyUp(setActive){
    document.addEventListener('keyup',(e,keyCode)=>{
    // console.log(e.keyCode,'key went up')
      setActive(false);
  })
}
  export function keyPress(key,keycode,setActive){
    document.addEventListener('keypress',(e)=>{
    //  console.log(e.keyCode)
  
     if(keycode === e.keyCode){
       
      play(key);
      setActive(true);
     }
    })
  }
  export function play(key){
    key.current.currentTime=0;
    key.current.play()
  }
  