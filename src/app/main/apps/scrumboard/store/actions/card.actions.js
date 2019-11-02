import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';
import {BOARD_API} from "../../../../../apiURL";
import {ADD_LABEL} from "./board.actions";

export const OPEN_CARD_DIALOG = '[SCRUMBOARD APP] OPEN CARD DIALOG';
export const CLOSE_CARD_DIALOG = '[SCRUMBOARD APP] CLOSE CARD DIALOG';
export const UPDATE_CARD = '[SCRUMBOARD APP] UPDATE CARD';
export const REMOVE_CARD = '[SCRUMBOARD APP] REMOVE CARD';

export function openCardDialog(data) {
    return {
        type: OPEN_CARD_DIALOG,
        payload: data
    }
}

export function closeCardDialog() {
    return {
        type: CLOSE_CARD_DIALOG
    }
}

export function updateCard(boardId, card) {
    return (dispatch) => {

        const {
            id, name, description, dueDate, idAttachmentCover,
            idMembers, idLabels, subscribed, attachments,
            checklists, activities
        } = card;

        const request = axios.put(`${BOARD_API}/card`, {
            id, name, description, dueDate, idAttachmentCover,
            idMembers, idLabels, subscribed, attachments,
            checklists, activities
        });

        return request.then(() => {
            dispatch(showMessage({
                message: 'Card Saved',
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }));
            return dispatch({
                type: UPDATE_CARD,
                payload: card
            })
        });
    }
}

export function newCheckList({name}) {
    return () => {
        const request = axios.post(`${BOARD_API}/card/newCheckList`, {
            name,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                resolve(response.data);

                reject(response.data.error)
            })
        })
    }
}

export function newLabel({name, boardId}) {
    return (dispatch) => {
        const request = axios.post(`${BOARD_API}/${boardId}/card/newLabel`, {
            name,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {

                    resolve(response.data);

                    return dispatch({
                        type: ADD_LABEL,
                        payload: response.data
                    });
                }
                reject(response.data.error);
            })
        })
    }
}

export function newCheckItem({name}) {
    return () => {
        const request = axios.post(`${BOARD_API}/card/newCheckItem`, {
            name,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                resolve(response.data);

                reject(response.data.error);
            })
        })
    }
}

export function newActivity({message}, cardId) {
    return () => {
        const request = axios.post(`${BOARD_API}/card/${cardId}/newActivity`, {
            message,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                resolve(response.data);

                reject(response.data.error);
            })
        })
    }
}

export function removeCard(boardId, cardId) {
    return (dispatch, getState) => {
        const boardType = getState().scrumboardApp.board.data.boardType;

        const request = axios.delete(`${BOARD_API}/${boardId}/card/${cardId}?boardType=${boardType}`);

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.data) {
                    resolve(response.data);

                    return dispatch({
                        type: REMOVE_CARD,
                        cardId,
                        boardId
                    });
                }
                reject(response.data.error)
            })
        })
    };
}
