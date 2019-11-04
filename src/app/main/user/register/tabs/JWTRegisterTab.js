import React, {useEffect, useRef, useState} from 'react';
import Formsy from 'formsy-react';
import {TextFieldFormsy, CheckboxFormsy} from '@fuse';
import {Button, InputAdornment, Icon, Checkbox, FormControlLabel} from '@material-ui/core';
import * as authActions from '../../../../auth/store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL} from '../../../../apiURL';
import '../../../../../styles/social.css';
import {Link} from 'react-router-dom';

function JWTRegisterTab(props) {
    const dispatch = useDispatch();
    const register = useSelector(({auth}) => auth.register);

    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if (register.error && (register.error.username || register.error.password || register.error.email)) {
            formRef.current.updateInputsWithError({
                ...register.error
            });
            disableButton();
        }
    }, [register.error]);

    function disableButton() {
        setIsFormValid(false);
    }

    function enableButton() {
        setIsFormValid(true);
    }

    function handleSubmit(model) {
        dispatch(authActions.submitRegister(model));
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
                    name="name"
                    label="Display name"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><Icon className="text-20"
                                                                           color="action">account_circle</Icon></InputAdornment>
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="email"
                    label="Email"
                    validations="isEmail"
                    validationErrors={{
                        isEmail: 'Please enter a valid email'
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

                <CheckboxFormsy
                    className="font-medium flex flex-col items-center justify-center"
                    name="accept"
                    value={false}
                    label={<a href="https://www.termsfeed.com/privacy-policy/750f0425b5f5e3501fc45706c6c48fc4" target="_blank">Terms and privacy policy</a>}
                    validations="equals:true"
                    validationError="You need to accept"
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="w-full mx-auto mt-16 normal-case"
                    aria-label="REGISTER"
                    disabled={!isFormValid}
                    value="legacy"
                >
                    Register
                </Button>

            </Formsy>

            <Button className="loginBtn loginBtn--facebook w-full mx-auto mt-16 normal-case" href={FACEBOOK_AUTH_URL}>
                Sign up with Facebook
            </Button>

            <Button className="loginBtn loginBtn--google w-full mx-auto mt-16 normal-case" href={GOOGLE_AUTH_URL}>
                Sign up with Google
            </Button>

        </div>
    );
}

export default JWTRegisterTab;
