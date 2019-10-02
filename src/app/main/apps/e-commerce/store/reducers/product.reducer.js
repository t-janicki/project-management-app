import * as Actions from '../actions';

const initialState = {
    id: '',
    name: '',
    priceTaxIncl: '',
    description: '',
    productInventoryDTO: {
        sku: '',
        quantity: '',
    },
    productShippingDetailsDTO: {
        width: '',
        height: '',
        depth: '',
        weight: '',
        extraShippingFee: '',
    },
};

const productReducer = function (state = initialState, action) {
    switch (action.type) {

        case Actions.GET_PRODUCT: {
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

export default productReducer;
