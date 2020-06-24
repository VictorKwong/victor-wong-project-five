import React, { Component, Fragment } from 'react';
import boulder from '../assets/images/boulderBadge.png'
import cascade from '../assets/images/cascadeBadge.png'
import thunder from '../assets/images/thunderBadge.png'
import rainbow from '../assets/images/rainbowBadge.png'
import soul from '../assets/images/soulBadge.png'
import marsh from '../assets/images/marshBadge.png'
import volcano from '../assets/images/volcanoBadge.png'
import earth from '../assets/images/earthBadge.png'
import checkmark from '../assets/images/checkmark.png'

class MainSubBadge extends Component{
    render(){
        return(
            <Fragment>
                <div className="center">
                    <h2>Gym Location</h2>
                </div>
                <section className="selectStage">
                    <div>
                        <button disabled={this.props.disabledSelectEnemy} onClick={this.props.challengeClick} value="Pewter" className="gymButton">1.Pewter</button>
                        <div className="imgSize">
                            <img src={boulder} className="badgeOne" alt="Boulder badge"/>
                            {this.props.stageClear1 ? <img src={checkmark} className="checkmark" alt="Check mark"/> : null}
                        </div>
                    </div>
                    <div>
                        <button disabled={this.props.disabledSelectEnemy} onClick={this.props.challengeClick} value="Cerulean" className="gymButton">2.Cerulean</button>
                        <div className="imgSize">
                            <img src={cascade} className="badgeOne" alt="Cascade badge"/>
                            {this.props.stageClear2 ? <img src={checkmark} className="checkmark" alt="Check mark"/> : null}
                        </div>
                    </div>
                    <div>
                        <button disabled={this.props.disabledSelectEnemy} onClick={this.props.challengeClick} value="Vermillion" className="gymButton">3.Vermillion</button>
                        <div className="imgSize">
                            <img src={thunder} className="badgeOne" alt="Thunder badge"/>
                            {this.props.stageClear3 ? <img src={checkmark} className="checkmark" alt="Check mark"/> : null}
                        </div>
                    </div>
                    <div>
                        <button disabled={this.props.disabledSelectEnemy} onClick={this.props.challengeClick} value="Celadon" className="gymButton">4.Celadon</button>
                        <div className="imgSize">
                            <img src={rainbow} className="badgeOne" alt="Rainbow badge"/>
                            {this.props.stageClear4 ? <img src={checkmark} className="checkmark" alt="Check mark"/> : null}
                        </div>
                    </div>
                    <div>
                        <button disabled={this.props.disabledSelectEnemy} onClick={this.props.challengeClick} value="Fuchsia" className="gymButton">5.Fuchsia</button>
                        <div className="imgSize">
                            <img src={soul} className="badgeOne" alt="Soul badge"/>
                            {this.props.stageClear5 ? <img src={checkmark} className="checkmark" alt="Check mark"/> : null}
                        </div>
                    </div>
                    <div>
                        <button disabled={this.props.disabledSelectEnemy} onClick={this.props.challengeClick} value="Saffron" className="gymButton">6.Saffron</button>
                        <div className="imgSize">
                            <img src={marsh} className="badgeOne" alt="Marsh badge"/>
                            {this.props.stageClear6 ? <img src={checkmark} className="checkmark" alt="Check mark"/> : null}
                        </div>
                    </div>
                    <div>
                        <button disabled={this.props.disabledSelectEnemy} onClick={this.props.challengeClick} value="Cinnabar" className="gymButton">7.Cinnabar</button>
                        <div className="imgSize">
                            <img src={volcano} className="badgeOne" alt="Volcano badge"/>
                            {this.props.stageClear7 ? <img src={checkmark} className="checkmark" alt="Check mark"/> : null}
                        </div>
                    </div>
                    <div>   
                        <button disabled={this.props.disabledSelectEnemy} onClick={this.props.challengeClick} value="Viridian" className="gymButton">8.Viridian</button>
                        <div className="imgSize">
                            <img src={earth} className="badgeOne" alt="Earth badge"/>
                            {this.props.stageClear8 ? <img src={checkmark} className="checkmark" alt="Check mark"/> : null}
                        </div>
                    </div>

                    
                    
                    
                    


                </section>
            </Fragment>
        )
    }
}

export default MainSubBadge;