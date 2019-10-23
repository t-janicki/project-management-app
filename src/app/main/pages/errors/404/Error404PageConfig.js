import React from 'react';

export const Error404PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/not-found',
            component: React.lazy(() => import('./Error404Page'))
        }
    ]
};
