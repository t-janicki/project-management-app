import * as Actions from '../actions';

const initialState = {
    data: {
        userInfo: {
            name: '',
            email: '',
            phone: '',
            role: '',
            isActive: '',
            jobTitle: ''
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
                data: action.payload.userInfo
            };
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

