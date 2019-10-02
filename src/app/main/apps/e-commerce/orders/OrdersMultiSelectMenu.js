import React, {useState} from 'react';
import {Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList} from '@material-ui/core';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';

function OrdersMultiSelectMenu(props)
{
    const dispatch = useDispatch();
    const selectedOrderIds = useSelector(({eCommerceApp}) => eCommerceApp.orders.selectedOrderIds);

    const [anchorEl, setAnchorEl] = useState(null);

    function openSelectedOrderMenu(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function closeSelectedOrdersMenu()
    {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <IconButton
                className="p-0"
                aria-owns={anchorEl ? 'selectedOrdersMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedOrderMenu}
            >
                <Icon>more_horiz</Icon>
            </IconButton>
            <Menu
                id="selectedOrdersMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeSelectedOrdersMenu}
            >
                <MenuList>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.removeOrders(selectedOrderIds));
                            closeSelectedOrdersMenu();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>delete</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Remove"/>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.setOrdersDaily(selectedOrderIds));
                            closeSelectedOrdersMenu();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>star</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Daily"/>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.unSetDailyOrders(selectedOrderIds));
                            closeSelectedOrdersMenu();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>star_border</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Normal"/>
                    </MenuItem>
                </MenuList>
            </Menu>
        </React.Fragment>
    );
}

export default OrdersMultiSelectMenu;

