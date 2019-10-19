import React from 'react';
import {Redirect} from 'react-router-dom';

export const ScrumboardAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/boards/personal/:boardId/:uri?',
            component: React.lazy(() => import('./board/PersonalBoard'))
        },
        {
            path     : '/apps/boards/personal',
            exact    : true,
            component: React.lazy(() => import('./boards/PersonalBoards'))
        },
        {
            path     : '/apps/boards/teams',
            exact    : true,
            component: React.lazy(() => import('./teams/Teams'))
        },
        {
            path     : '/apps/boards/teams/:teamId',
            exact    : true,
            component: React.lazy(() => import('./teams/TeamBoards'))
        },
        {
            path     : '/apps/boards/teams/:teamId/:boardId/:uri',
            exact    : true,
            component: React.lazy(() => import('./teams/TeamBoard'))
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
