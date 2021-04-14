import React from "react";
import { Link } from "react-router-dom"
import "./styles/BadgeDetails.css"
import confLogo from "../images/platziconf-logo.svg";
import PageLoadingPractice from '../components/PageLoadingPractice'
import PageError from '../components/PageError'
import api from '../api'
import BadgePractice from '../components/BadgePractice'

class BadgeDetailsPractice extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render(){
        if(this.state.loading && !this.state.data){
            return(<PageLoadingPractice/>);
        }

        if(this.state.error){
            return(<PageError error={ this.state.error }/>);
        }
        const badge = this.state.data;
        return(
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h3>
                                    {badge.firstName} {badge.lastName}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <BadgePractice 
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                            email={badge.email}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/badgesPractice/${badge.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeDetailsPractice;