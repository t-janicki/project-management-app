import axios from 'axios';
import {
    REGISTER_PRODUCT_API,
    GET_PRODUCTS_API,
    UPDATE_PRODUCT_API,
    DELETE_PRODUCT_API,
    DELETE_ALL_PRODUCTS_API
} from '../../../../../apiURL';
import {showMessage} from "../../../../../store/actions/fuse";

export const GET_PRODUCTS = '[E-COMMERCE APP] GET PRODUCTS';
export const SET_SEARCH_TEXT_PRODUCT = '[E-COMMERCE APP] SET SEARCH TEXT PRODUCT';
export const TOGGLE_IN_SELECTED_PRODUCTS = '[E-COMMERCE APP] TOGGLE IN SELECTED PRODUCTS';
export const SELECT_ALL_PRODUCTS = '[E-COMMERCE APP] SELECT ALL PRODUCTS';
export const DESELECT_ALL_PRODUCTS = '[E-COMMERCE APP] DESELECT ALL PRODUCTS';
export const OPEN_NEW_PRODUCT_DIALOG = '[E-COMMERCE APP] OPEN NEW PRODUCT DIALOG';
export const CLOSE_NEW_PRODUCT_DIALOG = '[E-COMMERCE APP] CLOSE NEW PRODUCT DIALOG';
export const OPEN_EDIT_PRODUCT_DIALOG = '[E-COMMERCE APP] OPEN EDIT PRODUCT DIALOG';
export const CLOSE_EDIT_PRODUCT_DIALOG = '[E-COMMERCE APP] CLOSE EDIT PRODUCT DIALOG';
export const ADD_PRODUCT = '[E-COMMERCE APP] ADD PRODUCT';
export const UPDATE_PRODUCT = '[E-COMMERCE APP] UPDATE PRODUCT';
export const REMOVE_PRODUCT = '[E-COMMERCE APP] REMOVE PRODUCT';
export const REMOVE_PRODUCTS = '[E-COMMERCE APP] REMOVE PRODUCTS';

export function getProducts(routeParams) {

    const request = axios.get(GET_PRODUCTS_API, {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_PRODUCTS,
                payload: response.data,
                routeParams
            })
        );
}

export function setSearchTextProduct(event) {
    return {
        type: SET_SEARCH_TEXT_PRODUCT,
        searchText: event.target.value
    }
}

export function toggleInSelectedProducts(productId) {
    return {
        type: TOGGLE_IN_SELECTED_PRODUCTS,
        productId
    }
}

export function selectAllProducts() {
    return {
        type: SELECT_ALL_PRODUCTS
    }
}

export function deSelectAllProducts() {
    return {
        type: DESELECT_ALL_PRODUCTS
    }
}

export function openNewProductDialog() {
    return {
        type: OPEN_NEW_PRODUCT_DIALOG
    }
}

export function closeNewProductDialog() {
    return {
        type: CLOSE_NEW_PRODUCT_DIALOG
    }
}

export function openEditProductDialog(data) {
    return {
        type: OPEN_EDIT_PRODUCT_DIALOG,
        data
    }
}

export function closeEditProductDialog() {
    return {
        type: CLOSE_EDIT_PRODUCT_DIALOG
    }
}

export function addProduct({name, description, priceTaxIncl, sku, quantity, width, height, depth, weight, extraShippingFee}) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.products;

        return new Promise((resolve, reject) => {
            axios.post(REGISTER_PRODUCT_API, {
                name, description, priceTaxIncl,
                sku, quantity,
                width, height, depth, weight, extraShippingFee,
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: ADD_PRODUCT
                        });
                        dispatch(getProducts(routeParams));

                        dispatch(showMessage({
                            message: "Product Registered",
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

export function updateProduct({id, name, description, priceTaxIncl, sku, quantity, width, height, depth, weight, extraShippingFee}) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.products;

        return new Promise((resolve, reject) => {
            axios.put(UPDATE_PRODUCT_API, {
                id, name, description, priceTaxIncl,
                sku, quantity,
                width, height, depth, weight, extraShippingFee,
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: UPDATE_PRODUCT
                        });
                        dispatch(getProducts(routeParams));

                        dispatch(showMessage({
                            message: "Product Updated",
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

export function removeProduct(productId) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.products;

        const request = axios.delete(DELETE_PRODUCT_API + productId, {
            productId
        });
        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_PRODUCT
                })
            ]).then(() => {
                dispatch(getProducts(routeParams));

                dispatch(showMessage({
                    message: "Product Deleted",
                    autoHideDuration: 2000,
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

export function removeProducts(productIds) {
    return (dispatch, getState) => {
        const {routeParams} = getState().eCommerceApp.products;

        const request = axios.delete(DELETE_ALL_PRODUCTS_API + productIds, {
            productIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_PRODUCTS
                }),
                dispatch({
                    type: DESELECT_ALL_PRODUCTS
                })
            ]).then(() => {
                dispatch(getProducts(routeParams));

                dispatch(showMessage({
                    message: "Products Deleted",
                    autoHideDuration: 2000,
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
