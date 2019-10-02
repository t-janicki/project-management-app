import React, {useEffect, useState} from 'react';
import {Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import ReactTable from "react-table";
import * as Actions from './../store/actions';
import ProductsMultiSelectMenu from "./ProductsMultiSelectMenu";
import history from '@history';

function ProductsList(props)
{
    const dispatch = useDispatch();
    const products = useSelector(({eCommerceApp}) => eCommerceApp.products.entities);
    const selectedProductIds = useSelector(({eCommerceApp}) => eCommerceApp.products.selectedProductIds);
    const searchText = useSelector(({eCommerceApp}) => eCommerceApp.products.searchText);
    const [filteredData, setFilteredData] = useState(null);
    const role = useSelector(({auth}) => auth.user.userInfo.role);

    function validateAuthorization() {
        return role.toString() === 'Manager';
    }

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

        if ( products )
        {
            setFilteredData(getFilteredArray(products, searchText));
        }
    }, [products, searchText]);

    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no products!
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
                                history.push('/product/' + rowInfo.original.id);
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
                                    event.target.checked ? dispatch(Actions.selectAllProducts()) : dispatch(Actions.deSelectAllProducts());
                                }}
                                checked={selectedProductIds.length === Object.keys(products).length && selectedProductIds.length > 0}
                                indeterminate={selectedProductIds.length !== Object.keys(products).length && selectedProductIds.length > 0}
                            />
                        ),
                        accessor : "",
                        show: validateAuthorization(),
                        Cell     : row => {
                            return (<Checkbox
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    checked={selectedProductIds.includes(row.value.id)}
                                    onChange={() => dispatch(Actions.toggleInSelectedProducts(row.value.id))}
                                />
                            )
                        },
                        className: "justify-center",
                        sortable : false,
                        width    : 64
                    },
                    {
                        Header   : () => (
                            selectedProductIds.length > 0 && (
                                <ProductsMultiSelectMenu />
                            )
                        ),
                        className: "justify-center",
                        width    : 64,
                        sortable : false
                    },
                    {
                        Header    : "Name",
                        accessor  : "name",
                        filterable: true,
                    },
                    {
                        Header    : "Price",
                        accessor  : "priceTaxIncl",
                        filterable: false,
                    },
                    {
                        Header    : "Sku",
                        accessor  : "sku",
                        filterable: false
                    },
                    {
                        Header    : "Quantity",
                        accessor  : "quantity",
                        filterable: false
                    },
                    {
                        Header    : "Created At",
                        accessor  : "createdAt",
                        filterable: false
                    },
                    {
                        Header: "",
                        width : 80,
                        show: validateAuthorization(),
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.openEditProductDialog(row.original));
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
                        show: validateAuthorization(),
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.removeProduct(row.original.id));
                                    }}
                                >
                                    <Icon>delete</Icon>
                                </IconButton>
                            </div>
                        )
                    }
                ]}
                defaultPageSize={10}
                noDataText="No products found"
            />
        </FuseAnimate>
    );
}

export default ProductsList;
