import React, {useState} from 'react';
import {Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList} from '@material-ui/core';
import * as Actions from './../store/actions';
import {useDispatch, useSelector} from 'react-redux';

function PersonnelMultiSelectMenu(props)
{
    const dispatch = useDispatch();
    const selectedPersonnelIds = useSelector(({eCommerceApp}) => eCommerceApp.personnel.selectedPersonnelIds);

    const [anchorEl, setAnchorEl] = useState(null);

    function openSelectedPersonnelMenu(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function closeSelectedPersonnelMenu()
    {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <IconButton
                className="p-0"
                aria-owns={anchorEl ? 'selectedPersonnelMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedPersonnelMenu}
            >
                <Icon>more_horiz</Icon>
            </IconButton>
            <Menu
                id="selectedPersonnelMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeSelectedPersonnelMenu}
            >
                <MenuList>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.removePersonnel(selectedPersonnelIds));
                            closeSelectedPersonnelMenu();
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

export default PersonnelMultiSelectMenu;

