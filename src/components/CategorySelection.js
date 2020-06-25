import React from 'react';
import {Link} from 'react-router-dom'

const CategorySelection = ({categories}) => {
    return (
        <div>
            <h1>Categories</h1>
            <h2>What type of entry do you want?</h2>
            <ul>
                {categories.map((item, index) => {
                    return(
                        <li key={item}><Link to={`/entry/new/${index}`}>{item}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CategorySelection;