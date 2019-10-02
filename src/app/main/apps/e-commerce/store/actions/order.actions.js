import axios from 'axios';

export const GET_ORDER = '[E-COMMERCE APP] GET ORDER';

export function getOrder(params) {
    const request = axios.get('/api/order', {params});

    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_ORDER,
                payload: response.data
            })
        });
}
