import axios from 'axios';
import {FuseUtils} from '@fuse';
import history from '@history';
import _ from '@lodash';
import {showMessage} from 'app/store/actions/fuse';
import reorder, {reorderQuoteMap} from './reorder';
import * as Actions from './index';
import {TEAM_API} from '../../../../../apiURL';
import {RESET_BOARDS} from "./index";

export const OPEN_NEW_TEAM_DIALOG = '[SCRUMBOARD APP] OPEN TEAM DIALOG';
export const CLOSE_TEAM_DIALOG = '[SCRUMBOARD APP] CLOSE TEAM DIALOG';
export const GET_TEAMS = '[SCRUMBOARD APP] GET TEAMS';
export const RESET_TEAMS = '[SCRUMBOARD APP] RESET TEAMS';
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

export function resetTeams() {
    return {
        type: RESET_TEAMS
    }
}


export function getTeams() {
    const request = axios.get(TEAM_API);

    console.log(request)
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
    console.log(displayName, description)
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
