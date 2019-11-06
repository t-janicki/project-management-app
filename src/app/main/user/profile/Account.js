import React, {useEffect, useState} from 'react';
import {Avatar, Tab, Tabs, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FusePageSimple, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from '../../../store/withReducer';
import ContactTab from "./tabs/ContactTab";
import AccountDialog from "./AccountDialog";
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import SettingsTab from "./tabs/SettingsTab";
import ProfileHeader from "./ProfileHeader";

const useStyles = makeStyles(theme => ({
    layoutHeader: {
        height: 150,
        minHeight: 150,
        [theme.breakpoints.down('md')]: {
            height: 180,
            minHeight: 180
        }
    }
}));

function Account(props) {
    const dispatch = useDispatch();
    const account = useSelector(({account}) => account.account.data);

    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        dispatch(Actions.getUserInfo(props.match.params));
    }, [dispatch, props.match.params]);

    function handleTabChange(event, value) {
        setSelectedTab(value);
    }

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
                contentToolbar={
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="scrollable"
                        scrollButtons="off"
                        classes={{
                            root: "h-64 w-full border-b-1"
                        }}
                    >
                        <Tab
                            classes={{
                                root: "h-64"
                            }}
                            label="Contact"/>
                        <Tab classes={{
                            root: "h-64"
                        }} label="Settings"/>
                    </Tabs>
                }
                content={
                    <div className="p-16 sm:p-24">
                        {selectedTab === 0 &&
                        (
                            <ContactTab/>
                        )}
                        {selectedTab === 1 && (
                            <SettingsTab/>
                        )}

                    </div>
                }
            />
            <AccountDialog/>
        </React.Fragment>
    )
}

export default withReducer('account', reducer)(Account);
