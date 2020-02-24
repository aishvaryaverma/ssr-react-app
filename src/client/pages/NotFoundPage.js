import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    console.log(staticContext)
    staticContext.notFound = true;
    return (
        <h2>
            OOPS, Page not found.
        </h2>
    )
}

export default {
    component: NotFoundPage
}
