import axios from 'axios';
import {BOARD_API} from "../../../../../apiURL";

export const GET_BOARDS = '[SCRUMBOARD APP] GET BOARDS';
export const RESET_BOARDS = '[SCRUMBOARD APP] RESET BOARDS';

export function resetBoards() {
    return {
        type: RESET_BOARDS
    }
}

export function getBoards() {
    const request = axios.get(BOARD_API + '?boardType=TEAM');
    return (dispatch) =>
        request.then((response) => {
            console.log(response)
                dispatch({
                    type: GET_BOARDS,
                    payload: response.data
                })
            }
        );
}
