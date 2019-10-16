import {combineReducers} from 'redux';
import boards from './boards.reducer';
import board from './board.reducer';
import card from './card.reducer';
import team from './team.reducer';
import teams from './teams.reducer';

const scrumboardAppReducers = combineReducers({
    boards,
    board,
    card,
    teams,
    team
});

export default scrumboardAppReducers;
