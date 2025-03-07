import React from 'react'

function ContactUsMessage(prop){
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


export default ContactUsMessage
