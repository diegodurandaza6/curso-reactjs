import React from "react";

import PageLoadingPractice from '../components/PageLoadingPractice'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetailsPractice from "./BadgeDetailsPractice";

class BadgeDetailsContainerPractice extends React.Component {

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
        return(
            <BadgeDetailsPractice badge={this.state.data}/>
        );
    }
}

export default BadgeDetailsContainerPractice;