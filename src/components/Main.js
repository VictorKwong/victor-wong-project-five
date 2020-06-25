import React, { Component } from 'react';
import axios from 'axios';
import DisplayPoke from './DisplayPoke';
import pikachu from '../assets/images/pikachu.gif'
import brock from '../assets/images/brock.png'
import misty from '../assets/images/misty.png'
import surge from '../assets/images/surge.png'
import erika from '../assets/images/erika.png'
import koga from '../assets/images/koga.png'
import sabrina from '../assets/images/sabrina.png'
import blaine from '../assets/images/blaine.png'
import giovanni from '../assets/images/giovanni.png'
import teamRocket from '../assets/images/rocket.png'
import MainSubBadge from './MainSubBadge'
import restart from '../assets/audio/pokemonRecovery.mp3'
import MainSubBattleUI from './MainSubBattleUI';

class Main extends Component{
    constructor(){
        super()
        this.state = {
            userPokeID: 0,
            userTyping: '',
            originLink: 'https://pokeapi.co/api/v2/pokemon/',
            pokemonAllData: '',
            health: '',
            typeOne: '',
            typeTwo: '',
            pokemonCries: '',
            typeError: '',
            loading: true,
            enemyLink: 'https://pokeapi.co/api/v2/pokemon/',
            enemyPokemonAllData: '',
            enemyHealth: '',
            enemyTypeOne: '',
            enemyTypeTwo: '',
            enemyPokemonCries: '',
            enemyLoading: true,
            enemyTrainer: '',
            enemyImage:'',
            critial: false,
            enemyCritial: false,
            startButton: false,
            disabledUserChoiceButton: false,
            disabledSelectEnemy:false,
            damage: '',
            enemyDamage:'',
            final: '',
            enemyDecision: '',
            playerDecision: '',
            reSrc: restart,
            stageClear1:false,
            stageClear2:false,
            stageClear3:false,
            stageClear4:false,
            stageClear5:false,
            stageClear6:false,
            stageClear7:false,
            stageClear8:false,
            easterEgg:false
        }
    }


audioRestart = new Audio();

