import md5 from 'md5';
import React from 'react';

export default function GravatarPractice (props) {
    const email = props.email;
    const hash = md5(email)

    return(
        <img 
            className={props.className}
            src={`https://s.gravatar.com/avatar/${hash}?s=80`} 
            alt="Avatar"/>
    );
}