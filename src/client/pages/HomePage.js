import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>SSR React App</title>
            </Helmet>
            <div>I'm the BEST home component</div>
            <button onClick={() => console.log('Press me clicked!!')}>Press me!</button>
        </div>
    )
}

export default {
    component: HomePage
}