import axios from 'axios';
import {TEAM_API} from '../../../../../apiURL';

export const GET_TEAMS = '[SCRUMBOARD APP] GET TEAMS';
export const RESET_TEAMS = '[SCRUMBOARD APP] RESET TEAMS';

export function resetTeams() {
    return {
        type: RESET_TEAMS
    }
}

export function getTeams() {
    const request = axios.get(TEAM_API);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: GET_TEAMS,
                payload: response.data
            })
        })
    }
}


