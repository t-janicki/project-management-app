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
    Grid, AppBar, Toolbar, DialogTitle
} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import * as Actions from './../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {FusePageSimple} from "../../../../../@fuse";
import {makeStyles} from "@material-ui/styles";
import Formsy from "formsy-react";
import {TextFieldFormsy} from '@fuse';
import {phoneRegex} from './../../../../utils';

const defaultFormState = {
    id: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    streetAndNumber: '',
    postCode: '',
    city: '',
    country: '',
};

function CustomerDialog(props) {

    const dispatch = useDispatch();
    const customerDialog = useSelector(({eCommerceApp}) => eCommerceApp.customers.customerDialog);

    const {form, setForm, handleChange} = useForm(defaultFormState);

    const initDialog = useCallback(
        () => {

            if (customerDialog.type === 'edit' && customerDialog.data) {
                setForm({...customerDialog.data});
            }

            if (customerDialog.type === 'new') {
                setForm({
                    ...defaultFormState,
                    ...customerDialog.data,
                });
            }
        },
        [customerDialog.data, customerDialog.type, setForm],
    );

    useEffect(() => {

        if (customerDialog.props.open) {
            initDialog();
        }

    }, [customerDialog.props.open, initDialog]);

    function closeComposeDialog() {
        customerDialog.type === 'edit' ? dispatch(Actions.closeEditCustomerDialog()) : dispatch(Actions.closeNewCustomerDialog());
    }

    function handleSubmit() {
        if (customerDialog.type === 'new') {
            dispatch(Actions.addCustomer(form));
        } else {
            dispatch(Actions.updateCustomer(form));
        }
    }

    // function handleRemove() {
    //     dispatch(Actions.removeCustomer(form.id));
    //     closeComposeDialog();
    // }

    const formRef = useRef(null);

    const [isFormValid, setIsFormValid] = useState(false);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    useEffect(() => {
        if (customerDialog.error && (customerDialog.error.name || customerDialog.error.lastName || customerDialog.error.email)) {
            formRef.current.updateInputsWithError({
                ...customerDialog.error
            });
            disableButton();
        }
    }, [customerDialog.error]);

    const useStyles = makeStyles({
        layoutRoot: {}
    });

    const classes = useStyles();

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...customerDialog.props}
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
                                    {customerDialog.type === 'new' ? 'NEW CUSTOMER' : 'EDIT CUSTOMER'}
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
                                    <Grid item xs={12} sm={6}>
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
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldFormsy
                                            id="lastName"
                                            label="Last name"
                                            name="lastName"
                                            className="mb-24"
                                            value={form.lastName || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                            validations={{
                                                maxLength: 50
                                            }}
                                            validationErrors={{
                                                maxLength: 'Max character length is 50'
                                            }}
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
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldFormsy
                                            id="streetAndNumber"
                                            label="Street"
                                            name="streetAndNumber"
                                            className="mb-24"
                                            value={form.streetAndNumber || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                            validations={{
                                                maxLength: 100
                                            }}
                                            validationErrors={{
                                                maxLength: 'Max character length is 100'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldFormsy
                                            id="postCode"
                                            label="Post Code"
                                            name="postCode"
                                            className="mb-24"
                                            value={form.postCode || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldFormsy
                                            id="city"
                                            label="City"
                                            name="city"
                                            className="mb-24"
                                            value={form.city || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                            validations={{
                                                maxLength: 30
                                            }}
                                            validationErrors={{
                                                maxLength: 'Max character length is 30'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldFormsy
                                            id="country"
                                            label="Country"
                                            name="country"
                                            className="mb-24"
                                            value={form.country || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                            validations={{
                                                maxLength: 30
                                            }}
                                            validationErrors={{
                                                maxLength: 'Max character length is 30'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        }
                    />
                </DialogContent>
                {customerDialog.type === 'new' ? (
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

export default CustomerDialog;
