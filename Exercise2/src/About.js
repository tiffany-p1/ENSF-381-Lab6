import React from 'react'

function AboutMessage(prop){
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


export default AboutMessage
