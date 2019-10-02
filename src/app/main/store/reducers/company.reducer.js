import * as Actions from '../actions';

const initialState = {
    data: {
        name: '',
        phone: '',
        streetAndNumber: '',
        postCode: '',
        city: '',
        country: '',
    },
    companyDialog: {
        type: 'edit',
        props: {
            open: false
        },
        data: null
    }
};

const companyReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_COMPANY_INFO: {
            return {
                ...state,
                data: action.payload
            }
        }
        case Actions.COMPANY_OPEN_EDIT_DIALOG: {
            return {
                ...state,
                companyDialog: {
                    type: 'edit',
                    props: {
                        open: true
                    },
                    data: action.data
                }
            };
        }
        case Actions.COMPANY_CLOSE_EDIT_DIALOG: {
            return {
                ...state,
                companyDialog: {
                    type: 'edit',
                    props: {
                        open: false
                    },
                    data: null
                }
            };
        }
        default: {
            return state;
        }
    }
};

export default companyReducer;
