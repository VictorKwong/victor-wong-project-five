import React, { Component } from 'react';
import Result from './Result';
import MusicControl  from './MusicControl';

class MainSubBattleUI extends Component{
    render(){
        return(
            <div className="BattleUIScreen">
                <div className="startButton">
                    { this.props.pokemonAllData !== '' && this.props.enemyPokemonAllData !== '' && this.props.startButton === false ? <button className="battleButton" onClick={this.props.startClick}>Let's Battle</button> : null }
                    { this.props.pokemonAllData === '' || this.props.enemyPokemonAllData === '' ? <p className="textBox">Pick the pokemon before battle...</p> : null}
                </div>
                <div className="enemyUI">
                    { this.props.startButton === true ? <img src={this.props.enemyPokemonAllData.sprites.front_default} alt={this.props.enemyPokemonAllData.name} /> : null }
                    <div>
                        { this.props.startButton === true && (this.props.enemyHealth >= this.props.enemyPokemonAllData.stats[0].base_stat * 0.5) ? <p>HP:{this.props.enemyHealth}/{this.props.enemyPokemonAllData.stats[0].base_stat}</p>
                        : this.props.startButton === true && (this.props.enemyHealth >= this.props.enemyPokemonAllData.stats[0].base_stat * 0.25) ? <p>HP:<span className="yellowHealth">{this.props.enemyHealth}</span>/{this.props.enemyPokemonAllData.stats[0].base_stat}</p>
                        : this.props.startButton === true && (this.props.enemyHealth < this.props.enemyPokemonAllData.stats[0].base_stat * 0.25) ? <p>HP:<span className="redHealth">{this.props.enemyHealth}</span>/{this.props.enemyPokemonAllData.stats[0].base_stat}</p> : null }
                        { this.props.startButton === true && (this.props.enemyHealth >= this.props.enemyPokemonAllData.stats[0].base_stat * 0.5) ? <progress className="greenHP greenHP2" value={(this.props.enemyHealth/this.props.enemyPokemonAllData.stats[0].base_stat)*100} max="100"></progress> 
                        : this.props.startButton === true && (this.props.enemyHealth >= this.props.enemyPokemonAllData.stats[0].base_stat * 0.25) ? <progress className="yellowHP yellowHP2" value={(this.props.enemyHealth/this.props.enemyPokemonAllData.stats[0].base_stat)*100} max="100"></progress>
                        : this.props.startButton === true && (this.props.enemyHealth < this.props.enemyPokemonAllData.stats[0].base_stat * 0.25) ? <progress className="redHP redHP2" value={(this.props.enemyHealth/this.props.enemyPokemonAllData.stats[0].base_stat)*100} max="100"></progress>
                        : null}
                    </div>
                </div>
                <div className="playerUI">
                    { this.props.startButton === true ? <img src={this.props.pokemonAllData.sprites.front_default} alt={this.props.pokemonAllData.name} /> : null }
                    <div>
                        { this.props.startButton === true && (this.props.health >= this.props.pokemonAllData.stats[0].base_stat * 0.5) ? <p>HP:{this.props.health}/{this.props.pokemonAllData.stats[0].base_stat}</p> 
                        : this.props.startButton === true && (this.props.health >= this.props.pokemonAllData.stats[0].base_stat * 0.25) ? <p>HP:<span className="yellowHealth">{this.props.health}</span>/{this.props.pokemonAllData.stats[0].base_stat}</p>
                        : this.props.startButton === true && (this.props.health < this.props.pokemonAllData.stats[0].base_stat * 0.25) ? <p>HP:<span className="redHealth">{this.props.health}</span>/{this.props.pokemonAllData.stats[0].base_stat}</p> : null }
                        { this.props.startButton === true && (this.props.health >= this.props.pokemonAllData.stats[0].base_stat * 0.5) ? <progress className="greenHP greenHP2" value={(this.props.health/this.props.pokemonAllData.stats[0].base_stat)*100} max="100"></progress>
                        : this.props.startButton === true && (this.props.health >= this.props.pokemonAllData.stats[0].base_stat * 0.25) ? <progress className="yellowHP yellowHP2" value={(this.props.health/this.props.pokemonAllData.stats[0].base_stat)*100} max="100"></progress>
                        : this.props.startButton === true && (this.props.health < this.props.pokemonAllData.stats[0].base_stat * 0.25) ? <progress className="redHP redHP2" value={(this.props.health/this.props.pokemonAllData.stats[0].base_stat)*100} max="100"></progress>
                        : null}
                    </div>
                </div>
                <div className="flexing">
                    <div className="updateBoardUI">
                        { this.props.startButton === true && this.props.playerDecision === '' ? <p>The battle has begin..</p> : null}
                        { this.props.startButton === true && this.props.playerDecision !== '' ? <p>---PlayerTurn---</p> : null}
                        { this.props.startButton === true && this.props.playerDecision === 'attack' && this.props.critial === true ? <p><span className="styleTextU">{this.props.pokemonAllData.name}</span> deal {this.props.damage} damage!!! Critical Hit!</p>
                        : this.props.startButton === true && this.props.playerDecision === 'attack' ? <p><span className="styleTextU">{this.props.pokemonAllData.name}</span> deal {this.props.damage} damage!</p>
                        : this.props.startButton === true && this.props.playerDecision === 'heal' ? <p><span className="styleTextU">{this.props.pokemonAllData.name}</span> has heal 5 hp.</p> : null }
                        { this.props.startButton === true && this.props.playerDecision !== '' ? <p>---EnemyTurn---</p> : null}
                        { this.props.startButton === true && this.props.enemyDecision === 'enemyAtk' && this.props.enemyCritial === true ? <p>Enemy <span className="styleTextU">{this.props.enemyPokemonAllData.name}</span> deal {this.props.enemyDamage} damage!!! Critical Hit!</p>
                        : this.props.startButton === true && this.props.enemyDecision === 'enemyAtk' ? <p>Enemy <span className="styleTextU">{this.props.enemyPokemonAllData.name}</span> deal {this.props.enemyDamage} damage! </p>
                        : this.props.startButton === true && this.props.enemyDecision === 'enemyHeal' ? <p>Enemy <span className="styleTextU">{this.props.enemyPokemonAllData.name}</span> has heal 2 hp.</p> 
                        : this.props.startButton === true && this.props.enemyDecision === 'enemyNothing' ? <p>Enemy <span className="styleTextU">{this.props.enemyPokemonAllData.name}</span> is Daydreaming! Waste a turn!</p> : null}
                        <Result final={this.props.final}/>
                    </div>
                    <div className="playerSelectChoiceUI">
                        { this.props.startButton === true ? <button disabled={this.props.disabledUserChoiceButton} onClick={this.props.attack} className="userButtonChoice"><span>Attack</span></button> : null }
                        { this.props.startButton === true ? <button disabled={this.props.disabledUserChoiceButton} onClick={this.props.heal} className="userButtonChoice"><span>Heal</span></button> : null }
                    </div>
                </div>

                <div className="startButton">
                    { (this.props.final === true || this.props.final === false) && this.props.startButton === true ? <button onClick={this.props.restart} className="userButtonChoice restartButton"><span>Restart</span></button> : null }
                </div>
                <div className="hpBarDecor"></div>
                <div className="hpBarDecorTwo"></div>
                <div className="hpBarDecorThr"></div>
                <div className="hpBarDecorFou"></div>
                <MusicControl startButton={this.props.startButton} final={this.props.final} enemyTrainer={this.props.enemyTrainer} restart={this.props.restart} />
            </div>
        )
    }
}

export default MainSubBattleUI;