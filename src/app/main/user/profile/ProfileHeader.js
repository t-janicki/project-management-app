import {Avatar, Typography} from "@material-ui/core";
import React from "react";
import {useSelector} from "react-redux";
import {FuseAnimate} from '@fuse';

function ProfileHeader(props) {
    const account = useSelector(({account}) => account.account.data.userInfo);

    return (
        <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
            <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Avatar className="w-96 h-96" src={account.avatarUrl}/>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <Typography className="md:ml-24" variant="h4" color="inherit">
                        {account.displayName}
                    </Typography>
                </FuseAnimate>
            </div>

            {/*<div className="flex items-center justify-end">*/}
            {/*    <Button className="mr-8 normal-case" variant="contained" color="secondary" aria-label="Follow">Follow</Button>*/}
            {/*    <Button className="normal-case" variant="contained" color="primary" aria-label="Send Message">Send Message</Button>*/}
            {/*</div>*/}
        </div>
    )
}

export default ProfileHeader;
