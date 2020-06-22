import React, { Component } from 'react'
import BGM from '../assets/audio/28_Battle (VS Gym Leader).mp3'

class Music extends Component {
    constructor(){
        super();
        this.state = {
            play: true,
            src:BGM,
            currentTime: 0,
            volume: 0.1,
        }
        
    }


componentDidUpdate(){

}





togglePlayState = () => {
    this.setState ({ play: !this.state.play })
    this.setState ({ currentTime: this.audio.currentTime })
    console.log(this.state.currentTime)
    this.controlSound();
    console.log(this.state.play);
  }

  audio = new Audio();
  xty = new Audio();

    controlSound = () => {
        this.audio.src = this.state.src
        this.audio.volume = this.state.volume
        this.xty.src = this.state.anothersrc
        console.log(this.audio);
        if(this.state.play === false){
            this.audio.pause();
            console.log("audio is pause");
        }else if(this.state.play === true){
            this.audio.play();
            this.audio.currentTime = this.state.currentTime
            console.log("audio is playing!");
        }
            /* controlSound() */
    }

  volumePlus = () => {
    this.setState ({ volume: this.state.volume + 0.1 })
    this.audio.volume = this.state.volume
    console.log(this.audio.volume)
  }
  
    render() {
      return (
        <div>
{/*           <button onClick={this.playSound}>{this.state.play ? 'Pause' : 'Play'}</button>
          <button onClick={this.pauseSound}>Pause</button>
          <button onClick={this.stopSound}>Stop</button> */}
          <button onClick={this.togglePlayState}>play</button>
          <button onClick={this.volumePlus}>Add volume</button>
        </div>
      );
    }
  }
  
  export default Music;