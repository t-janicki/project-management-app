import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector} from 'react-redux';
import PoweredByLinks from "../../shared-components/PoweredByLinks";
import PurchaseButton from "../../shared-components/PurchaseButton";

function FooterLayout3(props) {
    const footerTheme = useSelector(({fuse}) => fuse.settings.footerTheme);

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" color="default">
                <Toolbar className="flex items-center container py-0 px-16 lg:px-24">

                    {/*<div className="flex flex-1">*/}
                    {/*    <PurchaseButton/>*/}
                    {/*</div>*/}
                    <div className="flex flex-1">
                        <a href={`mailto:projects.management.app@gmail.com`}>Something not working? Any questions? I will be grateful for every email. :) </a>
                    </div>

                    <div>
                        <PoweredByLinks/>
                    </div>

                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default FooterLayout3;
