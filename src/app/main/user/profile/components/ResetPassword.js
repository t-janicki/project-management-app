import React, {useEffect, useRef, useState} from 'react';
import {
    AppBar,
    Button,
    Card,
    CardContent,
    Icon,
    InputAdornment,
    Toolbar,
    Typography
} from '@material-ui/core';
import {FuseAnimateGroup, TextFieldFormsy} from '@fuse';
import {useForm} from '@fuse/hooks';
import Formsy from 'formsy-react';
import * as Actions from '../../store/actions';
import {useDispatch} from "react-redux";
import {FuseScrollbars} from "../../../../../@fuse";

const defaultFormState = {
    password: '',
    newPassword: '',
    confirmNewPassword: ''
};

function ResetPassword(props) {
    const dispatch = useDispatch();

    const {form} = useForm({defaultFormState});

    function handleSubmit(model) {
        dispatch(Actions.newPasswordRequest(model));
    }

    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    return (
        <div>
            {/*<FuseScrollbars className="p-16 flex flex-col flex-1 md:pr-32">*/}
                <Formsy
                    name="resetForm"
                    onValidSubmit={handleSubmit}
                    onValid={enableButton}
                    onInvalid={disableButton}
                    ref={formRef}
                    className="flex flex-col justify-center w-full"
                >

                    <TextFieldFormsy
                        className="flex flex-1 mt-16"
                        type="password"
                        name="password"
                        label="Password"
                        validations={{
                            minLength: 8
                        }}
                        validationErrors={{
                            minLength: 'Min character length is 8'
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <Icon className="text-20"
                                      color="action">vpn_key</Icon>
                            </InputAdornment>
                        }}
                        variant="outlined"
                        required
                    />

                    <TextFieldFormsy
                        className="flex flex-1 mt-16"
                        type="password"
                        name="newPassword"
                        label="New Password"
                        validations="equalsField:confirmNewPassword"
                        validationErrors={{
                            equalsField: 'Passwords do not match'
                        }}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <Icon className="text-20" color="action">vpn_key</Icon>
                                </InputAdornment>
                        }}
                        variant="outlined"
                        required
                    />

                    <TextFieldFormsy
                        className="flex flex-1 mt-16"
                        type="password"
                        name="confirmNewPassword"
                        label="Confirm Password"
                        validations="equalsField:newPassword"
                        validationErrors={{
                            equalsField: 'Passwords do not match'
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <Icon className="text-20"
                                      color="action">vpn_key</Icon>
                            </InputAdornment>
                        }}
                        variant="outlined"
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full mx-auto mt-16 normal-case"
                        aria-label="RESET"
                        disabled={!isFormValid}
                        value="legacy"
                    >
                        RESET
                    </Button>

                </Formsy>
            {/*</FuseScrollbars>*/}
        </div>
    )
}

export default ResetPassword;