    componentDidMount(){
        this.audioRestart.src = this.state.reSrc
        this.audioRestart.volume = 0.1
    }
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.originLink !== this.state.originLink) {
          axios({
            url: this.state.originLink,
            method: 'GET',
            responseType: 'JSON'
          }).then((x) => {
            x.data.types.length === 2 ? this.setState ({typeTwo: x.data.types[1].type.name}): this.setState ({typeTwo: ''})
            x.data.id <= 649 ? this.setState ({pokemonCries: 'https://pokemoncries.com/cries-old/' + x.data.id +'.mp3'}): this.setState({pokemonCries:''})
            this.setState({
              pokemonAllData: x.data,
              typeOne: x.data.types[0].type.name,
              loading: false,
              health: x.data.stats[0].base_stat
            })
          }).catch(() => {
            this.setState({ typeError: 'I cannot find this pokemon=.=...'})
            })
        }
        if(prevState.enemyLink !== this.state.enemyLink){
          let x = await axios({
            url: this.state.enemyLink,
            method: 'GET',
            responseType: 'JSON'
          })
            x.data.types.length === 2 ? this.setState ({enemyTypeTwo: x.data.types[1].type.name}): this.setState ({enemyTypeTwo: ''})
            await x.data.id <= 649 ? this.setState ({enemyPokemonCries: 'https://pokemoncries.com/cries-old/' + x.data.id +'.mp3'}): this.setState({enemyPokemonCries:''})
            this.setState({
              enemyPokemonAllData: x.data,
              enemyTypeOne: x.data.types[0].type.name,
              enemyLoading: false,
              enemyHealth: x.data.stats[0].base_stat
            })
        }
    }
        
    userChange = (usertype) => {
        this.setState({
            userTyping: usertype.target.value
        })
    }

    userClick = (usertype) => {
        usertype.preventDefault();
        let copyUserTyping = this.state.userTyping
        copyUserTyping.charAt(0) === '0' ? 
            copyUserTyping = parseInt(this.state.userTyping) : 
            copyUserTyping = this.state.userTyping.toLowerCase()
        if(copyUserTyping !== ''){
            this.setState({
                userPokeID: copyUserTyping,
                originLink: 'https://pokeapi.co/api/v2/pokemon/' + copyUserTyping,
                userTyping: '',
                typeError: ''
            })
        }else{
            this.setState({
                typeError: 'Select a valid pokemon! Ex. 807'
            })
        }
    }

    challengeClick = (enemy) => {
        enemy.preventDefault();
        if (enemy.target.value === "Pewter"){
        this.setState({
          enemyLink: 'https://pokeapi.co/api/v2/pokemon/onix',
          enemyPokemonCries: 'https://pokemoncries.com/cries-old/95.mp3',
          enemyTrainer: 'Brock',
          enemyImage: brock
        })
        }else if(enemy.target.value === "Cerulean"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/starmie',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/121.mp3',
              enemyTrainer: 'Misty',
              enemyImage: misty
            })
        }else if(enemy.target.value === "Vermillion"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/raichu',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/26.mp3',
              enemyTrainer: 'Lt. Surge',
              enemyImage: surge
            })
        }else if(enemy.target.value === "Celadon"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/gloom',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/44.mp3',
              enemyTrainer: 'Erika',
              enemyImage: erika
            })
        }else if(enemy.target.value === "Fuchsia"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/venomoth',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/49.mp3',
              enemyTrainer: 'Koga',
              enemyImage: koga
            })
        }else if(enemy.target.value === "Saffron"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/alakazam',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/65.mp3',
              enemyTrainer: 'Sabrina',
              enemyImage: sabrina
            })
        }else if(enemy.target.value === "Cinnabar"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/arcanine',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/59.mp3',
              enemyTrainer: 'Blaine',
              enemyImage: blaine
            })
        }else if(enemy.target.value === "Viridian"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/rhydon',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/112.mp3',
              enemyTrainer: 'Giovanni',
              enemyImage: giovanni
            })
        }else{
            const meetWild = this.randomfunction()
            if(meetWild <= 0.9){
            const random = Math.floor(Math.random() * 806) + 1;
            this.setState({
                enemyLink:'https://pokeapi.co/api/v2/pokemon/' + random,
                enemyPokemonCries: 'https://pokemoncries.com/cries-old/' + random + '.mp3',
                enemyTrainer: '',
                enemyImage: ''
            })
            }else{
                this.setState({
                    enemyLink: 'https://pokeapi.co/api/v2/pokemon/meowth',
                    enemyPokemonCries: 'https://pokemoncries.com/cries-old/52.mp3',
                    enemyTrainer: 'Team Rocket',
                    enemyImage: teamRocket
                })
            }
        }
    }

    /* start battle button */
    startClick = (start) => {
        start.preventDefault()
        this.setState ({ 
            startButton: !this.state.startButton,
            restart: false,
            disabledSelectEnemy: true,
         })
    }
    /* user interface: Attack and Heal */

    /* Heal up and pass enemy turn */
    heal = (add) => {
        add.preventDefault()
        this.setState ({ disabledUserChoiceButton: true })
        const copyOfHeal = this.state.health + 5
        if (copyOfHeal <= this.state.pokemonAllData.stats[0].base_stat){
            this.setState ({ health: copyOfHeal })
        }else{
            this.setState ({ health: this.state.pokemonAllData.stats[0].base_stat})
        }
            this.setState ({ playerDecision: 'heal' })
        this.enemyChoice()
    }

    /* reset crit and user interface button */
    /* if enemy die shows "you won", else enemy turn */
    attack = (attack) => {
        attack.preventDefault()
        this.setState ({ 
            disabledUserChoiceButton: true,
            critial : false
        })
        const randomDamage = this.randomfunction()
        let damage = Math.round(((1.2 * (this.state.pokemonAllData.stats[1].base_stat / this.state.enemyPokemonAllData.stats[2].base_stat + this.state.pokemonAllData.stats[3].base_stat/this.state.enemyPokemonAllData.stats[4].base_stat)) + 1) * 1.2 * (1.2 + randomDamage))
        const randomCrit = this.randomfunction() + (this.state.pokemonAllData.stats[5].base_stat / 1000)
        if( randomCrit <= 0.2){
            damage = Math.round(damage * 2)
            this.setState ({ critial : true })
        }
        let copyOfEnemyHealth = this.state.enemyHealth - damage
        this.setState ({ 
            enemyHealth: copyOfEnemyHealth, 
            damage: damage,
            playerDecision: 'attack'
        })
        if( copyOfEnemyHealth <= 0 ){
            this.setState ({ final: true })
            if(this.state.enemyTrainer === 'Brock'){
                this.setState ({ stageClear1: true })
            }else if(this.state.enemyTrainer === 'Misty'){
                this.setState ({ stageClear2: true })
            }else if(this.state.enemyTrainer === 'Lt. Surge'){
                this.setState ({ stageClear3: true })
            }else if(this.state.enemyTrainer === 'Erika'){
                this.setState ({ stageClear4: true })
            }else if(this.state.enemyTrainer === 'Koga'){
                this.setState ({ stageClear5: true })
            }else if(this.state.enemyTrainer === 'Sabrina'){
                this.setState ({ stageClear6: true })
            }else if(this.state.enemyTrainer === 'Blaine'){
                this.setState ({ stageClear7: true })
            }else if(this.state.enemyTrainer === 'Giovanni'){
                this.setState ({ stageClear8: true })
            }           
        }else{
            this.enemyChoice()
        }
    }

    /* Enemy */
    /* enemy choice have 75% chance to attack and 25% chance to heal */
    enemyChoice = () =>{
        if (this.randomfunction() <= 0.75){
            const timer = setTimeout(() => this.enemyAttack(), 500);
            return () => clearTimeout(timer);
        }else if(this.randomfunction() <= 0.95){
            const timer = setTimeout(() => this.enemyHeal(), 500);
            return () => clearTimeout(timer);
        }else{
            const timer = setTimeout(() => this.enemyNothing(), 500);
            return () => clearTimeout(timer);
        }
    }

    /* reset enemyCritial, disable user interface*/
    /* if player die shows ("Try again" & disable user interface), else player turn */
    enemyAttack = () =>{
        this.setState ({ enemyCritial : false })
        const randomDamage = this.randomfunction()
        let damage = Math.round(((1.2 * (this.state.enemyPokemonAllData.stats[1].base_stat / this.state.pokemonAllData.stats[2].base_stat + this.state.enemyPokemonAllData.stats[3].base_stat/this.state.pokemonAllData.stats[4].base_stat)) + 1) * (1.2 + randomDamage))
        const randomCrit = this.randomfunction() + (this.state.enemyPokemonAllData.stats[5].base_stat / 1000)
        if( randomCrit <= 0.05){
            damage = Math.round(damage * 2)
            this.setState ({ enemyCritial : true })
        }
        const copyOfEnemyHealth = this.state.health - damage
        this.setState ({ 
            health: copyOfEnemyHealth,
            enemyDamage: damage,
            disabledUserChoiceButton: false,
            enemyDecision: 'enemyAtk'
        })
        if( copyOfEnemyHealth <= 0 ){
            this.setState ({ 
                final: false,
                disabledUserChoiceButton: true
            })
        }
    }

    /* enemy heal up and pass player turn */
    enemyHeal = () => {
        if (this.state.enemyHealth + 2 <= this.state.enemyPokemonAllData.stats[0].base_stat){
            this.setState ({ enemyHealth: this.state.enemyHealth + 2 })
        }else{
            this.setState ({ enemyHealth: this.state.enemyPokemonAllData.stats[0].base_stat})
        }
        this.setState ({ 
            disabledUserChoiceButton: false,
            enemyDecision: 'enemyHeal'
        })
    }

    enemyNothing = () => {
        this.setState ({ 
            disabledUserChoiceButton: false,
            enemyDecision: 'enemyNothing'
        })
    }

    randomfunction = () => {
        return (Math.random() * 1)
    }

    restart = (e) => {
        e.preventDefault()
        this.setState({
            startButton: false,
            health: this.state.pokemonAllData.stats[0].base_stat,
            enemyHealth: this.state.enemyPokemonAllData.stats[0].base_stat,
            final: '',
            disabledUserChoiceButton: false,
            disabledSelectEnemy: false,
            enemyDecision: '',
            playerDecision: '',
        })
        this.audioRestart.play()
        this.audioRestart.autoplay = true
    }

    allClear = (e) =>{
        e.preventDefault()
        const copyOfEasterEgg = !this.state.easterEgg
        this.setState({ easterEgg : copyOfEasterEgg})
    }

    render(){
        return(
            <main>
                <section className="mainSpace">
                <div className="breathingRoom">
                    <h2 className="cpuPokemon">Player's Pokemon</h2>
                    {this.state.loading ? <p>Choose your Pokemon(Ex. "1" / "bulbasaur")</p>
                    : <DisplayPoke
                        key={this.state.pokemonAllData.id}
                        name={this.state.pokemonAllData.name}
                        id={this.state.pokemonAllData.id}
                        hp={this.state.health}
                        maxhp={this.state.pokemonAllData.stats[0].base_stat}
                        attack={this.state.pokemonAllData.stats[1].base_stat}
                        defence={this.state.pokemonAllData.stats[2].base_stat}
                        special={(this.state.pokemonAllData.stats[3].base_stat + this.state.pokemonAllData.stats[4].base_stat) / 2}
                        speed={this.state.pokemonAllData.stats[5].base_stat}
                        type1={this.state.typeOne}
                        type2={this.state.typeTwo}
                        imageSrc={this.state.pokemonAllData.sprites.front_default}
                        audioSrc={this.state.pokemonCries}
                    />}
                    <form className="userInputBox" >
                        <input type="text" name='userPokeID' placeholder="I choose you!" onChange={this.userChange} value={this.state.userTyping} disabled={this.state.disabledSelectEnemy} className="inputBoxPlace"/>
                        <input type="submit" value="Throw Pokeball" onClick={this.userClick} disabled={this.state.disabledSelectEnemy} className="wildButton" />
                    </form>
                    {this.state.typeError !== '' ? <p className="userInputBox">{this.state.typeError}</p> : null}
                </div>
                
                <div>
                    <div className="cpuPokemon">
                        <h2>CPU Pokemon</h2>
                        <button disabled={this.state.disabledSelectEnemy} onClick={this.challengeClick} className="wildButton">Wild Pokemon?</button>
                    </div>
                    {this.state.enemyLoading ? <p>Pick you enemy!?</p>  
                    : <DisplayPoke
                        key={'player' + this.state.enemyPokemonAllData.id}
                        name={this.state.enemyPokemonAllData.name}
                        id={this.state.enemyPokemonAllData.id}
                        hp={this.state.enemyHealth}
                        maxhp={this.state.enemyPokemonAllData.stats[0].base_stat}
                        attack={this.state.enemyPokemonAllData.stats[1].base_stat}
                        defence={this.state.enemyPokemonAllData.stats[2].base_stat}
                        special={(this.state.enemyPokemonAllData.stats[3].base_stat + this.state.enemyPokemonAllData.stats[4].base_stat) / 2}
                        speed={this.state.enemyPokemonAllData.stats[5].base_stat}
                        type1={this.state.enemyTypeOne}
                        type2={this.state.enemyTypeTwo}
                        imageSrc={this.state.enemyPokemonAllData.sprites.front_default}
                        audioSrc={this.state.enemyPokemonCries}
                    />}
                    <div className="enemyInfo">
                        <img src={this.state.enemyImage} alt={this.state.enemyTrainer}/>
                        {this.state.enemyTrainer !== '' && this.state.enemyTrainer !== 'Team Rocket' ? <p>Gym Leader: {this.state.enemyTrainer}</p> : this.state.enemyTrainer === 'Team Rocket' ? <p>{this.state.enemyTrainer}</p> : null}
                    </div>
                </div>
                </section>
                
                <MainSubBattleUI
                    pokemonAllData={this.state.pokemonAllData} enemyPokemonAllData={this.state.enemyPokemonAllData} startButton={this.state.startButton} startClick={this.startClick}
                    disabledUserChoiceButton={this.state.disabledUserChoiceButton} attack={this.attack} heal={this.heal}
                    playerDecision={this.state.playerDecision} damage={this.state.damage} critial={this.state.critial} health={this.state.health}
                    enemyDecision={this.state.enemyDecision} enemyDamage={this.state.enemyDamage} enemyCritial={this.state.enemyCritial} enemyHealth={this.state.enemyHealth}
                    /* result */
                    final={this.state.final} restart={this.restart}
                    /* MusicControl */
                    enemyTrainer={this.state.enemyTrainer}
                />
                
                <MainSubBadge challengeClick={this.challengeClick} disabledSelectEnemy={this.state.disabledSelectEnemy}
                stageClear1={this.state.stageClear1} stageClear2={this.state.stageClear2}
                stageClear3={this.state.stageClear3} stageClear4={this.state.stageClear4}
                stageClear5={this.state.stageClear5} stageClear6={this.state.stageClear6}
                stageClear7={this.state.stageClear7} stageClear8={this.state.stageClear8}
                />

                 <div className="bonus">
                 {this.state.stageClear1 && this.state.stageClear2 && this.state.stageClear3 && this.state.stageClear4 &&
                 this.state.stageClear5 && this.state.stageClear6 && this.state.stageClear7 && this.state.stageClear8 ? <button className="wildButton" onClick={this.allClear}>You have won all the badge!</button> : null}
                 {this.state.easterEgg ? <img className="capture" src={pikachu} alt="pikachu cute emoji gif"></img> : null}
                 </div>
            </main>
        )
    }
}

export default Main;