import * as Actions from '../actions';

const initialState = {
    data: {
        userInfo: {
            id: 0,
            role: '',
            name: '',
            avatarUrl: '',
            email: ''
        }
    },
    accountDialog: {
        type: 'edit',
        props: {
            open: false
        },
        data: null
    }
};

const accountReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ACCOUNT_INFO: {
            return {
                ...state,
                data: {
                    userInfo: {...action.payload.userInfo}
                }
            };
        }
        case Actions.UPDATE_USER_INFO: {
            return {
                ...state,
                data: {
                    userInfo: {...action.payload}
                }
            }
        }
        case Actions.ACCOUNT_OPEN_EDIT_DIALOG: {
            return {
                ...state,
                accountDialog: {
                    type: 'edit',
                    props: {
                        open: true
                    },
                    data: action.data
                }
            };
        }
        case Actions.ACCOUNT_CLOSE_EDIT_DIALOG: {
            return {
                ...state,
                accountDialog: {
                    type: 'edit',
                    props: {
                        open: false
                    },
                    data: null
                }
            };
        }
        default: {
            return state
        }
    }
};

export default accountReducer;

