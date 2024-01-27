import React from 'react'


function About(props) {
    return (
        <div>
            <aside>
            <img src={props.image ? props.image : "https://via.placeholder.com/215"} alt="blog logo" />
            <p>{props.about}</p>
            </aside>
        </div>
    );
}

export default About;


