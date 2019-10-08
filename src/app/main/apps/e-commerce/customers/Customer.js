import React, {useEffect, useState} from 'react';
import {
    Tab,
    Tabs,
    Icon,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Tooltip
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GoogleMap from 'google-map-react';
import {FuseAnimate, FusePageCarded} from '@fuse';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from '../../../../../app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

function Marker(props) {
    return (
        <Tooltip title={props.text} placement="top">
            <Icon className="text-red">place</Icon>
        </Tooltip>
    );
}

function Customer(props) {
    const dispatch = useDispatch();
    const customer = useSelector(({eCommerceApp}) => eCommerceApp.customer.data);
    
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
        dispatch(Actions.getCustomer(props.match.params));
    }, [dispatch, props.match.params]);

    const [map, setMap] = useState('shipping');

    function handleChangeTab(event, tabValue) {
        setTabValue(tabValue);
    }

    return (
        <FusePageCarded
            classes={{
                toolbar: "p-0",
                header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                customer && (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-1 flex-col items-center sm:items-start">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link}
                                            role="button" to="/customers" color="inherit">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Customers
                                </Typography>
                            </FuseAnimate>

                            <div className="flex flex-col min-w-0 items-center sm:items-start">

                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography className="text-16 sm:text-20 truncate">
                                        {customer.name + ' ' + customer.lastName}
                                    </Typography>
                                </FuseAnimate>

                            </div>

                        </div>
                    </div>
                )
            }
            contentToolbar={
                <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    classes={{root: "w-full h-64"}}
                >
                    <Tab className="h-64 normal-case" label="Customer Info"/>
                    {/*<Tab className="h-64 normal-case" label="Orders History"/>*/}
                </Tabs>
            }
            content={
                customer && (
                    <div className="p-16 sm:p-24 max-w-2xl">
                        {tabValue === 0 &&
                        (
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
                                                    <th>Last name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Typography className="truncate">{customer.name}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{customer.lastName}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography className="truncate">{customer.email}</Typography>
                                                    </td>
                                                    <td>
                                                        <span className="truncate">{customer.phone}</span>
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
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <Typography className="font-600">Shipping Address</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="flex flex-col md:flex-row">
                                                <Typography
                                                    className="w-full md:max-w-256 mb-16 md:mb-0">
                                                    {customer.streetAndNumber + ', ' + customer.city}
                                                    {' ' + customer.postCode}
                                                </Typography>
                                                <div className="w-full h-320">
                                                    <GoogleMap
                                                        bootstrapURLKeys={{
                                                            key: process.env.REACT_APP_MAP_KEY
                                                        }}
                                                        defaultZoom={15}
                                                        defaultCenter={[customer.lat, customer.lng]}
                                                    >
                                                        <Marker
                                                            text={customer.address}
                                                            lat={customer.lat}
                                                            lng={customer.lng}
                                                        />
                                                    </GoogleMap>
                                                </div>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/*CUSTOMER ORDERS FOR LATER TO DO*/}
                        {/*{tabValue === 1 &&*/}
                        {/*(*/}
                        {/*    <div className="table-responsive">*/}
                        {/*        <table className="simple">*/}
                        {/*            <thead>*/}
                        {/*            <tr>*/}
                        {/*                <th>ID</th>*/}
                        {/*                <th>Order Number</th>*/}
                        {/*                <th>Order Status</th>*/}
                        {/*                <th>Date</th>*/}
                        {/*            </tr>*/}
                        {/*            </thead>*/}
                        {/*            <tbody>*/}
                        {/*            {customer.orders.map(order => (*/}
                        {/*                <tr key={order.id}>*/}
                        {/*                    <td className="w-64">*/}
                        {/*                        {order.id}*/}
                        {/*                    </td>*/}
                        {/*                    <td>*/}
                        {/*                        <Typography*/}
                        {/*                            component={Link}*/}
                        {/*                            to={'/apps/orders/' + order.id}*/}
                        {/*                            className="truncate"*/}
                        {/*                            style={{*/}
                        {/*                                color: 'inherit',*/}
                        {/*                                textDecoration: 'underline'*/}
                        {/*                            }}*/}
                        {/*                        >*/}
                        {/*                            {order.orderNumber}*/}
                        {/*                        </Typography>*/}
                        {/*                    </td>*/}
                        {/*                    <td>*/}
                        {/*                        <span className="truncate">*/}
                        {/*                            {order.orderStatus}*/}
                        {/*                        </span>*/}
                        {/*                    </td>*/}
                        {/*                    <td>*/}
                        {/*                        <span className="truncate">*/}
                        {/*                            {order.date}*/}
                        {/*                        </span>*/}
                        {/*                    </td>*/}
                        {/*                </tr>*/}
                        {/*            ))}*/}
                        {/*            </tbody>*/}
                        {/*        </table>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>
                )
            }
            innerScroll
        />
    )
}

export default withReducer('eCommerceApp', reducer)(Customer);
