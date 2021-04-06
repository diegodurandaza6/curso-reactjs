import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import NavbarPractice from '../components/NavbarPractice';
import BadgePractice from '../components/BadgePractice';
import BadgeFormPractice from '../components/BadgeFormPractice';

class BadgeNewPractice extends React.Component{
    render(){
        return(
            <div>
                <NavbarPractice/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <BadgePractice 
                            firstName="Diego"
                            lastName="Duran"
                            twitter="@diegodurand6"
                            jobTitle="Web Developer"
                            avatarUrl="https://s.gravatar.com/avatar/9bb8b6a4633c33326489618691b5de08?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeFormPractice/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNewPractice