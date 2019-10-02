import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import jwtService from '../../app/services/jwtService';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as Actions from "../store/actions";

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        let results = regex.exec(this.props.location.search);

        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if(error != null) {
            this.props.showMessage({message: error, variant: 'error'});
        }

        if(token) {

            localStorage.setItem('jwt_access_token', token);

            jwtService.oAuth2Authorize(token);

            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;

        }
        else {
            return <Redirect to={{
                pathname: "/login",
                state: {
                    from: this.props.location,
                    error: error
                }
            }}/>;
        }
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            showMessage        : Actions.showMessage,
            hideMessage        : Actions.hideMessage
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(OAuth2RedirectHandler);
