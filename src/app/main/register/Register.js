import React, {useState} from 'react'
import {Card, CardContent, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import JWTRegisterTab from './tabs/JWTRegisterTab';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function Register()
{
    const classes = useStyles();
    // const [selectedTab, setSelectedTab] = useState(0);
    const [selectedTab] = useState(0);


    return (
        <div className={clsx(classes.root, "flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")}>

            <div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">

                <FuseAnimate animation="transition.slideUpIn" delay={300}>
                    <Typography variant="h3" color="inherit" className="font-light">
                        Welcome Order management!
                    </Typography>
                </FuseAnimate>

                {/*<FuseAnimate delay={400}>*/}
                {/*    <Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">*/}
                {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit*/}
                {/*        facilisis facilisis.*/}
                {/*    </Typography>*/}
                {/*</FuseAnimate>*/}
            </div>

            <FuseAnimate animation={{translateX: [0, '100%']}}>

                <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                    <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                        <Typography variant="h6" className="md:w-full mb-32">REGISTER COMPANY</Typography>

                        {selectedTab === 0 && <JWTRegisterTab/>}

                        <div className="flex flex-col items-center justify-center pt-32 pb-24">
                            <span className="font-medium">Already have an account?</span>
                            <Link className="font-medium" to="/login">Login</Link>
                        </div>

                        <div className="flex flex-col items-center">
                        </div>
                    </CardContent>
                </Card>
            </FuseAnimate>
        </div>
    )
}

export default Register;
