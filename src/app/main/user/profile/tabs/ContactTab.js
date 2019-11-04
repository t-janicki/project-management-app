import React from 'react';
import {AppBar, Card, CardContent, Icon, IconButton, Toolbar, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../store/actions';

function ContactTab() {

    const dispatch = useDispatch();
    const user = useSelector(({account}) => account.account.data);

    return (
        <div className="md:flex max-w-2xl">

            <div className="flex flex-col flex-1 md:pr-32">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16 max-w-384">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Contact
                                </Typography>
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.openAccountEditDialog(user));
                                    }}
                                >
                                    <Icon>edit</Icon>
                                </IconButton>
                            </Toolbar>
                        </AppBar>

                        <CardContent>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Phone</Typography>
                                <div className="flex items-center">
                                    <Typography>{user.phone}</Typography>
                                </div>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Email</Typography>
                                {user.email}
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Job Title</Typography>
                                {user.jobTitle}
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Status</Typography>
                                {user.active === true ? 'Active' : 'Not active'}
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>

            <div className="flex flex-col md:w-320">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default ContactTab;
