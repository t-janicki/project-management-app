import React, {useCallback, useRef, useState} from 'react';
import {
    AppBar,
    Button,
    Dialog,
    DialogTitle,
    Icon,
    IconButton,
    Slide,
    Toolbar
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useDispatch, useSelector} from 'react-redux';
import {fade} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import {FuseScrollbars} from '@fuse';
import {useForm} from '@fuse/hooks';
import * as Actions from '../../../../store/actions';
import MembersList from './MembersList';
import Formsy from 'formsy-react';
import {TextFieldFormsy} from '../../../../../../../../@fuse/components/formsy';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const defaultFormState = {
    displayName: '',
    description: ''
};

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    board: {
        cursor: 'pointer',
        boxShadow: theme.shadows[0],
        transitionProperty: 'box-shadow border-color',
        transitionDuration: theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        background: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        '&:hover': {
            boxShadow: theme.shadows[6]
        }
    },
    newBoard: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.6),
        '&:hover': {
            borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.8)
        }
    },
    button: {
        position: 'absolute',
        right: 0,
        top: 600,
        minWidth: 48,
        width: 48,
        height: 48,
        opacity: .9,
        padding: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        zIndex: 999,
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[500],
            opacity: 1
        }
    },
    '@keyframes rotating': {
        from: {
            transform: 'rotate(0deg)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    },
    buttonIcon: {
        animation: '$rotating 3s linear infinite'
    },
    dialogPaper: {
        position: 'fixed',
        width: 600,
        maxWidth: '90vw',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        top: 0,
        height: '100%',
        minHeight: '100%',
        bottom: 0,
        right: 0,
        margin: 0,
        zIndex: 1000,
        borderRadius: 0
    }
}));

function TeamSettingsDialog(props) {
    const classes = useStyles(props);

    const dispatch = useDispatch();

    const team = useSelector(({scrumboardApp}) => scrumboardApp.team.data.teamInfo);

    const {form, setForm, handleChange, resetForm} = useForm(defaultFormState);

    const initDialog = useCallback(() => {
        if (team) {
            setForm({...team})
        }
    }, [team, setForm]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);

        if (team) {
            initDialog();
        }
    };

    const handleClose = () => {
        setOpen(false);

        resetForm();
    };

    function handleSubmit() {
        dispatch(Actions.updateTeamInfo(form));
    }

    const formRef = useRef(null);

    const [isFormValid, setIsFormValid] = useState(false);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    return (
        <div>
            <IconButton color="inherit" onClick={handleOpen}>
                <Icon>settings</Icon>
            </IconButton>
            <Dialog
                TransitionComponent={Transition}
                aria-labelledby="settings-panel"
                aria-describedby="settings"
                open={open}
                keepMounted
                onClose={handleClose}
                BackdropProps={{invisible: true}}
                classes={{
                    paper: classes.dialogPaper
                }}
            >
                <DialogTitle component="div" className="p-0">
                    <AppBar position="static" elevation={1}>
                        <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                            Team Settings
                        </Toolbar>
                    </AppBar>
                </DialogTitle>
                <FuseScrollbars className="p-16 sm:p-32">
                    <IconButton className="fixed top-0 right-0 z-10" onClick={handleClose}>
                        <Icon>close</Icon>
                    </IconButton>

                    <Formsy
                        onValidSubmit={handleSubmit}
                        onValid={enableButton}
                        onInvalid={disableButton}
                        ref={formRef}
                        className="flex flex-col justify-center w-full"
                    >
                        <div className="w-full mb-24 items-start">
                            <TextFieldFormsy
                                id="displayName"
                                className="flex flex-1 mt-16"
                                label="Display Name"
                                name="displayName"
                                value={form.displayName || ''}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                required
                                validations={{
                                    minLength: 4,
                                }}
                                validationErrors={{
                                    minLength: 'Min character length is 4',
                                }}
                            />
                            <TextFieldFormsy
                                id="description"
                                className="flex flex-1 mt-16"
                                label="Description"
                                name="description"
                                value={form.description || ''}
                                onChange={handleChange}
                                variant="outlined"
                                multiline
                                rows="4"
                                fullWidth
                            />
                            <Button
                                className="mt-16 float-right"
                                aria-label="save"
                                variant="contained"
                                color="secondary"
                                type="submit"
                                size="small"
                                disabled={!isFormValid}
                            >
                                Save
                            </Button>
                        </div>

                        <MembersList/>

                    </Formsy>

                </FuseScrollbars>
            </Dialog>
        </div>
    )
}

export default TeamSettingsDialog;
