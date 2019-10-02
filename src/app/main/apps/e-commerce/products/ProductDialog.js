import React, {useEffect, useCallback, useState, useRef} from 'react';
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
import {TextFieldFormsy} from '@fuse';
import Formsy from "formsy-react";

const defaultFormState = {
    id: '',
    name: '',
    priceTaxIncl: '',
    description: '',
    sku: '',
    quantity: '',
    width: '',
    height: '',
    depth: '',
    weight: '',
    extraShippingFee: '',
};

function ProductDialog(props) {
    const dispatch = useDispatch();
    const productDialog = useSelector(({eCommerceApp}) => eCommerceApp.products.productDialog);
    const {form, setForm, handleChange} = useForm(defaultFormState);

    console.log(form)
    const initDialog = useCallback(
        () => {

            if (productDialog.type === 'edit' && productDialog.data) {
                setForm({...productDialog.data});
            }

            if (productDialog.type === 'new') {
                setForm({
                    ...defaultFormState,
                    ...productDialog.data,
                });
            }
        },
        [productDialog.data, productDialog.type, setForm],
    );

    useEffect(() => {
        if (productDialog.props.open) {
            initDialog();
        }

    }, [productDialog.props.open, initDialog]);

    function closeComposeDialog() {
        productDialog.type === 'edit' ? dispatch(Actions.closeEditProductDialog()) : dispatch(Actions.closeNewProductDialog());
    }

    function handleSubmit() {
        if (productDialog.type === 'new') {
            dispatch(Actions.addProduct(form));
        } else {
            dispatch(Actions.updateProduct(form));
        }
    }

    const formRef = useRef(null);

    const [isFormValid, setIsFormValid] = useState(false);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    const useStyles = makeStyles({
        layoutRoot: {}
    });

    useEffect(() => {
        if (productDialog.error && (productDialog.error.name || productDialog.error.lastName || productDialog.error.email)) {
            formRef.current.updateInputsWithError({
                ...productDialog.error
            });
            disableButton();
        }
    }, [productDialog.error]);

    const classes = useStyles();

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...productDialog.props}
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
                                    {productDialog.type === 'new' ? 'NEW PRODUCT' : 'EDIT PRODUCT'}
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
                                    <Grid item xs={12}>
                                        <TextFieldFormsy
                                            id="name"
                                            className="mb-16"
                                            type="text"
                                            name="name"
                                            value={form.name || ''}
                                            label="Name"
                                            onChange={handleChange}
                                            validations={{
                                                minLength: 4,
                                                maxLength: 100
                                            }}
                                            validationErrors={{
                                                minLength: 'Min character length is 4',
                                                maxLength: 'Max character length is 100'
                                            }}
                                            variant="outlined"
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldFormsy
                                            id="description"
                                            className="mb-16"
                                            type="text"
                                            name="description"
                                            value={form.description || ''}
                                            onChange={handleChange}
                                            label="Description"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            validations={{
                                                maxLength: 250
                                            }}
                                            validationErrors={{
                                                maxLength: 'Max character length is 250'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldFormsy
                                            label="Price Tax Incl"
                                            className="mb-16"
                                            type="number"
                                            id="priceTaxIncl"
                                            name="priceTaxIncl"
                                            value={form.priceTaxIncl || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                            validations={{
                                                matchRegexp: /^[0-9]*(?:\.[0-9]*)?$/
                                            }}
                                            validationErrors={{
                                                matchRegexp: 'Only double positive value'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldFormsy
                                            label="Quantity"
                                            className="mb-16"
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            value={form.quantity || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                            validations={{
                                                matchRegexp: /^(0|\+?[1-9]\d*)$/
                                            }}
                                            validationErrors={{
                                                matchRegexp: 'Only positive integer value'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldFormsy
                                            label="SKU"
                                            className="mb-16"
                                            type="text"
                                            id="sku"
                                            name="sku"
                                            value={form.sku || ''}
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
                                    <Grid item xs={6}>
                                        <TextFieldFormsy
                                            label="Extra Shipping Fee"
                                            className="mb-16"
                                            type="number"
                                            id="extraShippingFee"
                                            name="extraShippingFee"
                                            value={form.extraShippingFee || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            fullWidth
                                            validations={{
                                                matchRegexp: /^[0-9]*(?:\.[0-9]*)?$/
                                            }}
                                            validationErrors={{
                                                matchRegexp: 'Only double positive value'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextFieldFormsy
                                            label="Width"
                                            className="mb-16"
                                            type="number"
                                            id="width"
                                            name="width"
                                            value={form.width || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            validations={{
                                                matchRegexp: /^[0-9]*(?:\.[0-9]*)?$/
                                            }}
                                            validationErrors={{
                                                matchRegexp: 'Only double positive value'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextFieldFormsy
                                            label="Height"
                                            className="mb-16"
                                            type="number"
                                            id="height"
                                            name="height"
                                            value={form.height || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            validations={{
                                                matchRegexp: /^[0-9]*(?:\.[0-9]*)?$/
                                            }}
                                            validationErrors={{
                                                matchRegexp: 'Only double positive value'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextFieldFormsy
                                            label="Depth"
                                            className="mb-16"
                                            type="number"
                                            id="depth"
                                            name="depth"
                                            value={form.depth || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            validations={{
                                                matchRegexp: /^[0-9]*(?:\.[0-9]*)?$/
                                            }}
                                            validationErrors={{
                                                matchRegexp: 'Only double positive value'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextFieldFormsy
                                            label="Weight"
                                            className="mb-16"
                                            type="number"
                                            id="weight"
                                            name="weight"
                                            value={form.weight || ''}
                                            onChange={handleChange}
                                            variant="outlined"
                                            validations={{
                                                matchRegexp: /^[0-9]*(?:\.[0-9]*)?$/
                                            }}
                                            validationErrors={{
                                                matchRegexp: 'Only double positive value'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        }
                    />
                </DialogContent>
                {productDialog.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            onClick={ev => closeComposeDialog()}
                            color="primary"
                            className={classes.marginTop}
                            variant="contained"
                        >
                            CANCEL
                        </Button>
                        <Button type="submit"
                                color="primary"
                                disabled={!isFormValid}
                                className={classes.marginTop}
                                variant="contained">
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
                        <Button type="submit"
                                color="primary"
                                disabled={!isFormValid}
                                className={classes.marginTop}
                                variant="contained">
                            SAVE
                        </Button>
                    </DialogActions>
                )}
            </Formsy>
        </Dialog>
    );
}

export default ProductDialog;
