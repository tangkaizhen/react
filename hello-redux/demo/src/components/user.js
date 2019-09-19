import React, { Component } from 'react'
import {connect} from 'react-redux'
import {get_user} from '../actions';
class user extends Component {
    render() {
        const {get_user}=this.props
        return (
            <div>
                <h1 className='jumbotron-heading text-center'>{this.props.email_value}</h1>
                <p className='text-center'>
                    <button onClick={get_user} className='btn btn-primary mr-2'>GET USER</button>
                </p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        email_value:state.user_email.email
    };
}
export default connect(mapStateToProps,{get_user})(user) 