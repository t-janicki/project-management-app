import React, {useEffect, useState} from 'react';
import {
    ClickAwayListener,
    Icon,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import ListOptionsMenu from "./ListOptionsMenu";


function BoardListHeader(props) {
    const dispatch = useDispatch();
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board.data);

    const [anchorEl, setAnchorEl] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm, setForm} = useForm({
        title: props.list.name
    });

    useEffect(() => {
        if (!formOpen) {
            resetForm();
        }
        if (anchorEl) {
            setAnchorEl(null);
        }

    }, [anchorEl, formOpen, resetForm]);

    useEffect(() => {
        setForm({title: props.list.name});
    }, [props.list.name, setForm]);

    function handleMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }

    function handleOpenForm() {
        setFormOpen(true);
    }

    function handleCloseForm() {
        setFormOpen(false);
    }

    function isFormInvalid() {
        return form.title !== '';
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (!isFormInvalid()) {
            return;
        }
        dispatch(Actions.renameList(board.id, props.list.id, form.title));
        handleCloseForm();
    }

    return (
        <div {...props.handleProps}>
            <div className="flex items-center justify-between h-64 pl-16 pr-8">
                <div className="flex items-center min-w-0">
                    {formOpen ? (
                        <ClickAwayListener onClickAway={() => handleCloseForm()}>
                            <form className="flex w-full" onSubmit={handleSubmit}>
                                <TextField
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    variant="outlined"
                                    margin="none"
                                    autoFocus
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    type="submit"
                                                    disabled={!isFormInvalid()}
                                                >
                                                    <Icon>check</Icon>
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </form>
                        </ClickAwayListener>
                    ) : (
                        <Typography
                            className="text-16 font-600 cursor-pointer"
                            onClick={() => handleOpenForm()}
                        >
                            {props.list.name}
                        </Typography>
                    )}

                </div>
                <div>
                    <ListOptionsMenu
                        onRemoveList={() => dispatch(Actions.removeList(board.id, props.list.id))}
                        onRenameList={() => handleOpenForm()}
                    />
                </div>
            </div>

        </div>
    );
}

export default BoardListHeader;
