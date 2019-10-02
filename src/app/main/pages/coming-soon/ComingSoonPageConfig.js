import React from 'react';

export const ComingSoonPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/coming-soon',
            component: React.lazy(() => import('./ComingSoonPage'))
        }
    ]
};
