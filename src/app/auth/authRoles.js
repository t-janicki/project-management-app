/**
 * Authorization Roles
 */
const authRoles = {
    admin    : ['Admin'],
    manager  : ['Admin', 'Manager'],
    user     : ['Admin', 'Manager', 'Employee', 'User'],
    onlyGuest: []
};

export default authRoles;
