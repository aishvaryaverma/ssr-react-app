import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import { Link } from 'react-router-dom';
import requireAuth from '../component/hocs/requireAuth';

class AdminListPage extends Component {
    componentDidMount() {
        if (this.props.admins.length > 0) return
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return (
                <li key={admin.id}>{admin.name}</li>
            )
        });
    }

    render() {
        return (
            <div>
                <h3>Protected list of admins</h3>
                <ul>
                    {this.renderAdmins()}
                </ul>
                <Link to="/">Back to home</Link>
            </div>
        )
    }
}

const mapStateToProps = ({ admins }) => {
    return { admins }
}

export default {
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminListPage)),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
}