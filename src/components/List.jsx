// Note that you need to type rsf to get boilerplate going forward

import React from 'react';
import ListItem from './ListItem.jsx';

function List(props) {
    if (!props.animals) {
        return <div>Loading...</div>
    }

    if (props.animials.length === 0) {
        return <div>There are no animals in the list!</div>
    }
    return (
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>;
            })}
        </ul>
    )
}

export default List;