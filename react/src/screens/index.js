import React from 'react';
import { Link } from 'react-router-dom';

export default class Index extends React.Component {

    //-------------------------------------------
    // Render
    //-------------------------------------------

    render() {
        return (
            <div>
                <h2>Hello React!</h2> 
                <Link to='/about'>About</Link>
            </div>
        );
    }

}