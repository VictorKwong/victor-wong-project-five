import React, { Component } from 'react';

class Footer extends Component{
    constructor(){
        super()
        this.state = {
            trigger: false,
        }
    }

easterEgg = (e) => {
    e.preventDefault()
    const copyOfTrigger = true
    this.setState({ trigger : copyOfTrigger })
}

    render(){
        return(
            <footer className="footerPosition">
                {!this.state.trigger ? <p onClick={this.easterEgg} className="footerButton">Copyright ⓒ 2020 Victor Wong</p>
                 : <p className="footerButton">Thanks for Playing!^^ You will Always got my EasterEgg! <a href="https://github.com/VictorKwong/victor-wong-project-five">GitHub</a></p>}
            </footer>
        )
    }
}

export default Footer;