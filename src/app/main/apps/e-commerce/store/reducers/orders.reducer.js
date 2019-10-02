import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    entities          : null,
    searchText        : '',
    selectedOrderIds: [],
    routeParams       : {},
    orderDialog     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    }
};

const ordersReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ORDERS: {
            return {
                ...state,
                entities: _.keyBy(action.payload, 'id'),
                routeParams: action.routeParams
            };
        }
        case Actions.SET_SEARCH_TEXT_ORDERS: {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.TOGGLE_IN_SELECTED_ORDERS: {

            const orderId = action.orderId;

            let selectedOrderIds = [...state.selectedOrderIds];

            if ( selectedOrderIds.find(id => id === orderId) !== undefined) {
                selectedOrderIds = selectedOrderIds.filter(id => id !== orderId)
            }
            else {
                selectedOrderIds = [...selectedOrderIds, orderId];
            }

            return {
                ...state,
                selectedOrderIds: selectedOrderIds
            };
        }
        case Actions.SELECT_ALL_ORDERS: {

            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedOrderIds = arr.map(order => order.id);

            return {
                ...state,
                selectedOrderIds: selectedOrderIds
            };
        }
        case Actions.DESELECT_ALL_ORDERS: {

            return {
                ...state,
                selectedOrderIds: []
            };
        }
        case Actions.OPEN_NEW_ORDER_DIALOG: {
            return {
                ...state,
                orderDialog: {
                    type: 'new',
                    props: {
                        open: true
                    },
                    data: null
                }
            };
        }
        case Actions.CLOSE_NEW_ORDER_DIALOG: {
            return {
                ...state,
                orderDialog: {
                    type: 'new',
                    props: {
                        open: false
                    },
                    data: null
                }
            };
        }
        case Actions.OPEN_EDIT_ORDER_DIALOG: {
            return {
                ...state,
                orderDialog: {
                    type: 'edit',
                    props: {
                        open: true
                    },
                    data: action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_ORDER_DIALOG: {
            return {
                ...state,
                orderDialog: {
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

export default ordersReducer;
