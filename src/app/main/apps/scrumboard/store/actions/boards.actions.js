import axios from 'axios';
import history from '@history';
import {BOARD_API} from "../../../../../apiURL";

export const GET_BOARDS = '[SCRUMBOARD APP] GET BOARDS';
export const RESET_BOARDS = '[SCRUMBOARD APP] RESET BOARDS';
export const NEW_BOARD = '[SCRUMBOARD APP] NEW BOARD';


export function resetBoards() {
    return {
        type: RESET_BOARDS
    }
}

export function getBoards() {
    const request = axios.get(BOARD_API);
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

export function newBoard() {
    const request = axios.post(BOARD_API);
    return (dispatch) =>
        request.then((response) => {
                const board = response.data;
                history.push({
                    pathname: '/apps/boards/personal/' + board.id + '/' + board.uri
                });
                return dispatch({
                    type: NEW_BOARD,
                    board
                })
            }
        );
}
