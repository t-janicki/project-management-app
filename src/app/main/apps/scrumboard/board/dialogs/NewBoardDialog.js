import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../store/actions';
import clsx from 'clsx';
import Formsy from "formsy-react";
import {TextFieldFormsy} from '@fuse';
import {useForm} from '@fuse/hooks';
import MenuItem from '@material-ui/core/MenuItem';

const boardTypes = [
    {
        value: 'PERSONAL',
        label: 'Personal',
    },
    {
        value: 'TEAM',
        label: 'Team',
    }
];

const useStyles = makeStyles(theme => ({
    paper: {
        color: theme.palette.text.primary
    },
}));

function NewBoardDialog(props) {
    const dispatch = useDispatch();
    const dialogOpen = useSelector(({scrumboardApp}) => scrumboardApp.board.dialogOpen);
    let teams = useSelector(({scrumboardApp}) => scrumboardApp.teams);
    console.log(teams)

    const defaultFormState = {
        name: '',
        description: '',
        boardType: 'PERSONAL',
        teams: []
    };

    useEffect(() => {
        dispatch(Actions.getTeams());
        return () => {
            dispatch(Actions.resetTeams());
        }
    }, [dispatch]);

    const classes = useStyles(props);

    const {form: boardForm, handleChange, setForm, setInForm} = useForm(defaultFormState);

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
    //
    // useEffect(() => {
    //     if (dialogOpen) {
    //         initDialog();
    //     }
    //
    // }, [dialogOpen, initDialog]);

    function handleSubmit() {
        dispatch(Actions.newBoard(boardForm));
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
            onClose={ev => dispatch(Actions.closeNewBoardDialog())}
        >
            <DialogTitle component="div" className="p-0">
                <AppBar position="static" elevation={1}>
                    <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                        New Board
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
                            id="name"
                            label="Name"
                            name="name"
                            className="mb-24"
                            value={boardForm.name || ''}
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
                            id="boardType"
                            label="Board Type"
                            name="boardType"
                            select
                            className="mb-24"
                            value={boardForm.boardType || ''}
                            onChange={handleChange}
                            SelectProps={{
                                native: true
                            }}
                            margin="normal"
                            variant="outlined"
                            required
                            fullWidth
                        >
                            {boardTypes.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextFieldFormsy>
                    </div>

                    {boardForm.boardType === 'TEAM' && teams.length >= 1 && (
                        <div>
                            <TextFieldFormsy
                                id="teams"
                                label="Select team..."
                                name="teams"
                                select
                                className="mb-24"
                                value={boardForm.teams || ''}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true
                                }}
                                margin="normal"
                                variant="outlined"
                                required
                                fullWidth
                            >
                                <option disabled hidden value=''/>
                                {teams.map(option => (
                                    <option key={option.id} value={option.id}>
                                        {option.displayName}
                                    </option>
                                ))}
                            </TextFieldFormsy>
                        </div>
                    )}

                    <div>
                        <TextFieldFormsy
                            id="description"
                            className="mb-16"
                            type="text"
                            name="description"
                            value={boardForm.description || ''}
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
                            onClick={ev => dispatch(Actions.closeNewBoardDialog())}
                            color="primary"
                            // className={classes.marginTop}
                            variant="contained"
                        >
                            CANCEL
                        </Button>
                        {/*<div*/}
                        {/*    className={clsx(classes.board, classes.newBoard, "flex flex-col items-center justify-center w-full h-full rounded py-24")}*/}
                        {/*    onClick={() => dispatch(Actions.newPersonalBoard())}*/}
                        {/*>*/}
                        <Button
                            type="submit"
                            color="primary"
                            disabled={!isFormValid}
                            // className={classes.marginTop}
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

export default NewBoardDialog;
