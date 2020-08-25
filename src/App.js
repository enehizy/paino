import React from 'react';
import BlackKey from './components/blackkey';
import WhiteKey from './components/whitekey';
import './App.css';

function App() {
 
  
  return (

      
    <div className="piano">
   
    <WhiteKey name="c" audioSrc="octave/c3.mp3" keyCode={122} letter="z"/>
    <BlackKey name="c#" audioSrc="octave/c-3.mp3" keyCode={115} letter="s"/>
    <WhiteKey name="d" audioSrc="octave/d3.mp3" keyCode={120} letter="x"/>
    <BlackKey name="d#" audioSrc="octave/d-3.mp3" keyCode={100} letter="d"/>
    <WhiteKey name="e" audioSrc="octave/e3.mp3" keyCode={99} letter="c"/>
    <WhiteKey name="f" audioSrc="octave/f3.mp3" keyCode={118} letter="v"/>
    <BlackKey name="f#" audioSrc="octave/f-3.mp3" keyCode={103} letter="g"/>
    <WhiteKey name="g" audioSrc="octave/g3.mp3"  keyCode={98} letter="b"/>
    <BlackKey name="g#" audioSrc="octave/g-3.mp3" keyCode={104} letter="h"/>
    <WhiteKey name="a" audioSrc="octave/a4.mp3" keyCode={110} letter="n"/>
    <BlackKey name="a#" audioSrc="octave/a-4.mp3" keyCode={106} letter="j"/>
    <WhiteKey name="b" audioSrc="octave/b4.mp3" keyCode={109} letter="m"/>
    <WhiteKey name="c" audioSrc="octave/c4.mp3" keyCode={44} letter=","/>
  
   
    </div>
      
      

     
  );
}



export default App;
