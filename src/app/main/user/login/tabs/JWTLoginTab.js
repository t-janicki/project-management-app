import React, {useEffect, useRef, useState} from 'react';
import {Button, InputAdornment, Icon, makeStyles} from '@material-ui/core';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import * as authActions from '../../../../auth/store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL} from "../../../../apiURL";
import '../../../../../styles/social.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function JWTLoginTab(props) {
    const dispatch = useDispatch();
    const login = useSelector(({auth}) => auth.login);

    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if (login.error && (login.error.email || login.error.password)) {
            formRef.current.updateInputsWithError({
                ...login.error
            });
            disableButton();
        }
    }, [login.error]);

    function disableButton() {
        setIsFormValid(false);
    }

    function enableButton() {
        setIsFormValid(true);
    }

    function handleSubmit(model) {
        dispatch(authActions.submitLogin(model));
    }

    return (
        <div className="w-full">
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center w-full"
            >
                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="email"
                    label="Email"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon className="text-20"
                                                                           color="action">email</Icon></InputAdornment>
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="password"
                    name="password"
                    label="Password"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
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
                    aria-label="LOG IN"
                    disabled={!isFormValid}
                    value="legacy"
                >
                    Login
                </Button>

            </Formsy>

            <Button className="loginBtn loginBtn--facebook w-full mx-auto mt-16 normal-case" href={FACEBOOK_AUTH_URL}>
                Login with Facebook
            </Button>

            <Button className="loginBtn loginBtn--google w-full mx-auto mt-16 normal-case" href={GOOGLE_AUTH_URL}>
                Login with Google
            </Button>

        </div>
    );
}

export default JWTLoginTab;
