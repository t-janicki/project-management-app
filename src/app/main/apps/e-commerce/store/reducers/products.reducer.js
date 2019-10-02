import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    _embedded: {
        productFormDTOList: {
            entities: null
        }
    },
    searchText: '',
    selectedProductIds: [],
    routeParams: {},
    productDialog: {
        type: 'new',
        props: {
            open: false
        },
        data: null
    }
};

const productsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_PRODUCTS: {
            return {
                ...state,
                entities: _.keyBy(action.payload._embedded.productFormDTOList, 'id'),
            };
        }
        case Actions.SET_SEARCH_TEXT_PRODUCT: {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.TOGGLE_IN_SELECTED_PRODUCTS: {

            const productId = action.productId;

            let selectedProductIds = [...state.selectedProductIds];

            if (selectedProductIds.find(id => id === productId) !== undefined) {
                selectedProductIds = selectedProductIds.filter(id => id !== productId)
            } else {
                selectedProductIds = [...selectedProductIds, productId];
            }

            return {
                ...state,
                selectedProductIds: selectedProductIds
            };
        }
        case Actions.SELECT_ALL_PRODUCTS: {
            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedProductIds = arr.map(product => product.id);

            return {
                ...state,
                selectedProductIds: selectedProductIds
            };
        }
        case Actions.DESELECT_ALL_PRODUCTS: {
            return {
                ...state,
                selectedProductIds: []
            };
        }
        case Actions.OPEN_NEW_PRODUCT_DIALOG: {
            return {
                ...state,
                productDialog: {
                    type: 'new',
                    props: {
                        open: true
                    },
                    data: null
                }
            };
        }
        case Actions.CLOSE_NEW_PRODUCT_DIALOG: {
            return {
                ...state,
                productDialog: {
                    type: 'new',
                    props: {
                        open: false
                    },
                    data: null
                }
            };
        }
        case Actions.OPEN_EDIT_PRODUCT_DIALOG: {
            return {
                ...state,
                productDialog: {
                    type: 'edit',
                    props: {
                        open: true
                    },
                    data: action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_PRODUCT_DIALOG: {
            return {
                ...state,
                productDialog: {
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

export default productsReducer;
