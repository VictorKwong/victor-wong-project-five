import React, { Component } from 'react'
import bossBGM from '../assets/audio/vsGymLeaer.mp3'
import bossV from '../assets/audio/victoryGym.mp3'
import wildBGM from '../assets/audio/vsWild.mp3'
import wildV from '../assets/audio/victoryWild.mp3'
import trainerBGM from '../assets/audio/vsTrainer.mp3'
import trainerV from '../assets/audio/victoryTrainer.mp3'


class MusicControl extends Component {
  constructor(){
      super();
      this.state = {
          play: true,
          bossSrc: bossBGM,
          vBossSrc: bossV,
          wildSrc: wildBGM,
          vWildSrc: wildV,
          trainerSrc: trainerBGM,
          vtrainerSrc: trainerV,
          volume: 0.1,
          muted: true,
      }
  }

audioBoss = new Audio();
audioVictoryBoss = new Audio();
audioWild = new Audio();
audioVictoryWild = new Audio();
audioTrainer = new Audio();
audioVictoryTrainer = new Audio();


componentDidMount(){
  this.audioBoss.src = this.state.bossSrc
  this.audioVictoryBoss.src = this.state.vBossSrc
  this.audioWild.src = this.state.wildSrc
  this.audioVictoryWild.src = this.state.vWildSrc
  this.audioTrainer.src = this.state.trainerSrc
  this.audioVictoryTrainer.src = this.state.vtrainerSrc


  
  this.audioBoss.volume = this.state.volume
  this.audioVictoryBoss.volume = this.state.volume
  this.audioWild.volume = this.state.volume
  this.audioVictoryWild.volume = this.state.volume
  this.audioTrainer.volume = this.state.volume
  this.audioVictoryTrainer.volume = this.state.volume

}



togglePlayState = () => {
    this.setState ({ play: !this.state.play })
    this.controlSound();
  }
    controlSound = () => {
        console.log(this.audio);
        if(this.state.play === false){
            /* this.audio.pause(); */
            /* this.audio.play(); */
            /* this.audio.currentTime = this.state.currentTime */
            /* this.audio.muted = this.state.muted */
            this.audioBoss.muted = this.state.muted
            this.audioVictoryBoss.muted = this.state.muted
            this.audioWild.muted = this.state.muted
            this.audioVictoryWild.muted = this.state.muted
            this.audioTrainer.muted = this.state.muted
            this.audioVictoryTrainer.muted = this.state.muted
            this.setState ({ muted: true })
            /* unmute */
        }else if(this.state.play === true){
            this.audioBoss.muted = this.state.muted
            this.audioVictoryBoss.muted = this.state.muted
            this.audioWild.muted = this.state.muted
            this.audioVictoryWild.muted = this.state.muted
            this.audioTrainer.muted = this.state.muted
            this.audioVictoryTrainer.muted = this.state.muted
            console.log("audio is playing!");
            this.setState ({ muted: false })
            /* mute */
        }
    }

  volumePlus = () => {
    let copyPlus = this.state.volume + 0.1
    if(copyPlus < 1){
      this.setState ({ volume: copyPlus })
    }else{
      this.setState ({ volume: 1 })
      copyPlus = 1
    }
    this.audioBoss.volume = copyPlus
    this.audioVictoryBoss.volume = copyPlus
    this.audioWild.volume = copyPlus
    this.audioVictoryWild.volume = copyPlus
    this.audioTrainer.volume = copyPlus
    this.audioVictoryTrainer.volume = copyPlus

  }

  volumeMinus = () => {
    let copyMinus =  this.state.volume - 0.1
    if(copyMinus > 0){
      this.setState ({ volume: copyMinus })
    }else{
      this.setState ({ volume: 0 })
      copyMinus = 0
    }
    this.audioBoss.volume = copyMinus
    this.audioVictoryBoss.volume = copyMinus
    this.audioWild.volume = copyMinus
    this.audioVictoryWild.volume = copyMinus
    this.audioTrainer.volume = copyMinus
    this.audioVictoryTrainer.volume = copyMinus
  }

