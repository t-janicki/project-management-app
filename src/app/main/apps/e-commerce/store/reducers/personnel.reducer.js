import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    _embedded: {
        personnelFormDTOList: {
            entities: null
        }
    },
    searchText: '',
    selectedPersonnelIds: [],
    routeParams: {},
    personDialog: {
        type: 'new',
        props: {
            open: false
        },
        data: null
    }
};

const personnelReducer = function(state = initialState, action) {
    switch ( action.type ) {
        case Actions.GET_PERSONNEL: {
            return {
                ...state,
                entities: _.keyBy(action.payload._embedded.personnelFormDTOList, 'id'),
            };
        }
        case Actions.SET_SEARCH_TEXT_PERSON: {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.TOGGLE_IN_SELECTED_PERSONNEL: {

            const personId = action.personId;

            let selectedPersonnelIds = [...state.selectedPersonnelIds];

            if (selectedPersonnelIds.find(id => id === personId) !== undefined) {
                selectedPersonnelIds = selectedPersonnelIds.filter(id => id !== personId)
            }
            else {
                selectedPersonnelIds = [...selectedPersonnelIds, personId];
            }

            return {
                ...state,
                selectedPersonnelIds: selectedPersonnelIds
            };
        }
        case Actions.SELECT_ALL_PERSONNEL: {
            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedPersonnelIds = arr.map(person => person.id);

            return {
                ...state,
                selectedPersonnelIds: selectedPersonnelIds
            };
        }
        case Actions.DESELECT_ALL_PERSONNEL: {
            return {
                ...state,
                selectedPersonnelIds: []
            };
        }
        case Actions.OPEN_NEW_PERSON_DIALOG: {
            return {
                ...state,
                personDialog: {
                    type: 'new',
                    props: {
                        open: true
                    },
                    data: null
                }
            };
        }
        case  Actions.CLOSE_NEW_PERSON_DIALOG: {
            return {
                ...state,
                personDialog: {
                    type: 'new',
                    props: {
                        open: false
                    },
                    data: null
                }
            };
        }
        case Actions.OPEN_EDIT_PERSON_DIALOG: {
            return {
                ...state,
                personDialog: {
                    type: 'edit',
                    props: {
                        open: true
                    },
                    data: action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_PERSON_DIALOG: {
            return {
                ...state,
                personDialog: {
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

export default personnelReducer;
