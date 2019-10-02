import axios from 'axios';
import {GET_CUSTOMER_API} from "../../../../../apiURL";

export const GET_CUSTOMER = '[E-COMMERCE APP] GET CUSTOMER';

export function getCustomer(params) {

    const {customerId} = params;

    const request = axios.get(GET_CUSTOMER_API + customerId, {params});

    return (dispatch) =>
        request.then((response) => {
                dispatch({
                    type   : GET_CUSTOMER,
                    payload: response.data
                })
            });
}
