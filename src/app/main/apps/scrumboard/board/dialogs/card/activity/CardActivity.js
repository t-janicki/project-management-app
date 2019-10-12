import React from 'react';
import {Avatar, ListItem, Typography} from '@material-ui/core';
import clsx from 'clsx';
import _ from '@lodash';
import {makeStyles} from '@material-ui/styles';
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    commentBubble: {
        borderRadius: '5px 20px 20px 5px',
        border      : '1px solid ' + theme.palette.divider
    }
}));

function CardActivity(props)
{
    const classes = useStyles(props);
    const user = useSelector(({auth}) => auth.user.userInfo);

    // HERE ADD LATER MEMBER NAME AND URL

    switch ( props.item.type )
    {
        case 'comment':
        {
            return (
                <ListItem dense className="px-0">
                    <Avatar alt={user.name} src={user.imageUrl} className="w-32 h-32"/>
                    <div className={clsx(classes.commentBubble, "flex flex-col ml-16 p-12")}>
                        <div className="flex items-center">
                            <Typography>{user.name}</Typography>
                            <Typography className="ml-8 text-12" color="textSecondary">{props.item.time}</Typography>
                        </div>
                        <Typography>{props.item.message}</Typography>
                    </div>
                </ListItem>
            )
        }
        case 'attachment':
        {
            return (
                <ListItem dense className="px-0">
                    <Avatar alt={user.name} src={user.imageUrl} className="w-32 h-32"/>
                    <div className="flex items-center ml-16">
                        <Typography>{user.name},</Typography>
                        <Typography className="ml-8">{props.item.message}</Typography>
                    </div>
                    <Typography className="ml-8 text-12" color="textSecondary">{props.item.time}</Typography>
                </ListItem>
            )
        }
        default:
        {
            return null;
        }
    }
}

export default CardActivity;
