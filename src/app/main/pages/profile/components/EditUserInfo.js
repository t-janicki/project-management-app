import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
    AppBar, Avatar,
    Button,
    Dialog, DialogActions,
    DialogTitle,
    Icon,
    IconButton,
    Slide,
    Toolbar, Typography
} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import {useForm} from '@fuse/hooks';
import Formsy from 'formsy-react';
import {useDispatch, useSelector} from 'react-redux';
import {TextFieldFormsy} from "../../../../../@fuse/components/formsy";
import * as Actions from '../../../user/store/actions';
import {phoneRegex} from "../../../../utils";

function EditUserInfo(props) {
    const dispatch = useDispatch();

    const user = useSelector(({account}) => account.account.data.userInfo);

    const {form, setForm, handleChange, resetForm} = useForm({
        firstName: '',
        lastName: '',
        displayName: '',
        phone: ''
    });

    useEffect(() => {
        setForm(user);
    }, [user, setForm]);

    function handleSubmit() {
        console.log(form)
        dispatch(Actions.updateUserInfo(form));
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
        <React.Fragment>
            {/*<FuseScrollbars className="p-16 flex flex-col flex-1 md:pr-32">*/}
                <Formsy
                    onValidSubmit={handleSubmit}
                    onValid={enableButton}
                    onInvalid={disableButton}
                    ref={formRef}
                    className="flex flex-col justify-center w-full"
                >
                    <div className="w-full mb-24 items-start">
                        <TextFieldFormsy
                            id="displayName"
                            className="flex flex-1 mt-16"
                            label="Display Name"
                            name="displayName"
                            value={form.displayName || ''}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            required
                            validations={{
                                minLength: 4,
                            }}
                            validationErrors={{
                                minLength: 'Min character length is 4',
                            }}
                        />
                        <TextFieldFormsy
                            id="firstName"
                            className="flex flex-1 mt-16"
                            label="First Name"
                            name="firstName"
                            value={form.firstName || ''}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            validations={{
                                minLength: 4,
                            }}
                            validationErrors={{
                                minLength: 'Min character length is 4',
                            }}
                        />
                        <TextFieldFormsy
                            id="lastName"
                            className="flex flex-1 mt-16"
                            label="Last Name"
                            name="lastName"
                            value={form.lastName || ''}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            validations={{
                                minLength: 4,
                            }}
                            validationErrors={{
                                minLength: 'Min character length is 4',
                            }}
                        />
                        <TextFieldFormsy
                            id="phone"
                            className="flex flex-1 mt-16"
                            label="Phone number"
                            name="phone"
                            value={form.phone || ''}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            validations={{
                                matchRegexp: phoneRegex
                            }}
                            validationErrors={{
                                matchRegexp: 'Please enter valid phone number'
                            }}
                        />
                        <Button
                            className="mt-16 float-right"
                            aria-label="save"
                            variant="contained"
                            color="secondary"
                            type="submit"
                            size="small"
                            disabled={!isFormValid}
                        >
                            Save
                        </Button>
                    </div>
                </Formsy>

            {/*</FuseScrollbars>*/}
        </React.Fragment>
    )
}
export default EditUserInfo;
