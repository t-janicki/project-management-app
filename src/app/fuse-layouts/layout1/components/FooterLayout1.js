import React from 'react';
import {AppBar, Toolbar,} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector} from 'react-redux';
import PoweredByLinks from "../../shared-components/PoweredByLinks";

function FooterLayout1(props)
{
    const footerTheme = useSelector(({fuse}) => fuse.settings.footerTheme);

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" color="default">
                <Toolbar className="px-16 py-0 flex items-center">

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

export default FooterLayout1;
