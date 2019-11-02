import axios from 'axios';
import history from '@history';
import {showMessage} from '../../../../../../app/store/actions/fuse';

import {TEAM_API} from "../../../../../apiURL";

export const GET_TEAM = '[SCRUMBOARD APP] GET TEAM';
export const RESET_TEAM = '[SCRUMBOARD APP] RESET TEAM';

export const OPEN_NEW_TEAM_DIALOG = '[SCRUMBOARD APP] OPEN TEAM DIALOG';
export const CLOSE_TEAM_DIALOG = '[SCRUMBOARD APP] CLOSE TEAM DIALOG';
export const NEW_TEAM = '[SCRUMBOARD APP] NEW TEAM';
export const UPDATE_TEAM_INFO = '[SCRUMBOARD APP] UPDATE_TEAM_INFO';
export const INVITE_TO_TEAM = '[SCRUMBOARD APP] INVITE_TO_TEAM';
export const REMOVE_FROM_TEAM = '[SCRUMBOARD APP] REMOVE FROM TEAM';
export const DELETE_TEAM = '[SCRUMBOARD APP] DELETE_TEAM';

export function openTeamDialog(data) {
    return {
        type: OPEN_NEW_TEAM_DIALOG,
        payload: data
    }
}

export function closeTeamDialog() {
    return {
        type: CLOSE_TEAM_DIALOG
    }
}

export function inviteToTeam(teamId, email) {
    return (dispatch) => {

        const request = axios.put(`${TEAM_API}/invite`, {
            teamId,
            email
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    dispatch(showMessage({
                        message: 'Invitation sended. ',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'info'
                    }));

                    return dispatch({
                        type: INVITE_TO_TEAM,
                        payload: response.data
                    })
                }
            })
                .catch(function (error) {
                    reject(error.data);
                    if (error.response.status === 400) {
                        dispatch(showMessage({
                            message: error.response.data.message,
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'error'
                        }));
                    }
                });
        })
    }
}

export function removeFromTeam(teamId, email, quitStatus) {
    return (dispatch) => {

        const request = axios.patch(`${TEAM_API}/remove`, {
            teamId,
            email
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    if (quitStatus === 'Remove') {
                        dispatch(showMessage({
                            message: 'Member removed. ',
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'info'
                        }));
                    } else {
                        history.push('/teams');
                    }

                    return dispatch({
                        type: REMOVE_FROM_TEAM,
                        payload: response.data
                    })
                }
            })
                .catch(function (error) {
                    reject(error.data);
                    if (error.response.status) {
                        dispatch(showMessage({
                            message: error.response.data.message,
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'error'
                        }));
                    }
                });
        })
    }
}

export function getTeam(params) {
    return (dispatch) => {
        const {teamId} = params;
        const request = axios.get(`${TEAM_API}/${teamId}`);

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    return dispatch({
                        type: GET_TEAM,
                        payload: response.data
                    })
                }
            })
        })
    }
}

export function updateTeamInfo(teamInfo) {
    return (dispatch) => {

        const request = axios.put(TEAM_API, {
            id: teamInfo.id,
            displayName: teamInfo.displayName,
            description: teamInfo.description,
            ownerEmail: teamInfo.ownerEmail
        });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    dispatch(showMessage({
                        message: 'Saved',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'success'
                    }));

                    return dispatch({
                        type: UPDATE_TEAM_INFO,
                        payload: response.data
                    })
                }
            })
        })
    }
}

export function createNewTeam({displayName, description}) {
    return (dispatch) => {
        const request = axios.post(TEAM_API, {
            teamInfo: {
                displayName,
                description
            }
        });

        let team = {};

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    team = response.data;

                    return dispatch({
                        type: NEW_TEAM,
                        payload: team
                    });
                }
            })
                .then(() => {
                    history.push({
                        pathname: `/teams/${team.id}/boards`
                    });
                })
        })
    }
}

export function deleteTeam(teamId) {
    return (dispatch) => {

        const request = axios.delete(`${TEAM_API}/${teamId}`);

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response);

                    history.push('/teams');

                    return dispatch({
                        type: DELETE_TEAM
                    })
                }
            })
                .catch(function (error) {
                    reject(error.data);
                    if (error.response.status) {
                        dispatch(showMessage({
                            message: error.response.data.message,
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'error'
                        }));
                    }
                });
        })
    }
}

export function resetTeam() {
    return {
        type: RESET_TEAM
    };
}
