import axios from 'axios';

import {TEAM_API} from "../../../../../apiURL";

export const GET_TEAM = '[SCRUMBOARD APP] GET TEAM';
export const RESET_TEAM = '[SCRUMBOARD APP] RESET TEAM';

export const OPEN_NEW_TEAM_DIALOG = '[SCRUMBOARD APP] OPEN TEAM DIALOG';
export const CLOSE_TEAM_DIALOG = '[SCRUMBOARD APP] CLOSE TEAM DIALOG';

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
    const request = axios.get(TEAM_API + `/${teamId}`);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: GET_TEAM,
                payload: response.data
            })
        })
    }
}

export function resetTeam() {
    return {
        type: RESET_TEAM
    };
}
