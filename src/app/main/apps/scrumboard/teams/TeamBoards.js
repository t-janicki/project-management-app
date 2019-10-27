import React, {useEffect, useRef, useState} from 'react';
import {
    Typography,
    Icon,
    AppBar,
    Toolbar,
    Hidden,
    Button,
    IconButton,
    Dialog,
    Slide,
    DialogTitle
} from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimateGroup, FuseAnimate, FuseScrollbars} from '@fuse';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import withReducer from '../../../../store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import {makeStyles} from '@material-ui/styles';
import NewBoardDialog from "../board/dialogs/NewBoardDialog";
import TeamSettingsSidebar from "./sidebars/settings/TeamSettingsSidebar";
import {red} from "@material-ui/core/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

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
        width: 400,
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

function TeamBoards(props) {
    const dispatch = useDispatch();
    const team = useSelector(({scrumboardApp}) => scrumboardApp.team);

    const classes = useStyles(props);

    useEffect(() => {
        dispatch(Actions.getTeam(props.match.params));
        return () => {
            dispatch(Actions.resetTeam());
        }
    }, [dispatch, props.match.params]);

    const containerRef = useRef(null);

    function handleNewBoardDialog(ev) {
        ev.preventDefault();
        dispatch(Actions.openNewBoardDialog(ev));
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div
            className="flex flex-1 flex-col w-full h-full relative items-center"
            ref={containerRef}
        >
            <AppBar position="static" color="primary">
                <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-64 sm:h-96 container">
                    <Hidden xsDown>
                        <Button to="/teams" component={Link} variant="contained">
                            <Icon className="mr-8">assessment</Icon>
                            Team's
                        </Button>
                    </Hidden>

                    <Hidden smUp>
                        <IconButton color="inherit" to="/boards/" component={Link}>
                            <Icon>assessment</Icon>
                        </IconButton>
                    </Hidden>

                    <IconButton color="inherit" onClick={handleOpen}>
                        <Icon>settings</Icon>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <FuseAnimate>
                <Typography className="mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300" color="inherit">Team
                    Boards</Typography>
            </FuseAnimate>

            <div>
                <FuseAnimateGroup
                    className="flex flex-wrap w-full justify-center py-32 px-16"
                    enter={{
                        animation: "transition.slideUpBigIn",
                        duration: 300
                    }}
                >
                    {team.boards.map(board => (
                        <div className="w-224 h-224 p-16" key={board.id}>
                            <Link
                                to={`/teams/${team.id}/boards/${board.id}/${board.uri}`}
                                className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                                role="button"
                            >
                                <Icon className="text-56">assessment</Icon>
                                <Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">{board.name}</Typography>
                            </Link>
                        </div>
                    ))}
                    <div className="w-224 h-224 p-16">
                        <div
                            className={clsx(classes.board, classes.newBoard, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                            onClick={(ev) => handleNewBoardDialog(ev)}
                        >
                            <Icon className="text-56">add_circle</Icon>
                            <Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">Add new
                                board</Typography>
                        </div>
                    </div>
                </FuseAnimateGroup>

                <NewBoardDialog/>

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

                        {/*<Typography className="mb-32" variant="h6">Team Settings</Typography>*/}


                        <TeamSettingsSidebar/>
                    </FuseScrollbars>
                </Dialog>
            </div>
        </div>
    );
}

export default withReducer('scrumboardApp', reducer)(TeamBoards);
