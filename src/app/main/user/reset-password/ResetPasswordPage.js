import React, {useRef, useState} from 'react';
import {Button, Card, CardContent, Icon, InputAdornment, TextField, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate, TextFieldFormsy} from '@fuse';
import {useForm} from '@fuse/hooks';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import MainSite from "../MainSite";
import Formsy from "formsy-react";
import * as authActions from '../../../auth/store/actions';
import * as Actions from '../store/actions';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color: theme.palette.primary.contrastText
    }
}));

function ResetPasswordPage(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const params = new URLSearchParams(props.location.search);
    const token = params.get('token');

    const {form, handleChange, resetForm} = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);


    function disableButton() {
        setIsFormValid(false);
    }

    function enableButton() {
        setIsFormValid(true);
    }

    function handleSubmit(form) {
        dispatch((Actions.resetPassword(form, token)));
    }

    return (
        <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0")}>

            <MainSite/>

            <FuseAnimate animation={{translateX: [0, '100%']}}>

                <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                    <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128">

                        <Typography variant="h6" className="md:w-full mb-32">RESET YOUR PASSWORD</Typography>

                        <Formsy
                            onValidSubmit={handleSubmit}
                            onValid={enableButton}
                            onInvalid={disableButton}
                            ref={formRef}
                            className="flex flex-col justify-center w-full"
                        >

                            {/*<TextFieldFormsy*/}
                            {/*    className="mb-16"*/}
                            {/*    type="text"*/}
                            {/*    name="email"*/}
                            {/*    label="Email"*/}
                            {/*    validations="isEmail"*/}
                            {/*    validationErrors={{*/}
                            {/*        isEmail: 'Please enter a valid email'*/}
                            {/*    }}*/}
                            {/*    InputProps={{*/}
                            {/*        endAdornment: <InputAdornment position="end"><Icon className="text-20"*/}
                            {/*                                                           color="action">email</Icon></InputAdornment>*/}
                            {/*    }}*/}
                            {/*    variant="outlined"*/}
                            {/*    required*/}
                            {/*/>*/}

                            <TextFieldFormsy
                                className="mb-16"
                                type="password"
                                name="password"
                                label="Password"
                                validations={{
                                    equalsField: 'password-confirm',
                                    minLength: 8
                                }}
                                validationErrors={{
                                    equalsField: 'Passwords do not match',
                                    minLength: 'Min character length is 8'
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end"><Icon className="text-20"
                                                                                       color="action">vpn_key</Icon></InputAdornment>
                                }}
                                variant="outlined"
                                required
                            />

                            <TextFieldFormsy
                                className="mb-16"
                                type="password"
                                name="password-confirm"
                                label="Confirm Password"
                                validations={{
                                    equalsField: 'password',
                                    minLength: 8
                                }}
                                validationErrors={{
                                    equalsField: 'Passwords do not match',
                                    minLength: 'Min character length is 8'
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end"><Icon className="text-20"
                                                                                       color="action">vpn_key</Icon></InputAdornment>
                                }}
                                variant="outlined"
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="w-full mx-auto mt-16 normal-case"
                                aria-label="RESET_PASSWORD"
                                disabled={!isFormValid}
                                value="legacy"
                            >
                                Reset Password
                            </Button>

                        </Formsy>

                        <div className="flex flex-col items-center justify-center pt-32 pb-24">
                            <Link className="font-medium" to="/login">Go back to login</Link>
                        </div>

                    </CardContent>
                </Card>
            </FuseAnimate>
        </div>
    );
}

export default ResetPasswordPage;
