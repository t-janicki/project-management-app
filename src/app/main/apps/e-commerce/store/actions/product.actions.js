import axios from 'axios';
import {GET_PRODUCT_API} from '../../../../../apiURL';

export const GET_PRODUCT = '[E-COMMERCE APP] GET PRODUCT';

export function getProduct(params) {

    const {productId} = params;

    const request = axios.get(GET_PRODUCT_API + productId, {params}
        );

    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_PRODUCT,
                payload: response.data
            });
        });
}
