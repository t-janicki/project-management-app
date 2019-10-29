import React, {useEffect, useRef, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import Formsy from "formsy-react";
import {useForm} from '@fuse/hooks';
import {TextFieldFormsy} from '@fuse';
import * as Actions from "../../../../store/actions/board.actions";

function TeamForm(props) {
    // const team = useSelector(({scrumboardApp}) => scrumboardApp.team);
    console.log(props.team)
    const {form: teamForm, handleChange, setForm, setInForm} = useForm(props.team);
    console.log(teamForm);

    function handleSubmit() {
        // dispatch(Actions.createNewTeam(teamForm));
        console.log('action')
    }

    const [isFormValid, setIsFormValid] = useState(false);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    const formRef = useRef(null);

    return (
        <div>
            {/*<Formsy*/}
            {/*    onValidSubmit={handleSubmit}*/}
            {/*    onValid={enableButton}*/}
            {/*    onInvalid={disableButton}*/}
            {/*    ref={formRef}*/}
            {/*    className="flex flex-col justify-center w-full"*/}
            {/*>*/}
                <div>
                    {/*<TextFieldFormsy*/}
                    {/*    id="displayName"*/}
                    {/*    label="Display Name"*/}
                    {/*    name="displayName"*/}
                    {/*    className="mb-24"*/}
                    {/*    value={teamForm.displayName || ''}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    validations={{*/}
                    {/*        minLength: 4,*/}
                    {/*        maxLength: 50*/}
                    {/*    }}*/}
                    {/*    validationErrors={{*/}
                    {/*        minLength: 'Min character length is 4',*/}
                    {/*        maxLength: 'Max character length is 50'*/}
                    {/*    }}*/}
                    {/*    variant="outlined"*/}
                    {/*    required*/}
                    {/*    fullWidth*/}

                    {/*/>*/}
                </div>

                <div>
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
                    {/*<TextFieldFormsy*/}
                    {/*    id="description"*/}
                    {/*    className="mb-16"*/}
                    {/*    type="text"*/}
                    {/*    name="description"*/}
                    {/*    value={teamForm.description || ''}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    label="Description"*/}
                    {/*    variant="outlined"*/}
                    {/*    fullWidth*/}
                    {/*    multiline*/}
                    {/*    rows="4"*/}
                    {/*    validations={{*/}
                    {/*        maxLength: 250*/}
                    {/*    }}*/}
                    {/*    validationErrors={{*/}
                    {/*        maxLength: 'Max character length is 250'*/}
                    {/*    }}*/}
                    {/*/>*/}
                </div>

            {/*</Formsy>*/}
        </div>
    )
}

export default TeamForm;
