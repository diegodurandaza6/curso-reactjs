import React from 'react';
import NavbarPractice from './NavbarPractice'

function LayoutPractice (props) {
    return(
        <React.Fragment>
            <NavbarPractice />
            {props.children}
        </React.Fragment>
    );
}

export default LayoutPractice