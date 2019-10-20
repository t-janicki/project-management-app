import axios from 'axios';
import {FuseUtils} from '@fuse';
import history from '@history';
import _ from '@lodash';
import {showMessage} from 'app/store/actions/fuse';
import reorder, {reorderQuoteMap} from './reorder';
import * as Actions from './index';
import {BOARD_API} from "../../../../../apiURL";

export const GET_BOARD = '[SCRUMBOARD APP] GET BOARD';
export const DELETE_BOARD = '[SCRUMBOARD APP] DELETE BOARD';
export const COPY_BOARD = '[SCRUMBOARD APP] COPY BOARD';
export const RENAME_BOARD = '[SCRUMBOARD APP] RENAME BOARD';
export const CHANGE_BOARD_SETTINGS = '[SCRUMBOARD APP] CHANGE BOARD SETTINGS';
export const RESET_BOARD = '[SCRUMBOARD APP] RESET BOARD';
export const ORDER_LIST = '[SCRUMBOARD APP] ORDER LIST';
export const ORDER_CARD = '[SCRUMBOARD APP] ORDER CARD';
export const ADD_CARD = '[SCRUMBOARD APP] ADD CARD';
export const ADD_LIST = '[SCRUMBOARD APP] ADD LIST';
export const ADD_LABEL = '[SCRUMBOARD APP] ADD LABEL';
export const RENAME_LIST = '[SCRUMBOARD APP] RENAME LIST';
export const REMOVE_LIST = '[SCRUMBOARD APP] REMOVE LIST';
export const OPEN_NEW_BOARD_DIALOG = '[SCRUMBOARD APP] OPEN NEW BOARD DIALOG';
export const CLOSE_NEW_BOARD_DIALOG = '[SCRUMBOARD APP] CLOSE NEW BOARD DIALOG';

export function openNewBoardDialog(data) {
    return {
        type: OPEN_NEW_BOARD_DIALOG,
        payload: data
    }
}

export function closeNewBoardDialog() {
    return{
        type: CLOSE_NEW_BOARD_DIALOG
    }
}

export function getBoard(params) {

    const {boardId} = params;
    const request = axios.get(`${BOARD_API}/${boardId}`);

    return (dispatch) =>
        request.then(
            (response) =>
                dispatch({
                    type: GET_BOARD,
                    payload: response.data
                }),
            (error) => {
                dispatch(showMessage({
                    message: error.response.data,
                    autoHideDuration: 2000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                }));
                history.push({
                    pathname: '/apps/boards'
                });
            });
}

export function resetBoard() {
    return {
        type: RESET_BOARD
    };
}

export function reorderList(result) {
    return (dispatch, getState) => {

        let lists = getState().scrumboardApp.board.data.lists;

        lists = reorder(
            lists,
            result.source.index,
            result.destination.index
        );

        // lists = ordered;
        const request = axios.put(BOARD_API + `/lists/reorder`, {
                lists
            }
        );

        request.then(() => {
            dispatch(showMessage({
                message: 'List Order Saved',
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }));
        });

        return dispatch({
            type: ORDER_LIST,
            payload: lists
        });
    }
}

export function reorderCard(result) {
    return (dispatch, getState) => {

        const board = getState().scrumboardApp.board.data;
        let {lists} = board;

        const ordered = reorderQuoteMap(
            lists,
            result.source,
            result.destination
        );

        const id = board.id;
        lists = ordered;
        const request = axios.put(`${BOARD_API}/cards/reorder`,
            {
                id,
                lists
            }
        );

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.data) {
                    resolve(response.data);

                    dispatch(showMessage({
                        message: 'Card Order Saved',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right'
                        }
                    }));

                    return dispatch({
                        type: ORDER_CARD,
                        payload: ordered
                    });
                }
                reject(response.data)
            });

        })
    }
}

export function newCard(boardId, listId, cardTitle) {
    return (dispatch) => {
        // const {routeParams} = getState().scrumboardApp.board;
        const name = cardTitle;

        const request = axios.post(`${BOARD_API}/${boardId}/list/${listId}`, {
            name
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                resolve(response.data);
                return dispatch({
                    type: ADD_CARD,
                    payload: response.data
                });
            })
        })
    }
}

export function newList(boardId, listTitle) {

    return (dispatch) => {
        const name = listTitle;
        const request = axios.post(BOARD_API + `/${boardId}/newList`, {
            name
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                resolve(response.data);
                return dispatch({
                    type: ADD_LIST,
                    payload: response.data
                })
            })
        })
    }
}

export function renameList(boardId, listId, listTitle) {

    const name = listTitle;
    const id = listId;

    const request = axios.put(`${BOARD_API}/${boardId}/list`,
        {
            name,
            id
        }
    );

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: RENAME_LIST,
                listId,
                listTitle
            })
        );
}

export function removeList(boardId, listId) {
    const request = axios.delete(`${BOARD_API}/${boardId}/list/${listId}`);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: REMOVE_LIST,
                listId
            })
        );
}

export function changeBoardSettings(newSettings) {
    return (dispatch, getState) => {

        const board = getState().scrumboardApp.board.data;

        const settings = _.merge(board.settings, newSettings);
        const id = board.id;
        const request = axios.put(`${BOARD_API}/settings`,
            {
                id,
                settings
            }
        );

        return request.then((response) =>
            dispatch({
                type: CHANGE_BOARD_SETTINGS,
                payload: response.data
            })
        );
    }
}

export function deleteBoard(boardId) {
    const request = axios.delete(`${BOARD_API}/${boardId}`);

    return (dispatch) =>
        request.then((response) => {

            history.push({
                pathname: '/apps/boards'
            });

            return dispatch({
                type: DELETE_BOARD
            });
        })
}

export function copyBoard(board) {
    const newBoard = _.merge(board, {
        id: FuseUtils.generateGUID(),
        name: board.name + ' (Copied)',
        uri: board.uri + '-copied'
    });
    return (dispatch) => {
        dispatch(Actions.newBoard());
        return {type: COPY_BOARD};
    }
}

export function renameBoard(boardId, boardTitle) {

    const id = boardId;
    const name = boardTitle;

    const request = axios.put(`${BOARD_API}`, {
            id, name,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: RENAME_BOARD,
                boardTitle
            })
        );
}
