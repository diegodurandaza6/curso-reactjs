import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import NavbarPractice from '../components/NavbarPractice';
import BadgePractice from '../components/BadgePractice';
import BadgeFormPractice from '../components/BadgeFormPractice';

class BadgeNewPractice extends React.Component{
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    } };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
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
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            avatarUrl="https://s.gravatar.com/avatar/9bb8b6a4633c33326489618691b5de08?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeFormPractice 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNewPractice