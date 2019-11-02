import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Icon,
    IconButton,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import * as Actions from '../../../../store/actions';

const useStyles = makeStyles(theme => ({
    paper: {
        color: theme.palette.text.primary
    }
}));

function ConfirmDeleteTeam(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const team = useSelector(({scrumboardApp}) => scrumboardApp.team.data.teamInfo);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <div>
                <IconButton onClick={handleOpen}>
                    <Icon>delete</Icon>
                </IconButton>
                <Dialog
                    classes={{
                        paper: clsx(classes.paper, "max-w-sm w-full m-24")
                    }}
                    keepMounted
                    onClose={handleClose}
                    open={open}
                >
                    <DialogTitle component="div" className="p-0">
                        <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                            <div className="flex flex-1">
                                Confirm
                            </div>
                            <IconButton color="inherit" onClick={handleClose}>
                                <Icon>close</Icon>
                            </IconButton>
                        </Toolbar>
                    </DialogTitle>
                    <DialogContent>
                        <div>
                            <Typography>
                                Are you sure you want to delete team with all boards and cards?
                            </Typography>
                        </div>
                        <div className="mt-12 mb-12 float-right">
                            <Button
                                className="mr-12"
                                aria-label="remove"
                                variant="contained"
                                color="secondary"
                                type="submit"
                                size="small"
                                onClick={(ev) => {
                                    ev.stopPropagation();
                                    dispatch(Actions.deleteTeam(team.id));
                                }}
                            >
                                Delete
                            </Button>

                            <Button
                                className="mr-12"
                                aria-label="cancel"
                                variant="contained"
                                color="secondary"
                                type="submit"
                                size="small"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </React.Fragment>
    )
}

export default ConfirmDeleteTeam;
