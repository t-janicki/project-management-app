import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import Formsy from "formsy-react";
import {TextFieldFormsy} from '@fuse';
import {useForm} from '@fuse/hooks';
import * as Actions from '../../store/actions';

const defaultFormState = {
    displayName: '',
    description: ''
};

const useStyles = makeStyles(theme => ({
    paper: {
        color: theme.palette.text.primary
    }
}));

function TeamDialog(props) {
    const dispatch = useDispatch();
    const dialogOpen = useSelector(({scrumboardApp}) => scrumboardApp.team.dialogOpen);
    // const team = useSelector(({scrumboardApp}) => scrumboardApp.team);

    const classes = useStyles(props);

    // const {form, setForm, handleChange} = useForm(defaultFormState);

    const {form: teamForm, handleChange, setForm, setInForm} = useForm(defaultFormState);

    const [isFormValid, setIsFormValid] = useState(false);

    // const initDialog = useCallback(
    //     () => {
    //
    //         setForm({
    //             ...defaultFormState
    //         });
    //     },
    //     [setForm],
    // );

    // useEffect(() => {
    //     if (dialogOpen.props.open) {
    //         initDialog();
    //     }
    //
    // }, [dialogOpen.props.open, initDialog]);

    function handleSubmit() {
        dispatch(Actions.createNewTeam(teamForm));

    }

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    const formRef = useRef(null);

    return (
        <Dialog
            classes={{
                paper: clsx(classes.paper, "max-w-sm w-full m-24")
            }}
            open={dialogOpen}
            onClose={ev => dispatch(Actions.closeTeamDialog())}
        >
            <DialogTitle component="div" className="p-0">
                <AppBar position="static" elevation={1}>
                    <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                        New Team
                    </Toolbar>
                </AppBar>
            </DialogTitle>

            <DialogContent className="p-16 sm:p-24">

                <Formsy
                    onValidSubmit={handleSubmit}
                    onValid={enableButton}
                    onInvalid={disableButton}
                    ref={formRef}
                    className="flex flex-col justify-center w-full"
                >

                    <div>
                        <TextFieldFormsy
                            id="displayName"
                            label="Display Name"
                            name="displayName"
                            className="mb-24"
                            value={teamForm.displayName || ''}
                            onChange={handleChange}
                            validations={{
                                minLength: 4,
                                maxLength: 50
                            }}
                            validationErrors={{
                                minLength: 'Min character length is 4',
                                maxLength: 'Max character length is 50'
                            }}
                            variant="outlined"
                            required
                            fullWidth

                        />
                    </div>

                    <div>
                        <TextFieldFormsy
                            id="description"
                            className="mb-16"
                            type="text"
                            name="description"
                            value={teamForm.description || ''}
                            onChange={handleChange}
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows="4"
                            validations={{
                                maxLength: 250
                            }}
                            validationErrors={{
                                maxLength: 'Max character length is 250'
                            }}
                        />
                    </div>

                    <DialogActions className="justify-between pl-16">
                        <Button
                            onClick={ev => dispatch(Actions.closeTeamDialog())}
                            color="primary"
                            variant="contained"
                        >
                            CANCEL
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            disabled={!isFormValid}
                            variant="contained"
                        >
                            CREATE
                        </Button>
                    </DialogActions>
                </Formsy>

            </DialogContent>
        </Dialog>
    );
}

export default TeamDialog;
