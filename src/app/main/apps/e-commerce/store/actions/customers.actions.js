import axios from 'axios';
import {
    DELETE_ALL_CUSTOMERS_API,
    DELETE_CUSTOMER_API,
    GET_CUSTOMERS_API,
    REGISTER_CUSTOMER_API,
    UPDATE_CUSTOMER_API
} from '../../../../../apiURL';
import {showMessage} from "../../../../../store/actions/fuse";

export const GET_CUSTOMERS = '[E-COMMERCE APP] GET CUSTOMERS';
export const SET_SEARCH_TEXT_CUSTOMER = '[E-COMMERCE APP] SET SEARCH TEXT CUSTOMER';
export const TOGGLE_IN_SELECTED_CUSTOMERS = '[E-COMMERCE APP] TOGGLE IN SELECTED CUSTOMERS';
export const SELECT_ALL_CUSTOMERS = '[E-COMMERCE APP] SELECT ALL CUSTOMERS';
export const DESELECT_ALL_CUSTOMERS = '[E-COMMERCE APP] DESELECT ALL CUSTOMERS';
export const OPEN_NEW_CUSTOMER_DIALOG = '[E-COMMERCE APP] OPEN NEW CUSTOMER DIALOG';
export const CLOSE_NEW_CUSTOMER_DIALOG = '[E-COMMERCE APP] CLOSE NEW CUSTOMER DIALOG';
export const OPEN_EDIT_CUSTOMER_DIALOG = '[E-COMMERCE APP] OPEN EDIT CUSTOMER DIALOG';
export const CLOSE_EDIT_CUSTOMER_DIALOG = '[E-COMMERCE APP] CLOSE EDIT CUSTOMER DIALOG';
export const ADD_CUSTOMER = '[E-COMMERCE APP] ADD CUSTOMER';
export const UPDATE_CUSTOMER = '[E-COMMERCE APP] UPDATE CUSTOMER';
export const REMOVE_CUSTOMER = '[E-COMMERCE APP] REMOVE CUSTOMER';
export const REMOVE_CUSTOMERS = '[E-COMMERCE APP] REMOVE CUSTOMERS';

export function getCustomers(routeParams) {

    const request = axios.get(GET_CUSTOMERS_API, {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_CUSTOMERS,
                payload: response.data,
                routeParams
            })
        );
}

export function setSearchTextCustomer(event) {
    return {
        type: SET_SEARCH_TEXT_CUSTOMER,
        searchText: event.target.value
    }
}

export function toggleInSelectedCustomers(customerId) {
    return {
        type: TOGGLE_IN_SELECTED_CUSTOMERS,
        customerId
    }
}

export function selectAllCustomers() {
    return {
        type: SELECT_ALL_CUSTOMERS
    }
}

export function deSelectAllCustomers() {
    return {
        type: DESELECT_ALL_CUSTOMERS
    }
}

export function openNewCustomerDialog() {
    return {
        type: OPEN_NEW_CUSTOMER_DIALOG
    }
}

export function closeNewCustomerDialog() {
    return {
        type: CLOSE_NEW_CUSTOMER_DIALOG
    }
}

export function openEditCustomerDialog(data) {
    return {
        type: OPEN_EDIT_CUSTOMER_DIALOG,
        data
    }
}

export function closeEditCustomerDialog() {
    return {
        type: CLOSE_EDIT_CUSTOMER_DIALOG
    }
}

export function addCustomer({name, lastName, email, phone, streetAndNumber, postCode, city, country}) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.customers;

        return new Promise((resolve, reject) => {
            axios.post(REGISTER_CUSTOMER_API, {
                name, lastName, email, phone, streetAndNumber, postCode, city, country
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: ADD_CUSTOMER
                        });
                        dispatch(getCustomers(routeParams));

                        dispatch(showMessage({
                            message: "Customer Registered",
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'success'
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
    };
}

export function updateCustomer({id, name, lastName, email, phone, streetAndNumber, postCode, city, country}) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.customers;

        return new Promise((resolve, reject) => {
            axios.put(UPDATE_CUSTOMER_API, {
                id, name, lastName, email, phone, streetAndNumber, postCode, city, country
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: UPDATE_CUSTOMER
                        });
                        dispatch(getCustomers(routeParams));

                        dispatch(showMessage({
                            message: "Customer Updated",
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
                });
        })
    };
}

export function removeCustomer(customerId) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.customers;

        const request = axios.delete(DELETE_CUSTOMER_API + customerId, {
            customerId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_CUSTOMER
                })
            ]).then(() => dispatch(getCustomers(routeParams)))
                .then(() => {
                    dispatch(showMessage({
                        message: "Customer deleted",
                        autoHideDuration: 3000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'error'
                    }))
                })
        )
    }
}

export function removeCustomers(customersIds) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.customers;

        const request = axios.delete(DELETE_ALL_CUSTOMERS_API + customersIds, {
            customersIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_CUSTOMERS
                }),
                dispatch({
                    type: DESELECT_ALL_CUSTOMERS
                })
            ]).then(() => dispatch(getCustomers(routeParams)))
                .then(() => {
                    dispatch(showMessage({
                        message: "Customers deleted",
                        autoHideDuration: 3000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'error'
                    }))
                })
        )
    }
}
