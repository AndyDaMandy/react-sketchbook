// Note that you need to type rsf to get boilerplate going forward

import React from 'react';

function List(props) {
    let animals = props.animals;
    return (
        <ul>
            {animals.map((animal) => {
                return <li key={animal}>{animal}</li>
            })}
        </ul>
    );
}

export default List;