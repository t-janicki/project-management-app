import React from 'react';
import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    Icon,
    ListItemText,
    ListItemSecondaryAction,
    Switch, TextField, InputAdornment, DialogContent, IconButton
} from '@material-ui/core';
import * as Actions from '../../../../../../../app/main/apps/scrumboard/store/actions';
import {useDispatch, useSelector} from 'react-redux';
import LabelsForm from "../../../../notes/dialogs/labels/LabelsForm";
import MembersList from "./components/MembersList";
import TeamForm from "./components/TeamForm";
import {useForm} from '@fuse/hooks';


function TeamSettingsSidebar(props) {
    const dispatch = useDispatch();
    // const team = useSelector(({scrumboardApp}) => scrumboardApp.team.data);
    // console.log(team.displayName)
    // const {displayName} = {team};
    // console.log(displayName)
    const team = [];
    const {form: teamForm, handleChange, setForm, setInForm} = useForm(team);
    console.log(teamForm)

    return (
        <div>
            <List className="py-16" dense>

                {/*<TeamForm team={team}/>*/}

                <div className="w-full mb-24">
                    <TextField
                        label="Description"
                        name="description"
                        multiline
                        rows="4"
                        value={teamForm.description}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </div>

                <div>
                    <MembersList/>
                </div>

                {/*<ListItem*/}
                {/*    button*/}
                {/*    onClick={() => dispatch(Actions.changeBoardSettings({cardCoverImages: !board.settings.cardCoverImages}))}*/}
                {/*>*/}
                {/*    <ListItemIcon className="min-w-40">*/}
                {/*        <Icon>photo</Icon>*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText primary="Card Cover Images"/>*/}
                    {/*<ListItemSecondaryAction>*/}
                    {/*    <Switch*/}
                    {/*        onChange={() => dispatch(Actions.changeBoardSettings({cardCoverImages: !board.settings.cardCoverImages}))}*/}
                    {/*        checked={board.settings.cardCoverImages}*/}
                    {/*    />*/}
                    {/*</ListItemSecondaryAction>*/}
                {/*</ListItem>*/}

                {/*<ListItem*/}
                {/*    button*/}
                {/*    onClick={() => dispatch(Actions.changeBoardSettings({subscribed: !board.settings.subscribed}))}*/}
                {/*>*/}
                {/*    <ListItemIcon className="min-w-40">*/}
                {/*        <Icon>remove_red_eye</Icon>*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText primary="Subscribe"/>*/}
                    {/*<ListItemSecondaryAction>*/}
                    {/*    <Switch*/}
                    {/*        onChange={() => dispatch(Actions.changeBoardSettings({subscribed: !board.settings.subscribed}))}*/}
                    {/*        checked={board.settings.subscribed}*/}
                    {/*    />*/}
                    {/*</ListItemSecondaryAction>*/}
                {/*</ListItem>*/}

                {/*<ListItem button onClick={() => dispatch(Actions.copyBoard(board))}>*/}
                {/*    <ListItemIcon className="min-w-40">*/}
                {/*        <Icon>file_copy</Icon>*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText primary="Copy Board"/>*/}
                {/*</ListItem>*/}

                {/*<ListItem button onClick={() => dispatch(Actions.deleteBoard(board.id))}>*/}
                {/*    <ListItemIcon className="min-w-40">*/}
                {/*        <Icon>delete</Icon>*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText primary="Delete Board"/>*/}
                {/*</ListItem>*/}
            </List>
        </div>
    );
}

export default TeamSettingsSidebar;
