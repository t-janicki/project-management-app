import axios from 'axios';
import history from '@history';
import {TEAM_API} from '../../../../../apiURL';

export const GET_TEAMS = '[SCRUMBOARD APP] GET TEAMS';
export const RESET_TEAMS = '[SCRUMBOARD APP] RESET TEAMS';
export const NEW_TEAM = '[SCRUMBOARD APP] NEW TEAM';

export function resetTeams() {
    return {
        type: RESET_TEAMS
    }
}

export function getTeams() {
    const request = axios.get(TEAM_API);

    return (dispatch) => {
        request.then((response) => {
            console.log(response);
            dispatch({
                type: GET_TEAMS,
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

        return new Promise((resolve, reject) => {
            request.then((response) => {
                if(response.data) {
                    resolve(response.data);

                    const team = response.data;

                    history.push({
                        pathname: '/apps/boards/teams/' + team.id
                    });

                    return dispatch({
                        type: NEW_TEAM,
                        team
                    })
                }
            })
        })
    }
}
