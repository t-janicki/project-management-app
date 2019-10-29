import React, {useEffect, useRef, useState} from 'react';
import {Button, Icon, IconButton, AppBar, Toolbar, Hidden, Slide, Typography, Dialog} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import withReducer from '../../../../../app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import clsx from 'clsx';
import {useDispatch, useSelector} from 'react-redux';
import BoardTitle from "../board/BoardTitle";
import BoardList from "../board/BoardList";
import BoardAddList from "../board/BoardAddList";
import BoardSettingsSidebar from "../board/sidebars/settings/BoardSettingsSidebar";
import BoardCardDialog from "../board/dialogs/card/BoardCardDialog";
import {makeStyles} from "@material-ui/styles";
import {red} from "@material-ui/core/colors";
import {FuseScrollbars} from '@fuse';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    button               : {
        position               : 'absolute',
        right                  : 0,
        top                    : 600,
        minWidth               : 48,
        width                  : 48,
        height                 : 48,
        opacity                : .9,
        padding                : 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius   : 0,
        zIndex                 : 999,
        color                  : theme.palette.getContrastText(red[500]),
        backgroundColor        : red[500],
        '&:hover'              : {
            backgroundColor: red[500],
            opacity        : 1
        }
    },
    '@keyframes rotating': {
        from: {
            transform: 'rotate(0deg)'
        },
        to  : {
            transform: 'rotate(360deg)'
        }
    },
    buttonIcon           : {
        animation: '$rotating 3s linear infinite'
    },
    dialogPaper          : {
        position       : 'fixed',
        width          : 330,
        maxWidth       : '90vw',
        backgroundColor: theme.palette.background.paper,
        boxShadow      : theme.shadows[5],
        top            : 0,
        height         : '100%',
        minHeight      : '100%',
        bottom         : 0,
        right          : 0,
        margin         : 0,
        zIndex         : 1000,
        borderRadius   : 0
    }
}));

function TeamBoard(props) {
    const classes = useStyles();

    const dispatch = useDispatch();
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board.data);
    const team = useSelector(({scrumboardApp}) => scrumboardApp.team.data);

    const containerRef = useRef(null);

    const boardType = 'TEAM';

    useEffect(() => {
        dispatch(Actions.getTeam(props.match.params));
        return () => {
            dispatch(Actions.resetTeam());
        }
    }, [dispatch, props.match.params]);

    useEffect(() => {
        dispatch(Actions.getBoard(props.match.params, boardType));
        return () => {
            dispatch(Actions.resetBoard());
        }
    }, [dispatch, props.match.params, boardType]);

    function onDragEnd(result) {
        const {source, destination} = result;

        // dropped nowhere
        if (!destination) {
            return;
        }

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        // reordering list
        if (result.type === 'list') {
            dispatch(Actions.reorderList(result));
        }

        // reordering card
        if (result.type === 'card') {
            dispatch(Actions.reorderCard(result));
        }
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (!board) {
        return null;
    }

    return (
        <div
            className="flex flex-1 flex-col w-full h-full relative"
            ref={containerRef}
        >
            <AppBar position="static" color="primary">
                <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-64 sm:h-96 container">

                    <Hidden xsDown>
                        <Button to={`/teams/${props.match.params.teamId}/boards`}  component={Link} variant="contained">
                            <Icon className="mr-8">assessment</Icon>
                            Team Boards
                        </Button>
                    </Hidden>

                    <Hidden smUp>
                        <IconButton color="inherit" to="/boards/personal" component={Link}>
                            <Icon>assessment</Icon>
                        </IconButton>
                    </Hidden>

                    <div className="flex flex-1 justify-center items-center">
                        <BoardTitle/>
                    </div>

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
                        <FuseScrollbars className="p-24 sm:p-32">
                            <IconButton className="fixed top-0 right-0 z-10" onClick={handleClose}>
                                <Icon>close</Icon>
                            </IconButton>

                            <Typography className="mb-32" variant="h6">Board Settings</Typography>

                            <BoardSettingsSidebar/>

                        </FuseScrollbars>
                    </Dialog>

                </Toolbar>
            </AppBar>

            <div className={clsx("flex flex-1 overflow-x-auto overflow-y-hidden")}>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable
                        droppableId="list"
                        type="list"
                        direction="horizontal"
                    >
                        {(provided) => (
                            <div ref={provided.innerRef} className="flex container p-16 md:p-24">
                                {board.lists.map((list, index) => (
                                    <BoardList
                                        key={list.id}
                                        list={list}
                                        index={index}
                                    />
                                ))}
                                {provided.placeholder}

                                <BoardAddList/>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

            <BoardCardDialog members={team.members}/>

        </div>
    );
}

export default withReducer('scrumboardApp', reducer)(withRouter(TeamBoard));
