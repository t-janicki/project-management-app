import * as Actions from '../actions';

const initialState = {
    orderNumber: '',
    orderType: '',
    subtotal: '',
    tax: '',
    discount: '',
    total: '',
    date: '',
    customer: [
        {
            firstName: '',
            lastName: '',
            phone: '',
            shippingAddress: [
                {
                    address: '',
                    lat: '',
                    lng: ''
                }
            ]
        }
    ],
};

const orderReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ORDER: {
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

export default orderReducer;
