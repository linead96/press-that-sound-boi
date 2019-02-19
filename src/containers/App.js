import React, { Component } from 'react';
import './App.css';
import bubbles from '../sounds/bubbles.mp3';
import clay from '../sounds/clay.mp3';
import confetti from '../sounds/confetti.mp3';
import corona from '../sounds/corona.mp3';
import dottedSpiral from '../sounds/dotted-spiral.mp3';
import flash1 from '../sounds/flash-1.mp3';
import flash2 from '../sounds/flash-2.mp3';
import flash3 from '../sounds/flash-3.mp3';
import glimmer from '../sounds/glimmer.mp3';
import moon from '../sounds/moon.mp3';
import pinwheel from '../sounds/pinwheel.mp3';
import piston1 from '../sounds/piston-1.mp3';
import piston2 from '../sounds/piston-2.mp3';
import piston3 from '../sounds/piston-3.mp3';
import prism1 from '../sounds/prism-1.mp3';
import prism2 from '../sounds/prism-2.mp3';
import prism3 from '../sounds/prism-3.mp3';
import splits from '../sounds/splits.mp3';
import squiggle from '../sounds/squiggle.mp3';
import strike from '../sounds/strike.mp3';
import suspension from '../sounds/suspension.mp3';
import timer from '../sounds/timer.mp3';
import ufo from '../sounds/ufo.mp3';
import veil from '../sounds/veil.mp3';
import wipe from '../sounds/wipe.mp3';
import zigzag from '../sounds/zig-zag.mp3';
import Sounds from '../components/Sounds';
const soundMapKey = {'q':bubbles,'w':clay,'e':confetti,'r':corona,'t':dottedSpiral,'y':flash1,'u':flash2,'i':flash3,'o':glimmer,'p':moon,'a':pinwheel,'s':piston1,'d':piston2,'f':piston3,'g':prism1,'h':prism2,'j':prism3,'k':splits,'l':squiggle,'z':strike,'x':suspension,'c':timer,'v':ufo,'b':veil,'n':wipe,'m':zigzag};
const soundMapButton = {'bubbles':bubbles, 'clay':clay,'confetti':confetti,'corona':corona,'dottedSpiral':dottedSpiral,'flash1':flash1,'flash2':flash2,'flash3':flash3,'glimmer':glimmer,'moon':moon,'pinwheel':pinwheel,'piston1':piston1,'piston2':piston2,'piston3':piston3,'prism1':prism1,'prism2':prism2,'prism3':prism3,'splits':splits,'squiggle':squiggle,'strike':strike,'suspension':suspension,'timer':timer,'ufo':ufo,'veil':veil,'wipe':wipe,'zigzag':zigzag};

class App extends Component {
  constructor(){
    super();
    this.state = {
      play: '',
    }
  }

  play = (event) => {
    this.setState({
      play: soundMapButton[event.target.innerText]
    })
  }

  handleKeyPress = (event) => {
    this.setState({
      play: soundMapKey[event.key]
    })
  }

  componentDidMount() {
    document.addEventListener('keydown',this.handleKeyPress)
  }

  render() {
    let sound
    if(Object.values(soundMapKey).includes(this.state.play)){
     sound =  <Sounds soundfile = { this.state.play } /> 
    }
    
    return (
      <div className="App">
       <button onClick={this.play}>bubbles</button>
          {sound}
      </div>
    );
  }
}

export default App;
