import history from '@history';
import {setDefaultSettings, setInitialSettings} from 'app/store/actions/fuse';
import _ from '@lodash';
import store from 'app/store';
import * as Actions from 'app/store/actions';
import jwtService from 'app/services/jwtService';

export const SET_USER_DATA = '[USER] SET DATA';
export const REMOVE_USER_DATA = '[USER] REMOVE DATA';
export const USER_LOGGED_OUT = '[USER] LOGGED OUT';

/**
 * Set User Data
 */
export function setUserData(userResponse) {
    return (dispatch) => {
        /*
        Set User Settings
         */
        dispatch(setDefaultSettings(userResponse.settings));
        /*
        Set User Data
         */
        dispatch({
            type: SET_USER_DATA,
            payload: userResponse
        });
    }
}

/**
 * Update User Settings
 */
export function updateUserSettings(settings) {
    return (dispatch, getState) => {
        const oldUser = getState().auth.user;
        const user = _.merge({}, oldUser, {settings});

        updateUserData(user);

        return dispatch(setUserData(user));
    }
}

/**
 * Update User Shortcuts
 */
export function updateUserShortcuts(shortcuts) {
    return (dispatch, getState) => {
        const user = getState().auth.user;
        const newUser = {
            ...user,
            shortcuts
        };

        updateUserData(newUser);

        return dispatch(setUserData(newUser));
    }
}

/**
 * Remove User Data
 */
export function removeUserData() {
    return {
        type: REMOVE_USER_DATA
    }
}

/**
 * Logout
 */
export function logoutUser() {

    return (dispatch, getState) => {

        const user = getState().auth.user;

        if (!user.userInfo.role || user.userInfo.role.length === 0)// is guest
        {
            return null;
        }

        history.push({
            pathname: '/login'
        });

        jwtService.logout();

        dispatch(setInitialSettings());

        dispatch({
            type: USER_LOGGED_OUT
        })
    }
}

/**
 * Update User Data
 */
function updateUserData(user) {
    if (!user.userInfo.role || user.userInfo.role.length === 0)// is guest
    {
        return;
    }
    jwtService.updateUserData(user)
        .then(() => {
            store.dispatch(Actions.showMessage({message: "User data saved."}));

        })
        .catch(error => {
            store.dispatch(Actions.showMessage({message: error.message}));
        });
}
