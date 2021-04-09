import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutPractice from './LayoutPractice';
import BadgeNewPractice from '../pages/BadgeNewPractice';
import BadgesPractice from '../pages/BadgesPractice';
import NotFoundPractice from '../pages/NotFoundPractice'
import HomePractice from '../pages/HomePractice'

function AppPractice(){
    return(
        <BrowserRouter>
            <LayoutPractice>
                <Switch>
                    <Route exact path="/" component={HomePractice}/>
                    <Route exact path="/badges" component={BadgesPractice}/>
                    <Route exact path="/badges/new" component={BadgeNewPractice}/>
                    <Route component={NotFoundPractice}/>
                </Switch>
            </LayoutPractice>
        </BrowserRouter>
    );
}

export default AppPractice;