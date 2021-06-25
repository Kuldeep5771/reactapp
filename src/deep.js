import React from 'react';
//import props from 'props'

function Deep(props)  {
    return (<div><p>this is the 1st site on react </p>
     <h1>Happy World</h1>
    <p>{props.name}</p>
    <p>{props.occupation}</p>
    <p>{props.age}</p>
    </div>);
}

export default Deep;