import React, {useEffect, useState} from 'react';
import {Paper, ClickAwayListener, Icon, IconButton, InputAdornment, TextField, Typography} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';

function TeamDisplayName(props) {
    const dispatch = useDispatch();
    const team = useSelector(({scrumboardApp}) => scrumboardApp.team);

    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm, setForm} = useForm({
        displayName: team.displayName
    });
    useEffect(() => {
        if (!formOpen) {
            resetForm();
        }
    }, [formOpen, resetForm]);

    useEffect(() => {
        setForm({displayName: team.displayName});
    }, [team.displayName, setForm]);

    function handleOpenForm() {
        setFormOpen(true);
    }

    function handleCloseForm() {
        setFormOpen(false);
    }

    function isFormInvalid() {
        return form.displayName === '';
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (isFormInvalid()) {
            return;
        }
        console.log('action')
        // dispatch(Actions.renameBoard(team.id, form.title));
        handleCloseForm();
    }

    return (
        <div className="flex items-center min-w-0">
            {formOpen ? (
                <ClickAwayListener onClickAway={() => handleCloseForm()}>
                    <Paper className="p-4">
                        <form className="flex w-full" onSubmit={handleSubmit}>
                            <TextField
                                name="displayName"
                                value={form.displayName}
                                onChange={handleChange}
                                variant="outlined"
                                margin="none"
                                autoFocus
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type="submit"
                                                disabled={isFormInvalid()}
                                            >
                                                <Icon>check</Icon>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </form>
                    </Paper>
                </ClickAwayListener>
            ) : (
                <div>
                    <div className="flex items-center justify-between">
                        <Typography
                            className="text-16 font-600 cursor-pointer"
                            onClick={() => handleOpenForm()}
                            color="inherit"
                        >
                            {team.displayName}
                        </Typography>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeamDisplayName;
