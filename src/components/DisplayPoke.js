import React from 'react';

const DisplayPoke = (data) =>{
    return(
        <div className="displaySpace">
                <div>
                    <img src={data.imageSrc} alt={data.name}></img>
                    <p>No. {data.id}</p>
                </div>
                <div className="displayBoxFirst styleTextU">
                    <p>{data.name}</p>
                    <p className="hpBar">Hp: {data.hp}/{data.maxhp}</p>
                    <p>status/ok</p>
                    <div className="hpBarDecor"></div>
                </div>
                <div className="displayBoxSec styleTextU">
                    <p>attack: {data.attack}</p>
                    <p>defence: {data.defence}</p>
                    <p>special: {data.special}</p>
                    <p>speed: {data.speed}</p>
                    <div className="hpBarDecor"></div>
                    <div className="hpBarDecorTwo"></div>
                    <div className="hpBarDecorThr"></div>
                    <div className="hpBarDecorFou"></div>
                </div>
                <div className="displayBoxThr styleTextU">
                    <p>type1:</p>
                    <p className="hpBar">{data.type1}</p>
                    <p>type2:</p>
                    <p className="hpBar">{data.type2}</p>
                </div>
                {data.id <= 649 ? <audio autoPlay src={data.audioSrc} type="audio/mp3"></audio> : null}
        </div>
    )
}

export default DisplayPoke;


/* key={this.state.pokemonAllData.id}
name={this.state.pokemonAllData.name}
id={this.state.pokemonAllData.id}
hp={this.state.health}
attack={this.state.attack}
defence={this.state.defence}
special={(this.state.specialAtk + this.state.specialDef) / 2}
speed={this.state.speed}
type1={this.state.typeOne}
type2={this.state.typeTwo}
imageSrc={this.state.sprite}
audioSrc={this.state.pokemonCries} */