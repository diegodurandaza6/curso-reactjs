import React from 'react';
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesListPractice from '../components/BadgesListPractice'
import api from '../api'
import PageLoadingPractice from '../components/PageLoadingPractice'
import PageError from '../components/PageError'

class BadgesPractice extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data: []
    //     }
    //     console.log('1. constructor()');
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log('5. componentDidUpdate()');
    //     console.log({
    //         prevProps:prevProps, 
    //         prevState:prevState
    //     });
    //     console.log({
    //         Props:this.props, 
    //         State:this.state
    //     });
    // }

    // componentWillUnmount() {
    //     console.log('6. componentWillUnmount()');
    //     clearTimeout(this.timeOutId);
    // }

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        // console.log('3. componentDidMount()');
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }
    
    render(){
        if(this.state.loading){
            return(<PageLoadingPractice/>);
        }

        if(this.state.error){
            return(<PageError error={ this.state.error }/>);
        }
        // console.log('2/4. render()');
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badgesPractice/new" className="btn btn-primary">
                            New Badges
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesListPractice badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgesPractice