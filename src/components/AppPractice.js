import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeNewPractice from '../pages/BadgeNewPractice';
import BadgesPractice from '../pages/BadgesPractice';


function AppPractice(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={BadgesPractice}/>
                <Route exact path="/badges/new" component={BadgeNewPractice}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppPractice;