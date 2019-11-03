import * as Actions from '../actions';

const initialState = {
    dialogOpen: false,
    data: {
        boards: [],
        members: [],
        teamInfo: {
            id: 0,
            displayName: '',
            description: '',
            ownerEmail: '',

        }
    }
};

// const initialState = {
//     dialogOpen: false,
//     data: {
//         boards: [],
//         members: [],
//         teamInfo: null
//     }
// };

const teamReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.OPEN_NEW_TEAM_DIALOG: {
            return {
                dialogOpen: true,
                data: action.payload
            };
        }
        // case Actions.OPEN_SETTINGS_TEAM_DIALOG: {
        //     console.log(state)
        //     return {
        //         ...state,
        //         dialogOpen: true,
        //         ...action.payload,
        //     };
        // }
        case Actions.CLOSE_TEAM_DIALOG: {
            return initialState;
        }
        // case Actions.CLOSE_SETTINGS_TEAM_DIALOG: {
        //     console.log(state)
        //     return initialState;
        // }
        case Actions.NEW_TEAM: {
            return {
                data: {
                    ...action.payload
                }
            };
        }
        case Actions.GET_TEAM: {
            return {
                data: {...action.payload}
            };
        }
        case Actions.UPDATE_TEAM_INFO: {
            return {
                ...state,
                data: {...action.payload}
            }
        }
        case Actions.RESET_TEAM: {
            return initialState;
        }
        case Actions.INVITE_TO_TEAM: {
            return {
                data: {
                    ...state.data,
                    members: action.payload
                }
            }
        }
        case Actions.REMOVE_FROM_TEAM: {
            return {
                ...state,
                data: {...action.payload}
            }
        }
        case Actions.DELETE_TEAM: {
            return initialState;
        }
        default:
            return state;
    }
};

export default teamReducer;
