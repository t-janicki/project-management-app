import {combineReducers} from 'redux';
import account from './account.reducer';
import company from './company.reducer';

const reducer = combineReducers({
    account,
    company
});

export default reducer;
