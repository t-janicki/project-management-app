import axios from 'axios';
import {getDailyOrdersList} from "./daily.orders.actions";

export const GET_ORDERS = '[E-COMMERCE APP] GET ORDERS';
export const SET_SEARCH_TEXT_ORDERS = '[E-COMMERCE APP] SET SEARCH TEXT ORDERS';
export const TOGGLE_IN_SELECTED_ORDERS = '[E-COMMERCE APP] TOGGLE IN SELECTED ORDERS';
export const SELECT_ALL_ORDERS = '[E-COMMERCE APP] SELECT ALL ORDERS';
export const DESELECT_ALL_ORDERS = '[E-COMMERCE APP] DESELECT ALL ORDERS';
export const OPEN_NEW_ORDER_DIALOG = '[E-COMMERCE APP] OPEN NEW ORDER DIALOG';
export const CLOSE_NEW_ORDER_DIALOG = '[E-COMMERCE APP] CLOSE NEW ORDER DIALOG';
export const OPEN_EDIT_ORDER_DIALOG = '[E-COMMERCE APP] OPEN EDIT ORDER DIALOG';
export const CLOSE_EDIT_ORDER_DIALOG = '[E-COMMERCE APP] CLOSE EDIT ORDER DIALOG';
export const ADD_ORDER = '[E-COMMERCE APP] ADD ORDER';
export const UPDATE_ORDER = '[E-COMMERCE APP] UPDATE ORDER';
export const REMOVE_ORDER = '[E-COMMERCE APP] REMOVE ORDER';
export const REMOVE_ORDERS = '[E-COMMERCE APP] REMOVE ORDERS';
export const ADD_DAILY_ORDER = '[E-COMMERCE APP] ADD DAILY ORDER';
export const ADD_DAILY_ORDERS = '[E-COMMERCE APP] ADD DAILY ORDERS';
export const SET_ORDERS_DAILY = '[E-COMMERCE APP] SET ORDERS DAILY ';


export function getOrders(routeParams) {
    const request = axios.get('/api/orders', {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_ORDERS,
                payload: response.data,
                routeParams
            })
        );
}

export function setSearchText(event) {
    return {
        type: SET_SEARCH_TEXT_ORDERS,
        searchText: event.target.value
    }
}

export function toggleInSelectedOrders(orderId) {
    return {
        type: TOGGLE_IN_SELECTED_ORDERS,
        orderId
    }
}

export function selectAllOrders() {
    return {
        type: SELECT_ALL_ORDERS
    }
}

export function deSelectAllOrders() {
    return {
        type: DESELECT_ALL_ORDERS
    }
}

export function openNewOrderDialog() {
    return {
        type: OPEN_NEW_ORDER_DIALOG
    }
}

export function closeNewOrderDialog() {
    return {
        type: CLOSE_NEW_ORDER_DIALOG
    }
}

export function openEditOrderDialog(data) {
    return {
        type: OPEN_EDIT_ORDER_DIALOG,
        data
    }
}

export function closeEditOrderDialog() {
    return {
        type: CLOSE_EDIT_ORDER_DIALOG
    }
}

export function addOrder(newOrder) {

    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.orders;

        const request = axios.post('/api/orders/add-order', {
            newOrder
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_ORDER
                })
            ]).then(() => dispatch(getOrders(routeParams)))
        );
    };
}

export function updateOrder(order) {

    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.orders;

        const request = axios.post('/api/orders/update-order', {
            order
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: UPDATE_ORDER
                })
            ]).then(() => dispatch(getOrders(routeParams)))
        );
    };
}

export function removeOrder(orderId) {
    return (dispatch, getState) => {
        const {routeParams} = getState().eCommerceApp.orders;

        const request = axios.post('/api/orders/remove-order', {
            orderId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_ORDER
                })
            ]).then(() => dispatch(getOrders(routeParams)))
        );
    };
}

export function removeOrders(orderIds) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.orders;

        const request = axios.post('/api/orders/remove-orders', {
            orderIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_ORDERS
                }),
                dispatch({
                    type: DESELECT_ALL_ORDERS
                })
            ]).then(() => dispatch(getOrders(routeParams)))
        );
    };
}

export function addDailyOrder(orderId) {
    return (dispatch, getState) => {
        const {routeParams} = getState().eCommerceApp.orders;

        const request = axios.post('/api/orders/add-to-daily-order', {
            orderId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_DAILY_ORDER
                }),
                dispatch(getDailyOrdersList())
            ]).then(() => dispatch(getOrders(routeParams)))
        );
    };
}

export function addDailyOrders(orderIds) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.orders;

        const request = axios.post('/api/orders/add-to-daily-orders', {
            orderIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_DAILY_ORDERS
                }),
                dispatch({
                    type: DESELECT_ALL_ORDERS
                }),
                dispatch(getDailyOrdersList())
            ]).then(() => dispatch(getOrders(routeParams)))
        );
    };
}

export function setOrdersDaily(orderIds) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.orders;

        const request = axios.post('/api/orders/set-daily-orders', {
            orderIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: SET_ORDERS_DAILY
                }),
                dispatch({
                    type: DESELECT_ALL_ORDERS
                }),
                dispatch(getDailyOrdersList())
            ]).then(() => dispatch(getOrders(routeParams)))
        );
    };
}

export function unSetDailyOrders(orderIds) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.orders;

        const request = axios.post('/api/orders/set-daily-un-orders', {
            orderIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: SET_ORDERS_DAILY
                }),
                dispatch({
                    type: DESELECT_ALL_ORDERS
                }),
                dispatch(getDailyOrdersList())
            ]).then(() => dispatch(getOrders(routeParams)))
        );
    };
}
