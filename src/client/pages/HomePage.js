import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ()  => {
    return (
        <div>
            <div>I'm the BEST home component</div>
            <Link to="/users">Press me!</Link>
        </div>
    )
}

export default {
    component: HomePage
}