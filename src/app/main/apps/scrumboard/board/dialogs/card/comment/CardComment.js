import React from 'react';
import {TextField, Button, Avatar} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import * as Actions from '../../../../../../../../app/main/apps/scrumboard/store/actions';
import {useDispatch, useSelector} from "react-redux";

function CardComment(props) {
    const {form, handleChange, resetForm} = useForm(
        {
            message: ''
        }
    );

    const dispatch = useDispatch();

    const user = useSelector(({auth}) => auth.user.userInfo);

    function isFormInvalid() {
        return form.message === '';
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (isFormInvalid()) {
            return;
        }

        dispatch(Actions.newActivity(form, props.cardId)).then((data) => {
            props.onCommentAdd((data));
        });

        resetForm();
    }

    return (
        <form onSubmit={handleSubmit} className="flex">
            <Avatar className="w-32 h-32" alt={user.name} src={user.avatarUrl}/>
            <div className="flex flex-col items-start flex-1 pr-0 pl-16">
                <TextField
                    className="flex flex-1"
                    fullWidth
                    name="message"
                    row={3}
                    value={form.message}
                    onChange={handleChange}
                    variant="outlined"
                    label="Add comment"
                    placeholder="Write a comment..."
                />
                <Button
                    className="mt-16"
                    aria-label="send"
                    variant="contained"
                    color="secondary"
                    type="submit"
                    size="small"
                    disabled={isFormInvalid()}
                >
                    Send
                </Button>
            </div>
        </form>
    );
}

export default CardComment;
