import React, {useEffect, useState} from 'react';
import {
    Tab,
    Tabs,
    Icon,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Tooltip
} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from '../../../../../store/withReducer';
import * as Actions from '../../store/actions';
import reducer from '../../store/reducers';
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import GoogleMap from "google-map-react";
import Work from "./Work";

function Marker(props)
{
    return (
        <Tooltip title={props.text} placement="top">
            <Icon className="text-red">place</Icon>
        </Tooltip>
    );
}

function Person(props) {
    const dispatch = useDispatch();
    const person = useSelector(({eCommerceApp}) => eCommerceApp.person.data);
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
        dispatch(Actions.getPerson(props.match.params));
    }, [dispatch, props.match.params]);

    const [map, setMap] = useState('shipping');

    function handleChangeTab(event, tabValue) {
        setTabValue(tabValue);
    }

    return (
        <FusePageCarded
            classes={{
                toolbar: "p-0",
                header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                person && (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-1 flex-col items-center sm:items-start">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link}
                                            role="button" to="/personnel" color="inherit">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Personnel
                                </Typography>
                            </FuseAnimate>

                            <div className="flex flex-col min-w-0 items-center sm:items-start">

                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography className="text-16 sm:text-20 truncate">
                                        {person.name + ' ' + person.lastName}
                                    </Typography>
                                </FuseAnimate>

                            </div>

                        </div>
                    </div>
                )
            }
            contentToolbar={
                <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="off"
                    classes={{
                        root: "h-64 w-full border-b-1"
                    }}
                >
                    <Tab classes={{root: "h-64"}} label="Contact"/>
                    <Tab classes={{root: "h-64"}} label="Work"/>
                </Tabs>
            }
            content={
                person && (
                    <div className="p-16 sm:p-24 max-w-2xl">
                        {tabValue === 0 &&
                        (
                            <div>
                                <div className="pb-48">

                                    <div className="pb-16 flex items-center">
                                        <Icon className="mr-16" color="action">account_circle</Icon>
                                        <Typography className="h2" color="textSecondary">Person</Typography>
                                    </div>

                                    <div className="mb-24">

                                        <div className="table-responsive mb-16">
                                            <table className="simple">
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Last name</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{person.name}</Typography>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{person.lastName}</Typography>
                                                    </td>
                                                    <td>
                                                        <span className="truncate">{person.phone}</span>
                                                    </td>
                                                    <td>
                                                        <Typography
                                                            className="truncate">{person.email}</Typography>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <ExpansionPanel
                                            elevation={1}
                                            expanded={map === 'shipping'}
                                            onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
                                        >
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <Typography className="font-600">Address</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="flex flex-col md:flex-row">
                                                <Typography
                                                    className="w-full md:max-w-256 mb-16 md:mb-0">
                                                    {person.streetAndNumber}
                                                </Typography>
                                                <div className="w-full h-320">
                                                    <GoogleMap
                                                        bootstrapURLKeys={{
                                                            key: process.env.REACT_APP_MAP_KEY
                                                        }}
                                                        defaultZoom={15}
                                                        defaultCenter={[person.lat, person.lng]}
                                                    >
                                                        <Marker
                                                            text={person.streetAndNumber}
                                                            lat={person.lat}
                                                            lng={person.lng}
                                                        />
                                                    </GoogleMap>
                                                </div>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                    </div>
                                </div>
                            </div>
                        )}
                        {tabValue === 1 &&
                        (
                           <Work person={person}/>
                        )}
                    </div>
                )
            }
            innerScroll
        />
    )
}

export default withReducer('eCommerceApp', reducer)(Person);
