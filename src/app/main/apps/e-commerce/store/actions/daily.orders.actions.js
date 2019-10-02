import axios from 'axios';

export const GET_DAILY_LIST = '[E-COMMERCE APP] GET DAILY LIST';

export function getDailyOrdersList() {
    const request = axios.get('/api/orders/daily');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_DAILY_LIST,
                payload: response.data
            })
        );
}
