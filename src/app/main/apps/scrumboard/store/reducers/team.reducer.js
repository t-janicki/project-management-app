import * as Actions from '../actions';

const initialState = {
    dialogOpen: false,
    data: null
};

const teamReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.OPEN_NEW_TEAM_DIALOG: {
            return {
                dialogOpen: true,
                data: action.payload
            };
        }
        case Actions.CLOSE_TEAM_DIALOG: {
            return initialState;
        }
        case Actions.NEW_TEAM: {
            return [
                action.payload
            ];
        }
        case Actions.GET_TEAM: {
            return {
                ...action.payload
            };
        }
        case Actions.RESET_TEAM: {
            return initialState;
        }
        default:
            return state;
    }
};

export default teamReducer;
