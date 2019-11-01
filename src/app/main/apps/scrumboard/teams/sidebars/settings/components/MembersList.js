import React, {useEffect, useMemo, useState} from 'react';
import {
    Typography,
    ListItem,
    Input,
    IconButton,
    Icon,
    List,
    InputAdornment,
    TextField,
    TablePagination,
    Tooltip, Table, TableHead, TableRow, TableCell, TableBody, Avatar
} from '@material-ui/core';
import {useDebounce, useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import _ from '@lodash';
import ReactTable from "react-table";
import * as Actions from '../../../../store/actions';
import InvitationStatus from "./InvitationStatus";
import { makeStyles } from '@material-ui/core/styles';

const columns = [
    {
        id: 'avatar',
        label: '',
        maxWidth: 10,
    },
    {
        id: 'name',
        label: 'Name',
        maxWidth: 10,
    },
    {
        id: 'email',
        label: 'Email',
        maxWidth: 10,
    },
    // {
    //     id: 'status',
    //     label: 'Status',
    //     maxWidth: 10,
    // },
    {
        id: 'leave',
        label: 'Leave',
        maxWidth: 25,
    }
];

// const rows = [
//     {id: 213121, name: 'Name1', email: 'email-1', status: [ {id: 1545, name: 'Sended' } ] },
//     {id: 332, name: 'Name2', email: 'email-2', status: [ { id: 1247, name: 'Sended' } ] },
//     {id: 5451, name: 'Name3', email: 'email-3', status: [{id: 2121, name: 'Accepted',}]},
//     {id: 78120, name: 'Name4', email: 'email-4', status: [{id: 751, name: 'Refused',}]},
//     {id: 4512, name: 'Name5', email: 'email-5', status: [{id: 1278561, name: 'Accepted',}]},
//     {id: 45781, name: 'Name6', email: 'email-6', status: [{id: 1238, name: 'Refused',}]},
//     {id: 7861, name: 'Name7', email: 'email-7', status: [{id: 2127, name: 'Refused',}]},
//     {id: 721, name: 'Name8', email: 'email-8', status: [{id: 123, name: 'Accepted',}]},
//     {id: 1278, name: 'Name6', email: 'email-6', status: [{id: 18123, name: 'Refused',}]},
//     {id: 15878, name: 'Name7', email: 'email-7', status: [{id: 89631, name: 'Refused',}]},
//     {id: 481, name: 'Name8', email: 'email-8', status: [{id: 18678, name: 'Accepted',}]},
// ];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: 'auto',
    },
});

function MembersList(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const rows = useSelector(({scrumboardApp}) => scrumboardApp.team.data.members);
    const team = useSelector(({scrumboardApp}) => scrumboardApp.team.data.teamInfo);
    const currentUserEmail = useSelector(({auth}) => auth.user.userInfo.email);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <List dense>

                <div className="flex items-center justify-between px-16 h-64 border-b-1">
                    <Typography className="text-16">Team Members</Typography>
                    <Typography
                        className="text-11 font-500 rounded-4 text-white bg-blue px-8 py-4">{rows.length + " Members"}</Typography>
                </div>
                <div className={classes.tableWrapper}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(row => {
                                    const buttonStatus = currentUserEmail !== row.email && team.ownerEmail !== currentUserEmail;
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            className="pl-16 pr-0"
                                        >
                                            <Avatar src={row.avatarUrl}/>
                                        </TableCell>

                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>

                                        <TableCell component="th" scope="row">
                                            {row.email}
                                        </TableCell>

                                        {/*<TableCell component="th" scope="row">*/}
                                        {/*    <InvitationStatus name={row.status[0].name}/>*/}
                                        {/*</TableCell>*/}
                                            <TableCell>
                                                {team.ownerEmail !== row.email && (
                                                    <IconButton
                                                        onClick={(ev) => {
                                                            ev.stopPropagation();
                                                            dispatch(Actions.removeFromTeam(team.id, row.email))
                                                        }}
                                                        disabled={buttonStatus}
                                                    >
                                                        <Icon>exit_to_app</Icon>
                                                    </IconButton>
                                                )}
                                            </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 15, 30]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </List>
        </React.Fragment>
    );
}

export default MembersList;
