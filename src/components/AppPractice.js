import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutPractice from './LayoutPractice';
import BadgeNewPractice from '../pages/BadgeNewPractice';
import BadgeEditPractice from '../pages/BadgeEditPractice';
import BadgesPractice from '../pages/BadgesPractice';
import NotFoundPractice from '../pages/NotFoundPractice'
import HomePractice from '../pages/HomePractice'
import BadgeDetailsPractice from '../pages/BadgeDetailsPractice'

function AppPractice(){
    return(
        <BrowserRouter>
            <LayoutPractice>
                <Switch>
                    <Route exact path="/" component={HomePractice}/>
                    <Route exact path="/badgesPractice" component={BadgesPractice} />
                    <Route exact path="/badgesPractice/new" component={BadgeNewPractice} />
                    <Route exact path="/badgesPractice/:badgeId/edit" component={BadgeEditPractice} />
                    <Route exact path="/badgesPractice/:badgeId" component={BadgeDetailsPractice} />
                    <Route component={NotFoundPractice}/>
                </Switch>
            </LayoutPractice>
        </BrowserRouter>
    );
}

export default AppPractice;