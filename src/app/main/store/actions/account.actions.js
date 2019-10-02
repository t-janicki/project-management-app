import axios from 'axios';
import {
    GET_USER_DATA,
    UPDATE_USER,
    NEW_PASSWORD_REQUEST
} from '../../../apiURL';
import {showMessage} from '../../../store/actions/fuse';
import history from '@history';

export const ACCOUNT_OPEN_EDIT_DIALOG = '[ACCOUNT] OPEN EDIT DIALOG';
export const ACCOUNT_CLOSE_EDIT_DIALOG = '[ACCOUNT] CLOSE EDIT DIALOG';
export const UPDATE_ACCOUNT_INFO = '[ACCOUNT] UPDATE ACCOUNT INFO';
export const GET_ACCOUNT_INFO = '[ACCOUNT] GET ACCOUNT INFO';
export const NEW_PASSWORD = '[ACCOUNT] NEW PASSWORD REQUEST';

export function getUserInfo(params) {
    return(dispatch) => {

        return new Promise((resolve, reject) => {
            axios.get(GET_USER_DATA, {params})
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: GET_ACCOUNT_INFO,
                            payload: response.data
                        });
                    }
                })
                .catch(error => {
                    if (error.response.data.message) {
                        dispatch(showMessage({
                            message: (error.response.data.message),
                            autoHideDuration: 3000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'error'
                        }))
                    }
                })
        })
    }
}

export function updateAccountInfo({id, name, email, phone, jobTitle, isActive}) {
    return (dispatch, getState) => {

        const {routeParams} = getState().auth.user;

        return new Promise((resolve, reject) => {
            axios.put(UPDATE_USER, {
                id, name, email, phone, jobTitle, isActive
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: UPDATE_ACCOUNT_INFO
                        });

                        dispatch(getUserInfo(routeParams));

                        dispatch(showMessage({
                            message: "Account Updated",
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'info'
                        }));
                    }
                })
                .catch(error => {
                    if (error.response.data.message) {
                        dispatch(showMessage({
                            message: (error.response.data.message),
                            autoHideDuration: 3000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'error'
                        }))
                    }
                })
        })
    }
}

export function newPasswordRequest({password, newPassword, confirmNewPassword}) {
    return (dispatch) => {

        // const {routeParams} = getState().auth.user;

        return new Promise((resolve, reject) => {
            axios.put(NEW_PASSWORD_REQUEST, {
                password, newPassword, confirmNewPassword
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: NEW_PASSWORD
                        });

                        resolve(response.data);
                        history.push('/login');

                        dispatch(showMessage({
                            message: "Password Updated",
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'info'
                        }));
                    }
                })
                .catch(error => {
                    if (error.response.data.message) {
                        dispatch(showMessage({
                            message: (error.response.data.message),
                            autoHideDuration: 3000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'error'
                        }))
                    }
                })
        })
    }
}


export function openAccountEditDialog(data) {
    return {
        type: ACCOUNT_OPEN_EDIT_DIALOG,
        data
    }
}

export function closeUserEditDialog() {
    return {
        type: ACCOUNT_CLOSE_EDIT_DIALOG
    }
}

