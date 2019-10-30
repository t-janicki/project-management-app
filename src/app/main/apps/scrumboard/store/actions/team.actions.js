import axios from 'axios';
import history from '@history';
import {showMessage} from '../../../../../../app/store/actions/fuse';

import {TEAM_API} from "../../../../../apiURL";

export const GET_TEAM = '[SCRUMBOARD APP] GET TEAM';
export const RESET_TEAM = '[SCRUMBOARD APP] RESET TEAM';

export const OPEN_NEW_TEAM_DIALOG = '[SCRUMBOARD APP] OPEN TEAM DIALOG';
export const CLOSE_TEAM_DIALOG = '[SCRUMBOARD APP] CLOSE TEAM DIALOG';
export const NEW_TEAM = '[SCRUMBOARD APP] NEW TEAM';
export const OPEN_SETTINGS_TEAM_DIALOG = '[SCRUMBOARD APP] OPEN SETTINGS TEAM DIALOG';
export const CLOSE_SETTINGS_TEAM_DIALOG = '[SCRUMBOARD APP] OPEN SETTINGS TEAM DIALOG';
export const  UPDATE_TEAM_INFO = '[SCRUMBOARD APP] UPDATE_TEAM_INFO';

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

// export function openSettingsTeamDialog(data) {
//     return {
//         type: OPEN_SETTINGS_TEAM_DIALOG,
//         payload: data
//     }
// }
//
// export function closeTeamSettingsDialog() {
//     return {
//         type: CLOSE_SETTINGS_TEAM_DIALOG,
//     }
// }

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
           ownerId: teamInfo.ownerId
       });

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    return dispatch({
                        type: UPDATE_TEAM_INFO,
                        payload: response.data
                    })
                }
            })
                .then(() => {
                    dispatch(showMessage({
                        message: 'Saved',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'success'
                    }));
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

export function resetTeam() {
    return {
        type: RESET_TEAM
    };
}
