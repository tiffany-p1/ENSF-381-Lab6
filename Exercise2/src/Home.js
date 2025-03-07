import React from 'react';

function HomeMessage(prop){
    return(
        <div>
            <h1>{prop.title}</h1>
            <p>{prop.message}</p>
        </div>
    );
    /*
    return "Contact Us";
    */
}


export default HomeMessage
