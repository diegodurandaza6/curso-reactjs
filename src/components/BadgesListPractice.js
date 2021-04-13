import React from 'react';
import { Link } from 'react-router-dom'
import GravatarPractice from './GravatarPractice';

import './styles/BadgesList.css';

class BadgesListItemPractice extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <GravatarPractice
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesListPractice extends React.Component {
  render() {
    if(this.props.badges.length === 0){
      return(
        <div>
          <h3>New Badges not found</h3>
          <Link className="btn btn-primary" to="/badgesPractice/new" >
          Create New Badges
          </Link>
        </div>
      )
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItemPractice badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesListPractice;