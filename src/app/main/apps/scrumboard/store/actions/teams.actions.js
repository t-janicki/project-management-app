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
    return (dispatch) => {
        const request = axios.get(TEAM_API);

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if (response.status === 200) {
                    resolve(response.data);

                    return dispatch({
                        type: GET_TEAMS,
                        payload: response.data
                    })
                }
            })
        })
    }
}


