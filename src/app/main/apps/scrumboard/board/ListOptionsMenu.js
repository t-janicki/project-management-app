import React, {useState} from 'react';
import {Icon, IconButton, ListItemIcon, ListItemText, MenuItem} from '@material-ui/core';
import ToolbarMenu from "./dialogs/card/toolbar/ToolbarMenu";
import RemoveListDialog from "./RemoveListDialog";

function ListOptionsMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    function handleMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
                <Icon>more_horiz</Icon>
            </IconButton>
            <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
                <RemoveListDialog
                    boardId={props.boardId}
                    listId={props.listId}
                />
                <MenuItem onClick={props.onRenameList} onMouseLeave={handleMenuClose}>
                    <ListItemIcon className="min-w-40">
                        <Icon>edit</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Rename List"/>
                </MenuItem>
            </ToolbarMenu>
        </div>
    );
}

export default ListOptionsMenu;
