import React from 'react';
import {Redirect} from 'react-router-dom';

export const ScrumboardAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/personal/boards/:boardId/:uri?',
            component: React.lazy(() => import('./board/PersonalBoard'))
        },
        {
            path     : '/personal/boards',
            exact    : true,
            component: React.lazy(() => import('./boards/PersonalBoards'))
        },
        {
            path     : '/teams',
            exact    : true,
            component: React.lazy(() => import('./teams/Teams'))
        },
        {
            path     : '/teams/:teamId/boards',
            exact    : true,
            component: React.lazy(() => import('./teams/TeamBoards'))
        },
        {
            path     : '/teams/:teamId/boards/:boardId/:uri',
            exact    : true,
            component: React.lazy(() => import('./teams/TeamBoard'))
        },
        {
            path     : '/boards',
            component: React.lazy(() => import('./boards/Boards'))
        },
        {
            path     : '/board',
            component: () => <Redirect to="/boards"/>
        }
    ]
};
