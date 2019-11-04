import React, {useEffect} from 'react';
import {
    Paper
} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import * as Actions from '../../store/actions'
import {useDispatch, useSelector} from "react-redux";
import {FusePageSimple} from "../../../../@fuse";
import {makeStyles} from "@material-ui/styles";
import ProfileHeader from "./ProfileHeader";
import reducer from '../../store/reducers';
import withReducer from '../../../store/withReducer';
import EditUserInfo from "./components/EditUserInfo";
import ResetPassword from "./components/ResetPassword";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    layoutHeader: {
        height: 150,
        minHeight: 150,
        [theme.breakpoints.down('md')]: {
            height: 180,
            minHeight: 180
        }
    },
    root: {
        padding: theme.spacing(2, 3),
        margin: 5,
        minWidth: 300
    },
}));

function ProfileSettings(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    // const user = useSelector(({account}) => account.account.data.userInfo);

    useEffect(() => {
        dispatch(Actions.getUserInfo(props.match.params));
    }, [dispatch, props.match.params]);

    return (
        <React.Fragment>
            <FusePageSimple
                classes={{
                    header: classes.layoutHeader,
                    toolbar: "px-16 sm:px-24"
                }}
                header={
                    <ProfileHeader/>
                }
                content={
                    <FuseScrollbars className="flex flex-wrap w-full justify-center py-32 px-16">
                        <Paper className={classes.root}>
                            <EditUserInfo/>
                        </Paper>

                        <Paper className={classes.root}>
                            <ResetPassword/>
                        </Paper>
                    </FuseScrollbars>
                }
            />
        </React.Fragment>
    )
}

export default withReducer('account', reducer)(ProfileSettings);
