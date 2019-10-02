import React, {useEffect, useState} from 'react';
import {Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import ReactTable from "react-table";
import * as Actions from './../store/actions';
import CustomersMultiSelectMenu from "./CustomersMultiSelectMenu";
import history from '@history';

function CustomersList(props)
{
    const dispatch = useDispatch();
    const customers = useSelector(({eCommerceApp}) => eCommerceApp.customers.entities);

    const selectedCustomerIds = useSelector(({eCommerceApp}) => eCommerceApp.customers.selectedCustomerIds);
    const searchText = useSelector(({eCommerceApp}) => eCommerceApp.customers.searchText);

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

        if ( customers )
        {
            setFilteredData(getFilteredArray(customers, searchText));
        }
    }, [customers, searchText]);


    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no customers!
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
                                history.push('/customer/' + rowInfo.original.id);
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
                                    event.target.checked ? dispatch(Actions.selectAllCustomers()) : dispatch(Actions.deSelectAllCustomers());
                                }}
                                checked={selectedCustomerIds.length === Object.keys(customers).length && selectedCustomerIds.length > 0}
                                indeterminate={selectedCustomerIds.length !== Object.keys(customers).length && selectedCustomerIds.length > 0}
                            />
                        ),
                        accessor : "",
                        Cell     : row => {
                            return (<Checkbox
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    checked={selectedCustomerIds.includes(row.value.id)}
                                    onChange={() => dispatch(Actions.toggleInSelectedCustomers(row.value.id))}
                                />
                            )
                        },
                        className: "justify-center",
                        sortable : false,
                        width    : 64
                    },
                    {
                        Header   : () => (
                            selectedCustomerIds.length > 0 && (
                                <CustomersMultiSelectMenu />
                            )
                        ),
                        className: "justify-center",
                        width    : 64,
                        sortable : false
                    },
                    {
                        Header    : "First Name",
                        accessor  : "name",
                        filterable: true,
                    },
                    {
                        Header    : "Last Name",
                        accessor  : "lastName",
                        filterable: true,
                    },
                    {
                        Header    : "Email",
                        accessor  : "email",
                        filterable: true
                    },
                    {
                        Header    : "Phone",
                        accessor  : "phone",
                        filterable: true
                    },
                    {
                        Header    : "Created At",
                        accessor  : "createdAt",
                        filterable: false
                    },
                    {
                        Header: "",
                        width : 80,
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.openEditCustomerDialog(row.original));
                                    }}
                                >
                                    <Icon>edit</Icon>
                                </IconButton>
                            </div>
                        )
                    },
                    {
                        Header: "",
                        width : 80,
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.removeCustomer(row.original.id));
                                    }}
                                >
                                    <Icon>delete</Icon>
                                </IconButton>
                            </div>
                        )
                    }
                ]}
                defaultPageSize={10}
                noDataText="No contacts found"
            />
        </FuseAnimate>
    );
}

export default CustomersList;
