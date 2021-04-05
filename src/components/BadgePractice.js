import React from 'react';
import confLogo from '../images/badge-header.svg';

class BadgePractice extends React.Component {
    render(){
        return <div>
            <div>
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div>
            <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                <h1>Diego <br/> Duran</h1>
            </div>
            <div>
                <p>Web Developer</p>
                <p>@diegoduran6</p>
            </div>
            <div>
                #platziconf
            </div>
        </div>
    }
}

export default BadgePractice