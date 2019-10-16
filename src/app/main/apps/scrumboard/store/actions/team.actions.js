import axios from 'axios';
import {FuseUtils} from '@fuse';
import history from '@history';
import _ from '@lodash';
import {showMessage} from 'app/store/actions/fuse';
import reorder, {reorderQuoteMap} from './reorder';
import * as Actions from './index';

import {TEAM_API} from "../../../../../apiURL";

export const GET_TEAM = '[SCRUMBOARD APP] GET TEAM';
export const RESET_TEAM = '[SCRUMBOARD APP] RESET TEAM';

export function getTeam(params) {
    const {teamId} = params;
    console.log(params)
    console.log(teamId)
    const request = axios.get(TEAM_API + `/${teamId}`);

    console.log(request);

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
