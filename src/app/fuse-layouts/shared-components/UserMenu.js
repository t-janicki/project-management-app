import React, {useState} from 'react';
import {Avatar, Button, Icon, ListItemIcon, ListItemText, Popover, MenuItem, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../../../app/auth/store/actions';
import {Link} from 'react-router-dom';

function UserMenu(props) {
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);

    const [userMenu, setUserMenu] = useState(null);

    const userMenuClick = event => {
        setUserMenu(event.currentTarget);
    };

    const userMenuClose = () => {
        setUserMenu(null);
    };

    return (
        <React.Fragment>

            <Button className="h-64" onClick={userMenuClick}>

                <Avatar className="" alt="user photo" src={user.userInfo.avatarUrl}/>

                <div className="hidden md:flex flex-col ml-12 items-start">
                    <Typography component="span" className="normal-case font-600 flex">
                        {user.userInfo.name} {user.userInfo.lastName}
                    </Typography>
                    <Typography className="text-10 ">
                        {user.userInfo.email.toLowerCase()}
                    </Typography>
                </div>

                <Icon className="text-16 ml-12 hidden sm:flex" variant="action">keyboard_arrow_down</Icon>
            </Button>

            <Popover
                open={Boolean(userMenu)}
                anchorEl={userMenu}
                onClose={userMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                classes={{
                    paper: "py-8"
                }}
            >
                <React.Fragment>

                    <MenuItem component={Link} to="/profile" onClick={userMenuClose}>
                        <ListItemIcon className="min-w-40">
                            <Icon>account_circle</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="My Profile"/>
                    </MenuItem>
                    <MenuItem component={Link} to="/settings" onClick={userMenuClose}>
                        <ListItemIcon className="min-w-40">
                            <Icon>settings</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="Settings"/>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            dispatch(authActions.logoutUser());
                            userMenuClose();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>exit_to_app</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="Logout"/>
                    </MenuItem>
                </React.Fragment>

            </Popover>
        </React.Fragment>
    );
}

export default UserMenu;
