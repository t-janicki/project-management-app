import React from 'react';
import {Icon, ListItem, TextField, Fab} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import {useDispatch} from "react-redux";
import * as Actions from './../../../../store/actions';

function CardAddChecklistItem(props) {
    const {form, handleChange, resetForm} = useForm({
        name: ""
    });

    const dispatch = useDispatch();

    function isFormInValid() {
        return form.name === '';
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (isFormInValid()) {
            return;
        }

        dispatch(Actions.newCheckItem(form)).then((data) => {
            props.onListItemAdd(data);
        });

        resetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <ListItem
                className="pr-0"
                style={{paddingLeft: 50}}
                dense
            >
                <TextField
                    className="flex flex-1"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Add an item"
                />
                <Fab
                    className="ml-16"
                    aria-label="Add"
                    size="small"
                    color="secondary"
                    type="submit"
                    disabled={isFormInValid()}
                >
                    <Icon>add</Icon>
                </Fab>
            </ListItem>
        </form>
    );
}

export default CardAddChecklistItem;
