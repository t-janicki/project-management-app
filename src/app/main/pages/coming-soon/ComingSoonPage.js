import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/styles';
import {FuseCountdown, FuseAnimate} from '@fuse';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
}));

function ComingSoonPage()
{
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")}>

            <div className="flex flex-col items-center justify-center w-full">

                <FuseAnimate animation="transition.expandIn">

                    <Card className="w-full max-w-384">

                        <CardContent className="flex flex-col items-center justify-center p-32 text-center">

                            <Typography variant="subtitle1" className="mb-16">
                                Hey! Thank you for checking out our app.
                            </Typography>

                            <Typography color="textSecondary" className="max-w-288">
                                It’s not quite ready yet, but we are working hard and it will be ready in approximately:
                            </Typography>

                            <FuseCountdown endDate="2019-012-31" className="my-48"/>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        </div>
    );
}

export default ComingSoonPage;
