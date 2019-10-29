import * as Actions from '../actions';

const initialState = [];

const teamsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_TEAMS: {
            return [
                ...action.payload
            ]
        }
        case Actions.RESET_TEAMS: {
            return [];
        }
        default:
            return state;
    }
};

export default teamsReducer;
