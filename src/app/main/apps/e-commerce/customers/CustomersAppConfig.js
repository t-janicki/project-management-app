import React from 'react';
import {Redirect} from 'react-router-dom';

export const CustomersAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/customer/:customerId',
            component: React.lazy(() => import('./Customer'))
        },
        {
            path     : '/customers',
            component: React.lazy(() => import('./Customers'))
        },
        {
            path     : '/customers',
            component: () => <Redirect to="/apps/customers"/>
        }
    ]
};