  bossFight = () => {
    this.audioBoss.play()
    this.audioBoss.autoplay = true
  }
  bossFightEnd = () => {
    this.audioBoss.pause()
    this.audioBoss.currentTime = 0
  }
  bossVictory = () => {
    this.audioVictoryBoss.play()
    this.audioVictoryBoss.autoplay = true
  }
  bossVictoryEnd = () => {
    this.audioVictoryBoss.pause()
    this.audioVictoryBoss.currentTime = 0
  }

  wildFight = () =>{
    this.audioWild.play()
    this.audioWild.autoplay = true
  }

  wildFightEnd = () => {
    this.audioWild.pause()
    this.audioWild.currentTime = 0
  }

  wildVictory = () => {
    this.audioVictoryWild.play()
    this.audioVictoryWild.autoplay = true
  }

  wildVictoryEnd = () => {
    this.audioVictoryWild.pause()
    this.audioVictoryWild.currentTime = 0
  }
  
  trainerFight = () =>{
    this.audioTrainer.play()
    this.audioTrainer.autoplay = true
  }

  trainerFightEnd = () => {
    this.audioTrainer.pause()
    this.audioTrainer.currentTime = 0
  }

  trainerVictory = () => {
    this.audioVictoryTrainer.play()
    this.audioVictoryTrainer.autoplay = true
  }

  trainerVictoryEnd = () => {
    this.audioVictoryTrainer.pause()
    this.audioVictoryTrainer.currentTime = 0
  }



  
    render() {
      return (
        <div className="musicPosition">
          {this.state.play ? <span onClick={this.togglePlayState} role="img" aria-label="Sound ON" className="musicIndiv">🔊</span> : <span onClick={this.togglePlayState} role="img" aria-label="Sound OFF" className="musicIndiv">🔈</span>}
          <span onClick={this.volumePlus} role="img" aria-label="VolumeAdd" className="musicIndiv">➕</span>
          <span onClick={this.volumeMinus} role="img" aria-label="VolumeMinus" className="musicIndiv">➖</span>

          {/* wild music */}
          {this.props.startButton && this.props.final === '' && this.props.enemyTrainer === '' ? this.wildFight() : this.props.startButton && (this.props.final === true || this.props.final === false)  && this.props.enemyTrainer === '' ? this.wildFightEnd() : null}
          {this.props.startButton && this.props.final === true && this.props.enemyTrainer === '' ? this.wildVictory() : !this.props.startButton ? this.wildVictoryEnd() : null}
          {/* rocket music */}
          {this.props.startButton && this.props.final === '' && this.props.enemyTrainer !== '' && this.props.enemyTrainer === 'Team Rocket' ? this.trainerFight() : this.props.startButton && (this.props.final === true || this.props.final === false)  && this.props.enemyTrainer !== '' && this.props.enemyTrainer === 'Team Rocket' ? this.trainerFightEnd() : null}
          {this.props.startButton && this.props.final === true && this.props.enemyTrainer !== '' && this.props.enemyTrainer === 'Team Rocket' ? this.trainerVictory() : !this.props.startButton ? this.trainerVictoryEnd() : null}
          {/* boss music */}
          {this.props.startButton && this.props.final === '' && this.props.enemyTrainer !== '' && this.props.enemyTrainer !== 'Team Rocket' ? this.bossFight() : this.props.startButton && (this.props.final === true || this.props.final === false)  && this.props.enemyTrainer !== '' && this.props.enemyTrainer !== 'Team Rocket' ? this.bossFightEnd() : null}
          {this.props.startButton && this.props.final === true && this.props.enemyTrainer !== '' && this.props.enemyTrainer !== 'Team Rocket' ? this.bossVictory() : !this.props.startButton ? this.bossVictoryEnd() : null}
        </div>
      )
    }
  }
  
  export default MusicControl;