import React, {useState} from 'react';
import {Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList} from '@material-ui/core';
import * as Actions from './../store/actions';
import {useDispatch, useSelector} from 'react-redux';

function ProductsMultiSelectMenu(props)
{
    const dispatch = useDispatch();
    const selectedProductIds = useSelector(({eCommerceApp}) => eCommerceApp.products.selectedProductIds);

    const [anchorEl, setAnchorEl] = useState(null);

    function openSelectedProductMenu(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function closeSelectedProductsMenu()
    {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <IconButton
                className="p-0"
                aria-owns={anchorEl ? 'selectedProductsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedProductMenu}
            >
                <Icon>more_horiz</Icon>
            </IconButton>
            <Menu
                id="selectedProductsMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeSelectedProductsMenu}
            >
                <MenuList>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.removeProducts(selectedProductIds));
                            closeSelectedProductsMenu();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>delete</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Remove"/>
                    </MenuItem>
                </MenuList>
            </Menu>
        </React.Fragment>
    );
}

export default ProductsMultiSelectMenu;
