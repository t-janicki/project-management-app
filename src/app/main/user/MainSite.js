import {Typography} from '@material-ui/core';
import React from 'react';
import {FuseAnimate} from '@fuse';
import SiteScreenShoots from "./SiteScreenShoots";

function MainSite(props) {

    return (
        <div
            className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">

            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                <Typography variant="h3" color="inherit" className="font-light">
                    Welcome Project management! (BETA)
                </Typography>
            </FuseAnimate>
            <div>
                <SiteScreenShoots/>
            </div>

        </div>
    )
}

export default MainSite;
