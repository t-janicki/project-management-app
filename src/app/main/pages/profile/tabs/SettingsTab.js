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
import * as Actions from '../../../store/actions';
import {useDispatch} from "react-redux";

const defaultFormState = {
    password: '',
    newPassword: '',
    confirmNewPassword: ''
};

function SettingsTab() {

    const dispatch = useDispatch();

    const {form} = useForm({defaultFormState});

    useEffect(() => {
        if (form.error && (form.error.password || form.error.newPassword || form.error.confirmNewPassword)) {
            formRef.current.updateInputsWithError({
                ...form.error
            });
            disableButton();
        }
    }, [form.error]);

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
        <div className="md:flex max-w-2xl">

            <div className="flex flex-col flex-1 md:pr-32">

                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full max-w-384">

                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    RESET PASSWORD
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent className="flex flex-col items-center justify-center p-32">

                            <Formsy
                                name="resetForm"
                                onValidSubmit={handleSubmit}
                                onValid={enableButton}
                                onInvalid={disableButton}
                                ref={formRef}
                                className="flex flex-col justify-center w-full"
                            >

                                <TextFieldFormsy
                                    className="mb-16"
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
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">vpn_key</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />

                                <TextFieldFormsy
                                    className="mb-16"
                                    type="password"
                                    name="newPassword"
                                    label="New Password"
                                    validations="equalsField:confirmNewPassword"
                                    validationErrors={{
                                        equalsField: 'Passwords do not match'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">vpn_key</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />

                                <TextFieldFormsy
                                    className="mb-16"
                                    type="password"
                                    name="confirmNewPassword"
                                    label="Confirm Password"
                                    validations="equalsField:newPassword"
                                    validationErrors={{
                                        equalsField: 'Passwords do not match'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">vpn_key</Icon></InputAdornment>
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

                        </CardContent>
                    </Card>

                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default SettingsTab;
