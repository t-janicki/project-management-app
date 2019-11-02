import axios from 'axios';
import {FuseUtils} from '@fuse';
import history from '@history';
import _ from '@lodash';
import {showMessage} from 'app/store/actions/fuse';
import reorder, {reorderQuoteMap} from './reorder';
import * as Actions from './index';
import {BOARD_API} from "../../../../../apiURL";
import {useDispatch} from "react-redux";

export const GET_BOARD = '[SCRUMBOARD APP] GET BOARD';
export const NEW_BOARD = '[SCRUMBOARD APP] NEW BOARD';
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
    return {
        type: CLOSE_NEW_BOARD_DIALOG
    }
}

export function newBoard({name, description, boardType, teams}) {
    console.log(name)
    console.log(description)
    console.log(boardType)
    console.log(teams)

    const teamId = teams;
    return (dispatch) => {
        const request = axios.post(`${BOARD_API}?teamId=${teamId}`, {
            name,
            boardType,
            description,
            headers: {
                'Content-Type': 'application/json'
            }

        });

        let board = {};

        return new Promise((resolve, reject) => {
            request.then((response) => {

                resolve(response.data);

                board = response.data;

                return dispatch({
                    type: NEW_BOARD,
                    payload: response.data
                });
            })
                .then(() => {
                    const uri = boardType === 'PERSONAL' ? `/personal/boards/${board.id}/${board.uri}` :
                        `/teams/${teamId}/boards/${board.id}/${board.uri}`;
                    history.push({
                        pathname: uri
                    });
                })
        })
    }
}

export function getBoard(params, boardType) {
    return (dispatch) => {

        const {boardId} = params;
        const request = axios.get(`${BOARD_API}/${boardId}?boardType=${boardType}`);

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    return dispatch({
                        type: GET_BOARD,
                        payload: response.data
                    })
                }
            })
                .catch(function (error) {
                    if (error.response.status === 404) {
                        history.push('/not-found')
                    }
                });
        })
    }
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
        const boardType = board.boardType;
        let {lists} = board;

        const ordered = reorderQuoteMap(
            lists,
            result.source,
            result.destination
        );

        const id = board.id;
        lists = ordered;
        const request = axios.put(`${BOARD_API}/cards/reorder?boardType=${boardType}`,
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
    return (dispatch, getState) => {
        const boardType = getState().scrumboardApp.board.data.boardType;

        const request = axios.post(`${BOARD_API}/${boardId}/list/${listId}?boardType=${boardType}`, {
            name: cardTitle
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
    return (dispatch, getState) => {

        const boardType = getState().scrumboardApp.board.data.boardType;

        const request = axios.post(BOARD_API + `/${boardId}/newList?boardType=${boardType}`, {
            name: listTitle
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
    return (dispatch, getState) => {

        const boardType = getState().scrumboardApp.board.data.boardType;

        const request = axios.put(`${BOARD_API}/${boardId}/list?boardType=${boardType}`,
            {
                id: listId,
                name: listTitle
            }
        );

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response);

                    return dispatch({
                        type: RENAME_LIST,
                        listId,
                        listTitle
                    })
                }
            })
        })
    }
}

export function removeList(boardId, listId) {
    return (dispatch, getState) => {
        const boardType = getState().scrumboardApp.board.data.boardType;

        const request = axios.delete(`${BOARD_API}/${boardId}/list/${listId}?boardType=${boardType}`);

        return new Promise((resolve, reject) => {
                request.then((response) => {
                    if (response.status === 200) {
                        resolve(response);

                        return dispatch({
                            type: REMOVE_LIST,
                            listId
                        })
                    }
                })
            }
        )
    }
}

export function changeBoardSettings(newSettings) {
    return (dispatch, getState) => {

        const board = getState().scrumboardApp.board.data;

        const boardType = board.boardType;

        const settings = _.merge(board.settings, newSettings);
        const id = board.id;
        const request = axios.put(`${BOARD_API}/settings?boardType=${boardType}`,
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
    return (dispatch, getState) => {

        const boardType = getState().scrumboardApp.board.data.boardType;

        const request = axios.delete(`${BOARD_API}/${boardId}?boardType=${boardType}`);

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response);

                    history.push('/boards');

                    return dispatch({
                        type: DELETE_BOARD
                    })
                }
            })
        })
    }
}

// export function copyBoard(board) {
//     const newBoard = _.merge(board, {
//         id: FuseUtils.generateGUID(),
//         name: board.name + ' (Copied)',
//         uri: board.uri + '-copied'
//     });
//     return (dispatch) => {
//         dispatch(Actions.newBoard());
//         return {type: COPY_BOARD};
//     }
// }

export function renameBoard(boardId, boardTitle) {
    return (dispatch, getState) => {

        const boardType = getState().scrumboardApp.board.data.boardType;

        const request = axios.put(`${BOARD_API}?boardType=${boardType}`, {
                id: boardId,
                name: boardTitle,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    return dispatch({
                        type: RENAME_BOARD,
                        boardTitle
                    })
                }
            })
        })
    }
}
