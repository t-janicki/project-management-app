import React from 'react';
import {authRoles} from 'app/auth';

export const ResetPasswordPageConfig = {
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
            path     : '/reset-password',
            exact: true,
            component: React.lazy(() => import('./ResetPasswordPage'))
        }
    ]
};
