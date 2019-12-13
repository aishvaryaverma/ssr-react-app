// import React from 'react';
import Home from './component/Home';
import UsersList from './component/UsersList';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: UsersList
    }
]