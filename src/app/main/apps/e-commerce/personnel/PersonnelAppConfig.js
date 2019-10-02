import React from 'react';
import {Redirect} from 'react-router-dom';

export const PersonnelAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/person/:personId',
            component: React.lazy(() => import('./person/Person'))
        },
        {
            path     : '/personnel',
            component: React.lazy(() => import('./Personnel'))
        },
        {
            path     : '/personnel',
            component: () => <Redirect to="/apps/personnel"/>
        }
    ]
};
