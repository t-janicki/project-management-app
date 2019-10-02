import {authRoles} from 'app/auth';
import StaffRoleExample from './StaffRoleExample';

export const StaffRoleExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.manager,//['admin','manager']
    routes  : [
        {
            path     : '/auth/manager-role-example',
            component: StaffRoleExample
        }
    ]
};
