import * as Actions from '../actions';

const initialState = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    streetAndNumber: '',
    postCode: '',
    city: '',
    country: '',
    lat: '',
    lng: '',
};

const customerReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_CUSTOMER: {
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

export default customerReducer;
