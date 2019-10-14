import React from 'react';
import {Redirect} from 'react-router-dom';

export const ScrumboardAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/boards/:boardId/:uri?',
            component: React.lazy(() => import('./board/Board'))
        },
        {
            path     : '/apps/boards',
            component: React.lazy(() => import('./boards/Boards'))
        },
        {
            path     : '/apps/board',
            component: () => <Redirect to="/apps/boards"/>
        }
    ]
};
