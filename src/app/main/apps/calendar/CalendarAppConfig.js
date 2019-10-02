import React from 'react';
import authRoles from './../../../auth/authRoles';

export const CalendarAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.manager,//['admin']
    routes  : [
        {
            path     : '/apps/calendar',
            component: React.lazy(() => import('./CalendarApp'))
        }
    ]
};
