import React, { Component } from 'react';
import Result from './Result';

class MainSubBattleUI extends Component{
    render(){
        return(
            <div className="BattleUIScreen">
                <div className="startButton">
                    { this.props.pokemonAllData !== '' && this.props.enemyPokemonAllData !== '' && this.props.startButton === false ? <button className="battleButton" onClick={this.props.startClick}>Let's Battle</button> : null }
                    { this.props.pokemonAllData === '' || this.props.enemyPokemonAllData === '' ? <p className="textBox">Pick the pokemon before battle...</p> : null}
                </div>
                <div className="enemyUI">
                    { this.props.startButton === true ? <p>{this.props.enemyHealth}/{this.props.enemyPokemonAllData.stats[0].base_stat}</p> : null }
                    { this.props.startButton === true ? <img src={this.props.enemyPokemonAllData.sprites.front_default} alt={this.props.enemyPokemonAllData.name} /> : null }
                </div>
                <div className="playerUI">
                    { this.props.startButton === true ? <img src={this.props.pokemonAllData.sprites.front_default} alt={this.props.pokemonAllData.name} /> : null }
                    { this.props.startButton === true ? <p>{this.props.health}/{this.props.pokemonAllData.stats[0].base_stat}</p> : null } 
                </div>
                <div className="flexing">
                    <div className="updateBoardUI">
                    { this.props.startButton === true && this.props.playerDecision === '' ? <p>The battle has begin..</p> : null}
                    { this.props.startButton === true && this.props.playerDecision !== '' ? <p>---PlayerTurn---</p> : null}
                    { this.props.startButton === true && this.props.playerDecision === 'attack' && this.props.critial === true ? <p><span className="styleTextU">{this.props.pokemonAllData.name}</span> deal {this.props.damage} damage!!! Critical Hit!</p>
                    : this.props.startButton === true && this.props.playerDecision === 'attack' ? <p><span className="styleTextU">{this.props.pokemonAllData.name}</span> deal {this.props.damage} damage!</p>
                    : this.props.startButton === true && this.props.playerDecision === 'heal' ? <p><span className="styleTextU">{this.props.pokemonAllData.name}</span> has heal 5 hp.</p> : null }
                    { this.props.startButton === true && this.props.playerDecision !== '' ? <p>---EnemyTurn---</p> : null}
                    { this.props.startButton === true && this.props.enemyDecision === 'enemyAtk' && this.props.enemyCritial === true ? <p><span className="styleTextU">{this.props.enemyPokemonAllData.name}</span> deal {this.props.enemyDamage} damage!!! Critical Hit!</p>
                    : this.props.startButton === true && this.props.enemyDecision === 'enemyAtk' ? <p><span className="styleTextU">{this.props.enemyPokemonAllData.name}</span> deal {this.props.enemyDamage} damage! </p>
                    : this.props.startButton === true && this.props.enemyDecision === 'enemyHeal' ? <p><span className="styleTextU">{this.props.enemyPokemonAllData.name}</span> has heal 2 hp.</p> 
                    : this.props.startButton === true && this.props.enemyDecision === 'enemyNothing' ? <p><span className="styleTextU">{this.props.enemyPokemonAllData.name}</span> is Daydreaming! Waste a turn!</p> : null}
                    </div>
                    <div className="playerSelectChoiceUI">
                        { this.props.startButton === true ? <button disabled={this.props.disabledUserChoiceButton} onClick={this.props.attack}>Attack</button> : null }
                        { this.props.startButton === true ? <button disabled={this.props.disabledUserChoiceButton} onClick={this.props.heal}>Heal</button> : null }
                    </div>
                </div>
                <Result final={this.props.final}/>
                <div className="startButton">
                { (this.props.final === true || this.props.final === false) && this.props.startButton === true ? <button onClick={this.props.restart}>Restart</button> : null }
                </div>
                <div className="hpBarDecor"></div>
                <div className="hpBarDecorTwo"></div>
                <div className="hpBarDecorThr"></div>
                <div className="hpBarDecorFou"></div>
            </div>
        )
    }
}

export default MainSubBattleUI;