import * as Actions from '../actions';

const dailyOrdersListReducer = function (state = {}, action) {
    switch (action.type) {
        case Actions.GET_DAILY_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default dailyOrdersListReducer;
