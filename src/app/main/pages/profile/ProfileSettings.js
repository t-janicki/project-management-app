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
        marginTop: 5
    },
}));

function ProfileSettings(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const user = useSelector(({account}) => account.account.data.userInfo);

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
                    <div className="p-16 max-w-sm md:flex-row md:items-end">
                        <FuseScrollbars className="p-16 flex flex-col flex-1 md:pr-32">
                            <Paper className={classes.root}>
                                <EditUserInfo/>
                            </Paper>

                            <Paper className={classes.root}>
                                <ResetPassword/>
                            </Paper>
                        </FuseScrollbars>
                    </div>
                }
            />
        </React.Fragment>
    )
}

export default withReducer('account', reducer)(ProfileSettings);
