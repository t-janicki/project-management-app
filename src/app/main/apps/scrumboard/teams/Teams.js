import React, {useEffect, useRef} from 'react';
import {Typography, Icon, AppBar, Toolbar, Hidden, Button, IconButton} from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimateGroup, FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import withReducer from '../../../../store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import {makeStyles} from '@material-ui/styles';
import TeamDialog from "./TeamDialog";

const useStyles = makeStyles(theme => ({
    root    : {
        background: theme.palette.primary.main,
        color     : theme.palette.getContrastText(theme.palette.primary.main)
    },
    board   : {
        cursor                  : 'pointer',
        boxShadow               : theme.shadows[0],
        transitionProperty      : 'box-shadow border-color',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        background              : theme.palette.primary.dark,
        color                   : theme.palette.getContrastText(theme.palette.primary.dark),
        '&:hover'               : {
            boxShadow: theme.shadows[6]
        }
    },
    newBoard: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.6),
        '&:hover'  : {
            borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.8)
        }
    }
}));

function Teams(props)
{
    const dispatch = useDispatch();
    const teams = useSelector(({scrumboardApp}) => scrumboardApp.teams);

    const classes = useStyles(props);

    useEffect(() => {
        dispatch(Actions.getTeams());
        return () => {
            dispatch(Actions.resetTeams());
        }
    }, [dispatch]);

    const containerRef = useRef(null);

    function handleNewTeamDialog(ev) {
        ev.preventDefault();
        dispatch(Actions.openTeamDialog(ev));
    }

    return (
        <div
            className="flex flex-1 flex-col w-full h-full relative items-center"
            ref={containerRef}
        >
            <AppBar position="static" color="primary">
                <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-64 sm:h-96 container">
                    <Hidden xsDown>
                        <Button to="/boards" component={Link} variant="contained">
                            <Icon className="mr-8">assessment</Icon>
                            Boards
                        </Button>
                    </Hidden>

                    <Hidden smUp>
                        <IconButton color="inherit" to="/boards/" component={Link}>
                            <Icon>assessment</Icon>
                        </IconButton>
                    </Hidden>

                </Toolbar>
            </AppBar>

            <FuseAnimate>
                <Typography className="mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300" color="inherit">Team's</Typography>
            </FuseAnimate>

            <div>
                <FuseAnimateGroup
                    className="flex flex-wrap w-full justify-center py-32 px-16"
                    enter={{
                        animation: "transition.slideUpBigIn",
                        duration : 300
                    }}
                >
                    {teams.map(team => (
                        <div className="w-224 h-224 p-16" key={team.id}>
                            <Link
                                to={`/teams/${team.id}/boards`}
                                className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                                role="button"
                            >
                                <Icon className="text-56">people</Icon>
                                <Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">{team.displayName}</Typography>
                            </Link>
                        </div>
                    ))}
                    <div className="w-224 h-224 p-16">
                        <div
                            className={clsx(classes.board, classes.newBoard, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                            onClick={(ev) => handleNewTeamDialog(ev)}
                        >
                            <Icon className="text-56">group_add</Icon>
                            <Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">Add new team</Typography>
                        </div>
                    </div>
                </FuseAnimateGroup>

                <TeamDialog/>

            </div>
        </div>
    );
}

export default withReducer('scrumboardApp', reducer)(Teams);
