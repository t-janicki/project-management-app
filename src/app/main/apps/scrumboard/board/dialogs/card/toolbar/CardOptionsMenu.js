import React, {useState} from 'react';
import {Icon, IconButton} from '@material-ui/core';
import ToolbarMenu from './ToolbarMenu';
import RemoveCardDialog from "../RemoveCardDialog";

function CardOptionsMenu(props) {
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
                <RemoveCardDialog
                    cardFormId={props.cardFormId}
                    boardId={props.boardId}
                />
            </ToolbarMenu>
        </div>
    );
}

export default CardOptionsMenu;
