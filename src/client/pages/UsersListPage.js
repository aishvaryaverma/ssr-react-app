import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class UsersListPage extends Component {
    componentDidMount() {
        if (this.props.users.length > 0) return
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return (
                <li key={user.id}>{user.name}</li>
            )
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Users List | SSR React App</title>
                </Helmet>
                Here's a big list of users:
                <ul>
                    {this.renderUsers()}
                </ul>
                <Link to="/">Back to home</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

const loadData = ({ dispatch }) => {
    return dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
}