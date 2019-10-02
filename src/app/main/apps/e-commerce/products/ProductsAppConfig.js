import React from 'react';
import {Redirect} from 'react-router-dom';

export const ProductsAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/product/:productId/',
            exact    : true,
            component: React.lazy(() => import('./Product'))
        },
        {
            path     : '/products',
            component: React.lazy(() => import('./Products'))
        },
        {
            path     : '/products',
            component: () => <Redirect to="/apps/products"/>
        }
    ]
};
