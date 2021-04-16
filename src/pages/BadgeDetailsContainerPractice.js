import React from "react";

import PageLoadingPractice from '../components/PageLoadingPractice'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetailsPractice from "./BadgeDetailsPractice";

class BadgeDetailsContainerPractice extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
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
    
    handlerOpenModal = e => {
        this.setState({
            modalIsOpen: true
        })
    }

    handlerCloseModal = e => {
        this.setState({
            modalIsOpen: false
        })
    }

    handlerDeleteBadge = async e => {
        this.setState({ loading: true, error: null });

        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({ loading: false });
            this.props.history.push('/badgesPractice');
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
            <BadgeDetailsPractice badge={this.state.data} 
            modalIsOpen={this.state.modalIsOpen}
            onOpen={this.handlerOpenModal}
            onClose={this.handlerCloseModal}
            onDeleteBadge={this.handlerDeleteBadge}
            />
        );
    }
}

export default BadgeDetailsContainerPractice;