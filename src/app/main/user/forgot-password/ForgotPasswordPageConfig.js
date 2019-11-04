import React from 'react';
import {authRoles} from 'app/auth';

export const ForgotPasswordPageConfig = {
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
            path     : '/forgot-password',
            exact: true,
            component: React.lazy(() => import('./ForgotPasswordPage'))
        }
    ]
};
