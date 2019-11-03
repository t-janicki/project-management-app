/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useCallback, useRef, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Icon,
    IconButton,
    Typography,
    Grid,
    AppBar,
    Toolbar,
    DialogTitle
} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import * as AccountActions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {FusePageSimple} from '../../../../@fuse';
import {makeStyles} from "@material-ui/styles";
import Formsy from "formsy-react";
import {TextFieldFormsy} from '../../../../@fuse';
import {phoneRegex} from './../../../utils';

const defaultFormState = {
    id: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    streetAndNumber: '',
    postCode: '',
    city: '',
    country: '',
};

function AccountDialog(props) {

    const dispatch = useDispatch();
    const accountDialog = useSelector(({account}) => account.account.accountDialog);

    const {form, setForm, handleChange} = useForm(defaultFormState);

    const initDialog = useCallback(
        () => {
            if (accountDialog.type === 'edit' && accountDialog.data) {
                setForm({...accountDialog.data});
            }

            if (accountDialog.type === 'new') {
                setForm({
                    ...defaultFormState,
                    ...accountDialog.data,
                });
            }
        },
        [accountDialog.data, accountDialog.type, setForm],
    );

    useEffect(() => {

        if (accountDialog.props.open) {
            initDialog();
        }

    }, [accountDialog.props.open, initDialog]);

    function closeComposeDialog() {
        dispatch(AccountActions.closeUserEditDialog());
    }

    function handleSubmit() {
        dispatch(AccountActions.updateUserInfo(form));
    }

    const formRef = useRef(null);

    const [isFormValid, setIsFormValid] = useState(false);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    useEffect(() => {
        if (accountDialog.error && (accountDialog.error.name || accountDialog.error.lastName || accountDialog.error.email)) {
            formRef.current.updateInputsWithError({
                ...accountDialog.error
            });
            disableButton();
        }
    }, [accountDialog.error]);

    const useStyles = makeStyles({
        layoutRoot: {}
    });

    const classes = useStyles();

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...accountDialog.props}
            onClose={closeComposeDialog}
            fullWidth
            maxWidth="sm"
        >
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center w-full"
            >
                <DialogTitle component="div" className="p-0">
                    <AppBar position="static" elevation={1}>
                        <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                            <div className="flex flex-1">
                                <Typography variant="subtitle1" color="inherit">
                                    EDIT
                                </Typography>
                            </div>
                            <IconButton color="inherit" onClick={ev => closeComposeDialog()}>
                                <Icon>close</Icon>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </DialogTitle>

                <DialogContent classes={{root: "p-24"}}>

                    <FusePageSimple
                        classes={{
                            root: classes.layoutRoot,
                            toolbar: "px-16 sm:px-24"
                        }}
                        content={
                            <div className="p-24">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <TextFieldFormsy
                                            id="name"
                                            label="Name"
                                            name="name"
                                            className="mb-24"
                                            value={form.name || ''}
                                            onChange={handleChange}
                                            validations={{
                                                minLength: 4,
                                                maxLength: 50
                                            }}
                                            validationErrors={{
                                                minLength: 'Min character length is 4',
                                                maxLength: 'Max character length is 50'
                                            }}
                                            variant="outlined"
                                            required
                                            fullWidth

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextFieldFormsy
                                            id="jobTitle"
                                            label="Job Title"
                                            name="jobTitle"
                                            className="mb-24"
                                            value={form.jobTitle || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldFormsy
                                            id="email"
                                            label="E-mail"
                                            name="email"
                                            className="mb-24"
                                            value={form.email || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            validations="isEmail"
                                            validationErrors={{
                                                isEmail: 'Please enter a valid email'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldFormsy
                                            id="phone"
                                            label="Phone"
                                            name="phone"
                                            type="text"
                                            className="mb-24"
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
                                    </Grid>
                                </Grid>
                            </div>
                        }
                    />
                </DialogContent>
                {accountDialog.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            onClick={ev => closeComposeDialog()}
                            color="primary"
                            className={classes.marginTop}
                            variant="contained"
                        >
                            CANCEL
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            disabled={!isFormValid}
                            className={classes.marginTop}
                            variant="contained"
                        >
                            ADD
                        </Button>
                    </DialogActions>
                ) : (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            onClick={ev => closeComposeDialog()}
                            color="primary"
                            className={classes.marginTop}
                            variant="contained"
                        >
                            CANCEL
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            disabled={!isFormValid}
                            className={classes.marginTop}
                            variant="contained"
                        >
                            SAVE
                        </Button>
                    </DialogActions>
                )}
            </Formsy>
        </Dialog>
    );
}

export default AccountDialog;
