import React, {useEffect} from 'react';
import {Typography, Icon, Toolbar, Hidden, Button, IconButton, AppBar} from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimateGroup, FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import withReducer from '../../../../../app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import {makeStyles} from '@material-ui/styles';
import BoardTitle from "../board/BoardTitle";

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
    }
}));

function Boards(props) {
    // const dispatch = useDispatch();
    // const boards = useSelector(({scrumboardApp}) => scrumboardApp.boards);

    const classes = useStyles(props);

    // useEffect(() => {
    //     dispatch(Actions.getBoards());
    //     return () => {
    //         dispatch(Actions.resetBoards());
    //     }
    // }, [dispatch]);

    return (
        <div className={clsx(classes.root, "flex flex-grow flex-shrink-0 flex-col items-center")}>

            <div className="flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24">

                <FuseAnimate>
                    <Typography className="mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300"
                                color="inherit">Boards</Typography>
                </FuseAnimate>

                <div>
                    <FuseAnimateGroup
                        className="flex flex-wrap w-full justify-center py-32 px-16"
                        enter={{
                            animation: "transition.slideUpBigIn",
                            duration: 300
                        }}
                    >
                        <div className="w-224 h-224 p-16">
                            <Link
                                to={'/personal/boards'}
                                className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                                role="button"
                            >
                                <Icon className="text-56">person</Icon>
                                <Typography className="text-16 font-300 text-center pt-16 px-32"
                                            color="inherit">Personal</Typography>
                            </Link>
                        </div>
                        <div className="w-224 h-224 p-16">
                            <Link
                                to={'/teams'}
                                className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                                role="button"
                            >
                                <Icon className="text-56">people</Icon>
                                <Typography className="text-16 font-300 text-center pt-16 px-32"
                                            color="inherit">Team's</Typography>
                            </Link>
                        </div>

                    </FuseAnimateGroup>
                </div>
            </div>
        </div>
    );
}

export default withReducer('scrumboardApp', reducer)(Boards);
