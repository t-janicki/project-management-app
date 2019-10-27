import React, {useEffect, useState} from 'react';
import {Paper, ClickAwayListener, Icon, IconButton, InputAdornment, TextField, Typography} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function TeamDescription(props) {
    const dispatch = useDispatch();
    const team = useSelector(({scrumboardApp}) => scrumboardApp.team);

    const classes = useStyles();

    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm, setForm} = useForm({
        description: team.description
    });
    useEffect(() => {
        if (!formOpen) {
            resetForm();
        }
    }, [formOpen, resetForm]);

    useEffect(() => {
        setForm({description: team.description});
    }, [team.description, setForm]);

    function handleOpenForm() {
        setFormOpen(true);
    }

    function handleCloseForm() {
        setFormOpen(false);
    }

    function isFormInvalid() {
        return form.description === '';
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (isFormInvalid()) {
            return;
        }
        console.log('action')
        // dispatch(Actions.renameBoard(team.id, form.title));
        handleCloseForm();
    }

    return (
        <div className="flex items-center min-w-0">
            {formOpen ? (
                <ClickAwayListener onClickAway={() => handleCloseForm()}>
                    <Paper className="p-4">
                        <form className="flex w-full" onSubmit={handleSubmit}>
                            <TextField
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                variant="outlined"
                                margin="none"
                                autoFocus
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type="submit"
                                                disabled={isFormInvalid()}
                                            >
                                                <Icon>check</Icon>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </form>
                    </Paper>
                </ClickAwayListener>
            ) : (
                <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Team Description</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className="flex items-center justify-between">
                            <Typography
                                className="text-16 font-600 cursor-pointer justify-center"
                                onClick={() => handleOpenForm()}
                                color="inherit"
                            >
                                Team description
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    non leo rutrum, finibus lorem vel, gravida nulla.
                                    Integer sollicitudin auctor commodo.
                                    Duis porttitor neque tempus ex faucibus eleifend non mollis nunc.
                                    {team.description}
                                </div>
                            </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    {/*<div className="flex items-center justify-between">*/}
                    {/*    <Typography*/}
                    {/*        className="text-16 font-600 cursor-pointer justify-center"*/}
                    {/*        onClick={() => handleOpenForm()}*/}
                    {/*        color="inherit"*/}
                    {/*    >*/}
                    {/*        Team description*/}
                    {/*        <div>*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                    {/*            non leo rutrum, finibus lorem vel, gravida nulla.*/}
                    {/*            Integer sollicitudin auctor commodo.*/}
                    {/*            Duis porttitor neque tempus ex faucibus eleifend non mollis nunc.*/}
                    {/*            {team.description}*/}
                    {/*        </div>*/}
                    {/*    </Typography>*/}
                    {/*</div>*/}
                </div>
            )}
        </div>
    );
}

export default TeamDescription;
