import React, {useRef, useState} from 'react';
import {
    IconButton,
    Icon,
    InputAdornment
} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../../../store/actions';
import Formsy from 'formsy-react';
import {TextFieldFormsy} from '../../../../../../../../@fuse/components/formsy';

const defaultFormState = {
    email: ''
};

function InviteForm(props) {
    const dispatch = useDispatch();

    const team = useSelector(({scrumboardApp}) => scrumboardApp.team.data.teamInfo);

    const {form, setForm, handleChange, resetForm} = useForm(defaultFormState);

    function handleSubmit() {
        dispatch(Actions.inviteToTeam(team.id, form.email));
        resetForm();
    }

    const formRef = useRef(null);

    const [isFormValid, setIsFormValid] = useState(false);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    return (
        <div>
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center w-full"
            >
                <div className="w-full mb-24 items-start">
                    <TextFieldFormsy
                        id="email"
                        className="flex flex-1 mt-16"
                        label="Invite to team"
                        name="email"
                        value={form.email || ''}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        validations="isEmail"
                        validationErrors={{
                            isEmail: 'Please enter a valid email'
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        type="submit"
                                        disabled={!isFormValid}
                                    >
                                        <Icon>check</Icon>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
            </Formsy>
        </div>
    )
}

export default InviteForm;
