import React, { Component } from 'react';
import DisplayPoke from './DisplayPoke';
import axios from 'axios';
import Result from './Result';
import brock from '../assets/images/brock.png'
import misty from '../assets/images/misty.png'
import surge from '../assets/images/surge.png'
import erika from '../assets/images/erika.png'
import koga from '../assets/images/koga.png'
import sabrina from '../assets/images/sabrina.png'
import blaine from '../assets/images/blaine.png'
import giovanni from '../assets/images/giovanni.png'
import boulder from '../assets/images/boulderBadge.png'
import cascade from '../assets/images/cascadeBadge.png'
import thunder from '../assets/images/thunderBadge.png'
import rainbow from '../assets/images/rainbowBadge.png'
import soul from '../assets/images/soulBadge.png'
import marsh from '../assets/images/marshBadge.png'
import volcano from '../assets/images/volcanoBadge.png'
import earth from '../assets/images/earthBadge.png'

class Main extends Component{
    constructor(){
        super();
        this.state = {
          userPokeID: 0,
          userTyping: '',
          originLink: 'https://pokeapi.co/api/v2/pokemon/',
          pokemonAllData: '',
          health: '',
          typeOne: '',
          typeTwo: '',
          pokemonCries: '',
          loading: true,
          enemyLink: 'https://pokeapi.co/api/v2/pokemon/',
          enemyPokemonAllData: '',
          enemyhealth: '',
          enemyTypeOne: '',
          enemyTypeTwo: '',
          enemyPokemonCries: '',
          enemyLoading: true,
          enemyTrainer: '',
          enemyImage:'',
          results: '',
          critial: false,
        }
      }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.originLink !== this.state.originLink) {
          console.log('pokemons state has changed.')
          axios({
            url: this.state.originLink,
            method: 'GET',
            responseType: 'JSON'
          }).then((x) => {
            console.log('gg22');
            x.data.types.length === 2 ? 
              this.setState ({typeTwo: x.data.types[1].type.name}): 
              this.setState ({typeTwo: ''})  
            this.setState({
              pokemonAllData: x.data,
              typeOne: x.data.types[0].type.name,
              pokemonCries: 'https://pokemoncries.com/cries-old/' + x.data.id +'.mp3',
              loading: false,
              health: x.data.stats[0].base_stat,
            })
            console.log(x.data);
          })
        }
        if(prevState.enemyLink !== this.state.enemyLink){
          axios({
            url: this.state.enemyLink,
            method: 'GET',
            responseType: 'JSON'
          }).then((x) => {
            x.data.types.length === 2 ? 
              this.setState ({enemyTypeTwo: x.data.types[1].type.name}): 
              this.setState ({enemyTypeTwo: ''})  
            this.setState({
              enemyPokemonAllData: x.data,
              enemyTypeOne: x.data.types[0].type.name,
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/' + x.data.id +'.mp3',
              enemyLoading: false,
              enemyhealth: x.data.stats[0].base_stat,
            })
            console.log(x.data);
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
        if( copyUserTyping !== ''){
            this.setState({
                userPokeID: copyUserTyping,
                originLink: 'https://pokeapi.co/api/v2/pokemon/' + copyUserTyping,
                userTyping: '',
            })
        }
    console.log(this.state.userPokeID);
    console.log(this.state.originLink);
    }

    challengeClick = (enemy) => {
        enemy.preventDefault();
        console.log(enemy.target.value)
        if (enemy.target.value === "Pewter"){
        this.setState({
          enemyLink: 'https://pokeapi.co/api/v2/pokemon/onix',
          enemyPokemonCries: 'https://pokemoncries.com/cries-old/95.mp3',
          enemyTrainer: 'Brock',
          enemyImage: brock,
        })
        }else if(enemy.target.value === "Cerulean"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/starmie',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/121.mp3',
              enemyTrainer: 'Misty',
              enemyImage: misty,
            })
        }else if(enemy.target.value === "Vermillion"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/raichu',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/26.mp3',
              enemyTrainer: 'Lt. Surge',
              enemyImage: surge,
            })
        }else if(enemy.target.value === "Celadon"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/gloom',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/44.mp3',
              enemyTrainer: 'Erika',
              enemyImage: erika,
            })
        }else if(enemy.target.value === "Fuchsia"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/venomoth',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/49.mp3',
              enemyTrainer: 'Koga',
              enemyImage: koga,
            })
        }else if(enemy.target.value === "Saffron"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/alakazam',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/65.mp3',
              enemyTrainer: 'Sabrina',
              enemyImage: sabrina,
            })
        }else if(enemy.target.value === "Cinnabar"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/arcanine',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/59.mp3',
              enemyTrainer: 'Blaine',
              enemyImage: blaine,
            })
        }else if(enemy.target.value === "Viridian"){
            this.setState({
              enemyLink: 'https://pokeapi.co/api/v2/pokemon/rhydon',
              enemyPokemonCries: 'https://pokemoncries.com/cries-old/112.mp3',
              enemyTrainer: 'Giovanni',
              enemyImage: giovanni,
            })
        }else{
            let random = Math.floor(Math.random() * 806) + 1;
            this.setState({
                enemyLink:'https://pokeapi.co/api/v2/pokemon/' + random,
                enemyPokemonCries: 'https://pokemoncries.com/cries-old/' + random + '.mp3',
                enemyTrainer: '',
                enemyImage: '',
            })
        }
    }

    
    fightClick = (fight) => {
        fight.preventDefault();
        if(this.state.pokemonAllData !== '' && this.state.enemyPokemonAllData !== ''){
            
            if(this.state.pokemonAllData.stats[1].base_stat> this.state.enemyPokemonAllData.stats[1].base_stat){
            this.setState ({ results: 'win' })
            } else if(this.state.pokemonAllData.stats[1].base_stat < this.state.enemyPokemonAllData.stats[1].base_stat){
            this.setState ({ results: 'lose' })
            } else {
            this.setState ({ results: 'tie' })
            }
        }
    }

    /* test */
    addHealth = (add) => {
        add.preventDefault();
        this.setState ({ health: this.state.health + 5 })
    }
    attack = (attack) => {
        attack.preventDefault();
        this.setState ({ critial : false })
        let damage = Math.round((0.5 * (this.state.pokemonAllData.stats[1].base_stat / this.state.enemyPokemonAllData.stats[2].base_stat)) + 1)
        let random = (Math.random() * 1);
        if( random <= 0.15){
            damage = Math.round(damage * 1.5)
            this.setState ({ critial : true })
        }
        console.log(random);
        this.setState ({ enemyhealth: this.state.enemyhealth - damage})
    }


    render(){
        return(
            <main>
                <section className="mainSpace">
                <div>
                    <h2>Player's Pokemon</h2>
                    {
                    this.state.loading ? <p>Please choose your Pokemon(Ex. "1" / "bulbasaur")</p> : 
                    <DisplayPoke
                        key={this.state.pokemonAllData.id}
                        name={this.state.pokemonAllData.name}
                        id={this.state.pokemonAllData.id}
                        hp={this.state.health}
                        attack={this.state.pokemonAllData.stats[1].base_stat}
                        defence={this.state.pokemonAllData.stats[2].base_stat}
                        special={(this.state.pokemonAllData.stats[3].base_stat + this.state.pokemonAllData.stats[4].base_stat) / 2}
                        speed={this.state.pokemonAllData.stats[5].base_stat}
                        type1={this.state.typeOne}
                        type2={this.state.typeTwo}
                        imageSrc={this.state.pokemonAllData.sprites.front_default}
                        audioSrc={this.state.pokemonCries}
                    />
                    }
                    <form className="userInputBox" >
                        <input type="text" name='userPokeID' size="10" maxLength="11" placeholder="I choose you!" onChange={this.userChange} value={this.state.userTyping}/>
                        <input type="submit" value="Throw Pokeball" onClick={this.userClick}/>
                    </form>
                </div>
                
                <div>
                    <h2>CPU Pokemon</h2>
                    {
                        this.state.enemyLoading ? <p>Pick you enemy</p> : 
                    <DisplayPoke
                        key={'player' + this.state.enemyPokemonAllData.id}
                        name={this.state.enemyPokemonAllData.name}
                        id={this.state.enemyPokemonAllData.id}
                        hp={this.state.enemyhealth}
                        attack={this.state.enemyPokemonAllData.stats[1].base_stat}
                        defence={this.state.enemyPokemonAllData.stats[2].base_stat}
                        special={(this.state.enemyPokemonAllData.stats[3].base_stat + this.state.enemyPokemonAllData.stats[4].base_stat) / 2}
                        speed={this.state.enemyPokemonAllData.stats[5].base_stat}
                        type1={this.state.enemyTypeOne}
                        type2={this.state.enemyTypeTwo}
                        imageSrc={this.state.enemyPokemonAllData.sprites.front_default}
                        audioSrc={this.state.enemyPokemonCries}
                    />
                    }
                    <div className="enemyInfo">
                    <img src={this.state.enemyImage} alt={this.state.enemyTrainer}/>
                    <p>Gym Leader: {this.state.enemyTrainer}</p>
                    <div className="wild">
                        <button onClick={this.challengeClick}>Wild Pokemon</button>
                    </div>
                    </div>
                </div>
                </section>
                <div className="selectStage">
                    <button onClick={this.challengeClick} value="Pewter">Pewter</button>
                    <button onClick={this.challengeClick} value="Cerulean"> Cerulean</button>
                    <button onClick={this.challengeClick} value="Vermillion">Vermillion</button>
                    <button onClick={this.challengeClick} value="Celadon">Celadon</button>
                    <div className="imgSize">
                        <img src={boulder} className="badgeOne" alt="Boulder Badge"/>
                    </div>
                    <div className="imgSize">
                        <img src={cascade} className="badgeOne" alt="Cascade Badge"/>
                    </div>
                    <div className="imgSize">
                        <img src={thunder} className="badgeOne" alt="Thunder Badge"/>
                    </div>
                    <div className="imgSize">
                        <img src={rainbow} className="badgeOne" alt="Rainbow Badge"/>
                    </div>
                    <button onClick={this.challengeClick} value="Fuchsia">Fuchsia</button>
                    <button onClick={this.challengeClick} value="Saffron">Saffron</button>
                    <button onClick={this.challengeClick} value="Cinnabar">Cinnabar</button>
                    <button onClick={this.challengeClick} value="Viridian">Viridian</button>
                    <div className="imgSize">
                        <img src={soul} className="badgeOne" alt="Soul Badge"/>
                    </div>
                    <div className="imgSize">
                        <img src={marsh} className="badgeOne" alt="Marsh Badge"/>
                    </div>
                    <div className="imgSize">
                        <img src={volcano} className="badgeOne" alt="Volcano Badge"/>
                    </div>
                    <div className="imgSize">
                        <img src={earth} className="badgeOne" alt="Earth Badge"/>
                    </div>
                </div>

        <button onClick={this.fightClick}>Fight</button>
        <button onClick={this.attack}>Attack</button>
        {this.state.critial ? <p>Critial Hit!</p> : null}
        {/* <button onClick={this.add}>++</button> */}
        <Result key="1" final={this.state.results}/>
            </main>
        )
    }
}

export default Main;