import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgePractice from '../components/BadgePractice';
import BadgeFormPractice from '../components/BadgeFormPractice';
import api from '../api';
import PageLoadingPractice from '../components/PageLoadingPractice';

class BadgeNewPractice extends React.Component{
    state = { 
        loading: false,
        error: null,
        form: {
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

    handlSubmit = e => {
        e.preventDefault();
        this.setState({loading: true, error: null});
        setTimeout(() => {
            try {
                api.badges.create(this.state.form)
                this.setState({loading: false});
                this.props.history.push('/badgesPractice');
            } catch (error) {
                this.setState({loading: false, error: error});
            }
        }, 1000)
    }
    render(){
        
        if(this.state.loading){
            return(
                <PageLoadingPractice/>
            )
        }
        
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img 
                        className="BadgeNew__hero-image img-fluid" 
                        src={header} 
                        alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <BadgePractice 
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            twitter={this.state.form.twitter || 'TWITTER'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            email={this.state.form.email || 'EMAIL'}
                            avatarUrl="https://s.gravatar.com/avatar/9bb8b6a4633c33326489618691b5de08?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeFormPractice 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handlSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNewPractice