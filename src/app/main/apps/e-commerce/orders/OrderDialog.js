import React, {useEffect, useCallback, useState} from 'react';
import {
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Icon,
    IconButton,
    Typography,
    Tab, Tabs, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import FuseUtils from '@fuse/FuseUtils';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {FusePageSimple} from "../../../../../@fuse";
import {makeStyles} from "@material-ui/styles";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {Link} from 'react-router-dom';
import ProductDialog from '../products/ProductDialog';

const defaultFormState = {
    id: '',
    orderNumber: '',
    orderType: '',
    subtotal: '',
    tax: '',
    discount: '',
    total: '',
    date: '',
    customer: [
        {
            firstName: '',
            lastName: '',
            phone: '',
            shippingAddress: [
                {
                    address: '',
                    lat: '',
                    lng: ''
                }
            ]
        }
    ],
};

function OrderDialog(props) {
    const dispatch = useDispatch();
    const orderDialog = useSelector(({eCommerceApp}) => eCommerceApp.orders.orderDialog);

    // if (orderDialog.data === null) {
    //     console.log('orderDialog.data' + orderDialog.data)
    // }

    const {form, handleChange, setForm} = useForm(defaultFormState);

    const initDialog = useCallback(
        () => {
            /**
             * Dialog type: 'edit'
             */
            if (orderDialog.type === 'edit' && orderDialog.data) {
                setForm({...orderDialog.data});
            }

            /**
             * Dialog type: 'new'
             */
            if (orderDialog.type === 'new') {
                setForm({
                    ...defaultFormState,
                    ...orderDialog.data,
                    id: FuseUtils.generateGUID()
                });
            }
        },
        [orderDialog.data, orderDialog.type, setForm],
    );

    useEffect(() => {
        /**
         * After Dialog Open
         */
        if (orderDialog.props.open) {
            initDialog();
        }

    }, [orderDialog.props.open, initDialog]);

    function closeComposeDialog() {
        orderDialog.type === 'edit' ? dispatch(Actions.closeEditOrderDialog()) : dispatch(Actions.closeNewOrderDialog());
    }

    function canBeSubmitted() {
        return (
            form.orderNumber.length > 0
        );
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (orderDialog.type === 'new') {
            dispatch(Actions.addOrder(form));
        } else {
            dispatch(Actions.updateOrder(form));
        }
        closeComposeDialog();
    }

    function handleRemove() {
        dispatch(Actions.removeOrder(form.id));
        closeComposeDialog();
    }

    const useStyles = makeStyles({
        layoutRoot: {}
    });

    const classes = useStyles();

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
    };

    const [map, setMap] = useState('shipping');

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...orderDialog.props}
            onClose={closeComposeDialog}
            fullWidth
            maxWidth="lg"
        >
            <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                <DialogContent classes={{root: "p-24"}}>
                    <FusePageSimple
                        classes={{
                            root: classes.layoutRoot,
                            toolbar: "px-16 sm:px-24"
                        }}
                        header={
                            <div className="p-24">
                                <Typography variant="subtitle1" color="inherit">
                                    {orderDialog.type === 'new' ? 'New Order' : 'Edit Order'}
                                </Typography>
                            </div>
                        }
                        contentToolbar={
                            <Tabs
                                value={selectedTab}
                                onChange={handleTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="off"
                                className="w-full h-64 border-b-1"
                            >
                                <Tab className="h-64" label="Order Summary"/>
                                <Tab className="h-64" label="Products"/>
                                <Tab className="h-64" label="Maps"/>
                            </Tabs>
                        }
                        content={
                            <div className="p-24">
                                {selectedTab === 0 && (
                                    <div>
                                        <div className="pb-48">

                                            <div className="pb-16 flex items-center">
                                                <Icon className="mr-16" color="action">account_circle</Icon>
                                                <Typography className="h2" color="textSecondary">Customer</Typography>
                                            </div>

                                            <div className="mb-24">

                                                <div className="table-responsive mb-16">
                                                    <table className="simple">
                                                        <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Company</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <Typography className="truncate">ERROR 2</Typography>
                                                            </td>
                                                            <td>
                                                                <Typography className="truncate">Customer phone</Typography>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <ExpansionPanel
                                                    elevation={1}
                                                    expanded={map === 'shipping'}
                                                    onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
                                                >
                                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                        <Typography className="font-600">Address</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails className="flex flex-col md:flex-row">
                                                        <Typography className="w-full md:max-w-256 mb-16 md:mb-0">ERROR</Typography>
                                                        <div className="w-full h-320">
                                                        </div>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {selectedTab === 1 && (
                                    <div>

                                        <div className="table-responsive">
                                            <table className="simple">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {orderDialog.data.products.map(product => (
                                                    <tr key={product.id}>
                                                        <td className="w-64">
                                                            {product.id}
                                                        </td>
                                                        <td>
                                                            <Typography
                                                                component={Link}
                                                                to={'/apps/e-commerce/products/' + product.id}
                                                                className="truncate"
                                                                style={{
                                                                    color         : 'inherit',
                                                                    textDecoration: 'underline'
                                                                }}
                                                            >
                                                                {product.name}
                                                                <ProductDialog/>
                                                            </Typography>
                                                        </td>
                                                        <td className="w-64 text-right">
                                                        <span className="truncate">
                                                            ${product.price}
                                                        </span>
                                                        </td>
                                                        <td className="w-64 text-right">
                                                        <span className="truncate">
                                                            {product.quantity}
                                                        </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                )}
                                {selectedTab === 2 && (
                                    <div>

                                        <div className="flex">
                                            <div className="min-w-48 pt-20">
                                                <Icon color="action">domain</Icon>
                                            </div>
                                            <TextField
                                                className="mb-24"
                                                label="Total"
                                                id="total"
                                                name="total"
                                                value={form.total}
                                                onChange={handleChange}
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </div>

                                        <div className="flex">
                                            <div className="min-w-48 pt-20">
                                                <Icon color="action">work</Icon>
                                            </div>
                                            <TextField
                                                className="mb-24"
                                                label="Job title"
                                                id="jobTitle"
                                                name="tax"
                                                value={form.tax}
                                                onChange={handleChange}
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        }
                    />
                </DialogContent>

                {orderDialog.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            type="submit"
                            disabled={!canBeSubmitted()}
                        >
                            Add
                        </Button>
                    </DialogActions>
                ) : (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={handleSubmit}
                            disabled={!canBeSubmitted()}
                        >
                            Save
                        </Button>
                        <IconButton
                            onClick={handleRemove}
                        >
                            <Icon>delete</Icon>
                        </IconButton>
                    </DialogActions>
                )}
            </form>
        </Dialog>
    );
}

export default OrderDialog;
