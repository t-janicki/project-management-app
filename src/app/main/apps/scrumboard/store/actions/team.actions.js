import axios from 'axios';
import history from '@history';

import {TEAM_API} from "../../../../../apiURL";

export const GET_TEAM = '[SCRUMBOARD APP] GET TEAM';
export const RESET_TEAM = '[SCRUMBOARD APP] RESET TEAM';

export const OPEN_NEW_TEAM_DIALOG = '[SCRUMBOARD APP] OPEN TEAM DIALOG';
export const CLOSE_TEAM_DIALOG = '[SCRUMBOARD APP] CLOSE TEAM DIALOG';
export const NEW_TEAM = '[SCRUMBOARD APP] NEW TEAM';

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

export function getTeam(params) {
    const {teamId} = params;
    const request = axios.get(`${TEAM_API}/${teamId}`);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: GET_TEAM,
                payload: response.data
            })
        })
    }
}

export function createNewTeam({displayName, description}) {
    return (dispatch) => {
        const request = axios.post(TEAM_API, {
            displayName,
            description
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
