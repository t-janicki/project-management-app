import Login from './Login';
import {authRoles} from 'app/auth';
import OAuth2RedirectHandler from "../../fuse-configs/OAuth2RedirectHandler";
import jwtService from '../../services/jwtService'

export const LoginConfig = {
    settings: {
        layout: {
            config: {
                navbar        : {
                    display: false
                },
                toolbar       : {
                    display: false
                },
                footer        : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },
    auth    : authRoles.onlyGuest,
    routes  : [
        {
            path     : '/login',
            component: Login
        },
        {
            path : '/oauth2/redirect',
            component: OAuth2RedirectHandler
        }
    ]
};

