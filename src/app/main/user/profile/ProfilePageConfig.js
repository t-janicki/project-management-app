import React from 'react';

export const ProfilePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/profile',
            exact: true,
            component: React.lazy(() => import('./Account'))
        },
        {
            path     : '/settings',
            exact: true,
            component: React.lazy(() => import('./ProfileSettings'))
        }
    ]
};
