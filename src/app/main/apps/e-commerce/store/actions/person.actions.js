import axios from 'axios';
import {GET_PERSON_API} from "../../../../../apiURL";

export const GET_PERSON = '[E-COMMERCE APP] GET CUSTOMER';

export function getPerson(params) {

    const {personId} = params;

    const request = axios.get(GET_PERSON_API + personId, {params});

    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: GET_PERSON,
                payload: response.data
            })
        });
}
