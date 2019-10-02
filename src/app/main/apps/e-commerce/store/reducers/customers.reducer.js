import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    _embedded: {
        customerFormDTOList: {
            entities: null
        }
    },
    searchText: '',
    selectedCustomerIds: [],
    routeParams: {},
    customerDialog: {
        type: 'new',
        props: {
            open: false
        },
        data: null
    }
};

const customersReducer = function(state = initialState, action) {
    switch ( action.type ) {
        case Actions.GET_CUSTOMERS: {
            return {
                ...state,
                entities: _.keyBy(action.payload._embedded.customerFormDTOList, 'id'),
            };
        }
        case Actions.SET_SEARCH_TEXT_CUSTOMER: {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.TOGGLE_IN_SELECTED_CUSTOMERS: {

            const customerId = action.customerId;

            let selectedCustomerIds = [...state.selectedCustomerIds];

            if (selectedCustomerIds.find(id => id === customerId) !== undefined) {
                selectedCustomerIds = selectedCustomerIds.filter(id => id !== customerId)
            }
            else {
                selectedCustomerIds = [...selectedCustomerIds, customerId];
            }

            return {
                ...state,
                selectedCustomerIds: selectedCustomerIds
            };
        }
        case Actions.SELECT_ALL_CUSTOMERS: {
            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedCustomerIds = arr.map(customer => customer.id);

            return {
                ...state,
                selectedCustomerIds: selectedCustomerIds
            };
        }
        case Actions.DESELECT_ALL_CUSTOMERS: {
            return {
                ...state,
                selectedCustomerIds: []
            };
        }
        case Actions.OPEN_NEW_CUSTOMER_DIALOG: {
            return {
                ...state,
                customerDialog: {
                    type: 'new',
                    props: {
                        open: true
                    },
                    data: null
                }
            };
        }
        case  Actions.CLOSE_NEW_CUSTOMER_DIALOG: {
            return {
                ...state,
                customerDialog: {
                    type: 'new',
                    props: {
                        open: false
                    },
                    data: null
                }
            };
        }
        case Actions.OPEN_EDIT_CUSTOMER_DIALOG: {
            return {
                ...state,
                customerDialog: {
                    type: 'edit',
                    props: {
                        open: true
                    },
                    data: action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_CUSTOMER_DIALOG: {
            return {
                ...state,
                customerDialog: {
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

export default customersReducer;
