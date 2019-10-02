import React, {useEffect, useState} from 'react';
import {
    Tab,
    Tabs,
    Icon,
    Typography,
} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from '../../../../../app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

function Product(props) {
    const dispatch = useDispatch();
    const product = useSelector(({eCommerceApp}) => eCommerceApp.product.data);
    console.log(product)
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
        dispatch(Actions.getProduct(props.match.params));
    }, [dispatch, props.match.params]);

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
                product && (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-1 flex-col items-center sm:items-start">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link}
                                            role="button" to="/products" color="inherit">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Products
                                </Typography>
                            </FuseAnimate>

                            <div className="flex flex-col min-w-0 items-center sm:items-start">

                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography className="text-16 sm:text-20 truncate">
                                        {product.name}
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
                    <Tab className="h-64 normal-case" label="Product Details"/>
                    <Tab className="h-64 normal-case" label="Shipping"/>
                </Tabs>
            }
            content={
                product && (
                    <div className="p-16 sm:p-24 max-w-2xl">
                        {tabValue === 0 &&
                        (
                            <div>
                                <div className="pb-48">

                                    <div className="pb-16 flex items-center">
                                        <Typography className="h2" color="textSecondary">Product</Typography>
                                    </div>

                                    <div className="mb-24">

                                        <div className="table-responsive mb-16">
                                            <table className="simple">
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Typography className="truncate">{product.name}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{product.description}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{product.priceTaxIncl}</Typography>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="pb-16 flex items-center">
                                        {/*<Icon className="mr-16" color="action">shopping_basket</Icon>*/}
                                        <Typography className="h2" color="textSecondary">Inventory</Typography>
                                    </div>

                                    <table className="simple">
                                        <thead>
                                        <tr>
                                            <th>Quantity</th>
                                            <th>SKU</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <Typography className="truncate">{product.productInventoryDTO.quantity}</Typography>
                                            </td>
                                            <td>
                                                <Typography
                                                    className="truncate">{product.productInventoryDTO.sku}</Typography>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        )}
                        {tabValue === 1 &&
                        (
                            <div>
                                <div className="pb-48">

                                    <div className="pb-16 flex items-center">
                                        <Typography className="h2" color="textSecondary">Shipping Details</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <div className="table-responsive">
                                            <table className="simple">
                                                <thead>
                                                <tr>
                                                    <th>Width</th>
                                                    <th>Height</th>
                                                    <th>Depth</th>
                                                    <th>Weight</th>
                                                    <th>Extra Shipping Fee</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Typography className="truncate">{product.productShippingDetailsDTO.width}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{product.productShippingDetailsDTO.height}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{product.productShippingDetailsDTO.depth}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{product.productShippingDetailsDTO.weight}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{product.productShippingDetailsDTO.extraShippingFee}</Typography>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
            innerScroll
        />
    )
}

export default withReducer('eCommerceApp', reducer)(Product);
