import React from 'react';
import {Redirect} from 'react-router-dom';

export const OrdersAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/orders/:orderId/',
            exact    : true,
            component: React.lazy(() => import('./order/Order'))
        },
        {
            path     : '/orders/',
            exact    : true,
            component: React.lazy(() => import('./Orders'))
        },
        {
            path     : '/order/new/',
            exact    : true,
            component: React.lazy(() => import('./new/NewOrder'))
        },
        {
            path     : '/orders/',
            component: () => <Redirect to="/orders"/>
        }
    ]
};
