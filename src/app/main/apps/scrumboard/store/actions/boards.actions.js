import axios from 'axios';
import history from '@history';
import {CREATE_EMPTY_BOARD, GET_BOARDS_API} from "../../../../../apiURL";

export const GET_BOARDS = '[SCRUMBOARD APP] GET BOARDS';
export const RESET_BOARDS = '[SCRUMBOARD APP] RESET BOARDS';
export const NEW_BOARD = '[SCRUMBOARD APP] NEW BOARD';

export function getBoards()
{
    const request = axios.get(GET_BOARDS_API);
    // GET_BOARDS_API
    return (dispatch) =>
        request.then((response) =>
            {
                console.log(response)
                dispatch({
                    type   : GET_BOARDS,
                    payload: response.data
                })
            }
        );
}

export function resetBoards()
{
    return {
        type: RESET_BOARDS
    }
}

export function newBoard(board)
{
    const request = axios.post(CREATE_EMPTY_BOARD);
    console.log(board);
    return (dispatch) =>
        request.then((response) => {
                const board = response.data;
                history.push({
                    pathname: '/apps/scrumboard/boards/' + board.id + '/' + board.handle
                });
                return dispatch({
                    type: NEW_BOARD,
                    board
                })
            }
        );
}
