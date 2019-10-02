import React, {useEffect, useState} from 'react';
import {Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import ReactTable from "react-table";
import * as Actions from '../store/actions';
import OrdersMultiSelectMenu from "./OrdersMultiSelectMenu";
import history from '@history';

function OrdersList(props)
{
    const dispatch = useDispatch();
    const orders = useSelector(({eCommerceApp}) => eCommerceApp.orders.entities);
    const selectedOrderIds = useSelector(({eCommerceApp}) => eCommerceApp.orders.selectedOrderIds);
    const searchText = useSelector(({eCommerceApp}) => eCommerceApp.orders.searchText);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        function getFilteredArray(entities, searchText)
        {
            const arr = Object.keys(entities).map((id) => entities[id]);
            if ( searchText.length === 0 )
            {
                return arr;
            }
            return FuseUtils.filterArrayByString(arr, searchText);
        }

        if ( orders )
        {
            setFilteredData(getFilteredArray(orders, searchText));
        }
    }, [orders, searchText]);


    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no orders!
                </Typography>
            </div>
        );
    }

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
            <ReactTable
                className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
                getTrProps={(state, rowInfo, column) => {
                    return {
                        className: "cursor-pointer",
                        onClick  : (e, handleOriginal) => {
                            if ( rowInfo )
                            {
                                history.push('/order/' + rowInfo.original.id);
                            }
                        }
                    }
                }}
                data={filteredData}
                columns={[
                    {
                        Header   : () => (
                            <Checkbox
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                                onChange={(event) => {
                                    event.target.checked ? dispatch(Actions.selectAllOrders()) : dispatch(Actions.deSelectAllOrders());
                                }}
                                checked={selectedOrderIds.length === Object.keys(orders).length && selectedOrderIds.length > 0}
                                indeterminate={selectedOrderIds.length !== Object.keys(orders).length && selectedOrderIds.length > 0}
                            />
                        ),
                        accessor : "",
                        Cell     : row => {
                            return (<Checkbox
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    checked={selectedOrderIds.includes(row.value.id)}
                                    onChange={() => dispatch(Actions.toggleInSelectedOrders(row.value.id))}
                                />
                            )
                        },
                        className: "justify-center",
                        sortable : false,
                        width    : 64
                    },
                    {
                        Header   : () => (
                            selectedOrderIds.length > 0 && (
                                <OrdersMultiSelectMenu />
                            )
                        ),
                        className: "justify-center",
                        width    : 45,
                        sortable : false
                    },
                    {
                        Header    : "Order number",
                        accessor  : "orderNumber",
                        filterable: true,
                    },
                    {
                        Header    : "Order Type",
                        accessor  : "orderType",
                        filterable: true,
                    },
                    {
                        Header    : "Total",
                        accessor  : "total",
                        filterable: true
                    },
                    {
                        Header    : "Customer First name",
                        accessor  : "customer.firstName",
                        filterable: true
                    },
                    {
                        Header    : "Customer Last name",
                        accessor  : "customer.lastName",
                        filterable: true
                    },
                    {
                        Header: "",
                        width : 160,
                        filterable: false,
                        Cell  : row => (
                            <div className="flex items-center">
                                {/*DAILY ORDERS FEATURE FOR LATER */}
                                {/*<IconButton*/}
                                {/*    onClick={(ev) => {*/}
                                {/*        ev.stopPropagation();*/}
                                {/*        dispatch(Actions.addDailyOrder(row.original.id))*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    {ordersDaily.orders && ordersDaily.orders.includes(row.original.id) ? (*/}
                                {/*        <Icon>add_circle</Icon>*/}
                                {/*    ) : (*/}
                                {/*        <Icon>add_circle_outline</Icon>*/}
                                {/*    )}*/}
                                {/*</IconButton>*/}
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.openEditOrderDialog(row.original));
                                    }}
                                >
                                    <Icon>edit</Icon>
                                </IconButton>
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.removeOrder(row.original.id));
                                    }}
                                >
                                    <Icon>delete</Icon>
                                </IconButton>
                            </div>
                        )
                    },
                ]}
                defaultPageSize={10}
                noDataText="No orders found"
            />
        </FuseAnimate>
    );
}

export default OrdersList;
