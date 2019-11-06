import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {appsConfigs} from '../../app/main/apps/appsConfigs';
import {pagesConfigs} from '../../app/main/pages/pagesConfigs';
import {authRoleExamplesConfigs} from '../../app/main/auth/authRoleExamplesConfigs';
import {UserInterfaceConfig} from '../../app/main/user-interface/UserInterfaceConfig';
import {DocumentationConfig} from '../../app/main/documentation/DocumentationConfig';
import {LoginConfig} from '../main/user/login/LoginConfig';
import {RegisterConfig} from '../main/user/register/RegisterConfig';
import {LogoutConfig} from '../main/user/logout/LogoutConfig';
import {CallbackConfig} from '../../app/main/callback/CallbackConfig';
import {ForgotPasswordPageConfig} from '../main/user/forgot-password/ForgotPasswordPageConfig';
import {ResetPasswordPageConfig} from '../main/user/reset-password/ResetPasswordPageConfig';

const routeConfigs = [
    ...appsConfigs,
    ...pagesConfigs,
    // ...authRoleExamplesConfigs,
    // UserInterfaceConfig,
    // DocumentationConfig,
    LogoutConfig,
    LoginConfig,
    RegisterConfig,
    ForgotPasswordPageConfig,
    ResetPasswordPageConfig,
    LogoutConfig,
    CallbackConfig
];

const routes = [
    //if you want to make whole app auth protected by default change defaultAuth for example:
    // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','manager','user']),
    // The individual route configs which has auth option won't be overridden.
    // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['Admin','Manager','Employee', 'User']),
    {
        path     : '/',
        exact    : true,
        // component: () => <Redirect to="/apps/dashboards/analytics"/>
        component: () => <Redirect to="/boards"/>
    },
    {
        component: () => <Redirect to="/not-found"/>
    }
];

export default routes;
