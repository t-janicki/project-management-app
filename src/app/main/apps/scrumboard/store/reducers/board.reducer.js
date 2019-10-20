import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    dialogOpen: false,
    data: null
};

const boardReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_BOARD: {
            return {
                ...state,
                data: {...action.payload}
            };
        }
        case Actions.OPEN_NEW_BOARD_DIALOG: {
            return {
                dialogOpen: true,
                data: action.payload
            }
        }
        case Actions.CLOSE_NEW_BOARD_DIALOG: {
            return initialState;
        }
        case Actions.RESET_BOARD: {
            return initialState;
        }
        case Actions.ORDER_LIST: {
            return {
                ...state,
                data: {
                    ...state.data,
                    lists: action.payload
                }
            };
        }
        case Actions.ORDER_CARD: {
            return {
                ...state,
                data: {
                    ...state.data,
                    lists: action.payload
                }
            };
        }
        case Actions.ADD_LIST: {
            return {
                ...state,
                data: {
                    ...state.data,
                    lists: action.payload
                }
            };
        }
        case Actions.ADD_CARD: {
            return {
                data: {...action.payload}
            };
        }
        case Actions.ADD_LABEL: {
            return {
                ...state,
                labels: [
                    ...state.labels,
                    action.payload
                ]
            };
        }
        case Actions.UPDATE_CARD: {
            return {
                ...state,
                data: {
                    ...state.data,
                    cards: state.data.cards.map((_card) => {
                        if (_card.id === action.payload.id) {
                            return action.payload;
                        }
                        return _card;
                    })
                }
            };
        }
        case Actions.REMOVE_CARD: {
            return {
                ...state,
                data: {
                    ...state.data,
                    cards: _.reject(state.data.cards, {id: action.cardId}),
                    lists: state.data.lists.map(list => {
                        _.set(list, 'idCards', _.reject(list.idCards, (id) => id == action.cardId));
                        return list;
                    })
                }
            };
        }
        case Actions.RENAME_LIST: {
            return {
                ...state,
                lists: state.data.lists.map(list => {
                    if (list.id === action.listId) {
                        list.name = action.listTitle
                    }
                    return list;
                })
            };
        }
        case Actions.REMOVE_LIST: {
            return {
                ...state,
                data: {
                    ...state.data,
                    lists: _.reject(state.data.lists, {id: action.listId})
                }
            };
        }
        case Actions.CHANGE_BOARD_SETTINGS: {
            return {
                ...state,
                data: {
                    ...state.data,
                    settings: action.payload
                }
            };
        }
        case Actions.DELETE_BOARD: {
            return initialState;
        }
        case Actions.RENAME_BOARD: {
            return {
                ...state,
                data: {
                    ...state.data,
                    name: action.boardTitle
                }
            };
        }
        default:
            return state;
    }
};

export default boardReducer;
