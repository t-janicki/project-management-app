import * as Actions from '../actions';

const initialState = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    isActive: '',
    jobTitle: '',
    address: {
        streetAndNumber: '',
        postCode: '',
        city: '',
        country: ''
    }
};

const personReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_PERSON: {
            return {
                ...state,
                data: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default personReducer;
