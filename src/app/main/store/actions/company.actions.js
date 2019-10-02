import axios from 'axios';
import {GET_COMPANY, UPDATE_COMPANY} from '../../../apiURL';
import {showMessage} from '../../../store/actions/fuse';

export const GET_COMPANY_INFO = '[COMPANY] GET COMPANY INFO';
export const UPDATE_COMPANY_INFO = '[COMPANY] UPDATE COMPANY INFO';
export const COMPANY_OPEN_EDIT_DIALOG = '[COMPANY] OPEN EDIT DIALOG';
export const COMPANY_CLOSE_EDIT_DIALOG = '[COMPANY] CLOSE EDIT DIALOG';

export function getCompanyInfo(params) {
    return(dispatch) => {

        return new Promise((resolve, reject) => {
            axios.get(GET_COMPANY, {params})
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: GET_COMPANY_INFO,
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

export function updateCompanyInfo({id, name, phone, streetAndNumber, postCode, city, country}) {
    return (dispatch, getState) => {

        const {routeParams} = getState().auth.user;

        return new Promise((resolve, reject) => {
            axios.put(UPDATE_COMPANY, {
                id, name, phone, streetAndNumber, postCode, city, country
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: UPDATE_COMPANY_INFO
                        });

                        dispatch(getCompanyInfo(routeParams));

                        dispatch(showMessage({
                            message: "Company Updated",
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

export function openCompanyEditDialog(data) {
    return {
        type: COMPANY_OPEN_EDIT_DIALOG,
        data
    }
}

export function closeCompanyEditDialog() {
    return {
        type: COMPANY_CLOSE_EDIT_DIALOG
    }
}
