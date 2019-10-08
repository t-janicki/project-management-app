import React, {useState} from 'react';
import {Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList} from '@material-ui/core';
import * as Actions from './../store/actions';
import {useDispatch, useSelector} from 'react-redux';

function CustomersMultiSelectMenu(props)
{
    const dispatch = useDispatch();
    const selectedCustomerIds = useSelector(({eCommerceApp}) => eCommerceApp.customers.selectedCustomerIds);

    const [anchorEl, setAnchorEl] = useState(null);

    function openSelectedCustomerMenu(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function closeSelectedCustomersMenu()
    {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <IconButton
                className="p-0"
                aria-owns={anchorEl ? 'selectedContactsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedCustomerMenu}
            >
                <Icon>more_horiz</Icon>
            </IconButton>
            <Menu
                id="selectedContactsMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeSelectedCustomersMenu}
            >
                <MenuList>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.removeCustomers(selectedCustomerIds));
                            closeSelectedCustomersMenu();
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

export default CustomersMultiSelectMenu;

