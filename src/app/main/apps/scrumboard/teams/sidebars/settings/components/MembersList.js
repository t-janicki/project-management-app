import React, {useEffect, useMemo, useState} from 'react';
import {Typography, ListItem, Input, IconButton, Icon, List, InputAdornment, TextField} from '@material-ui/core';
import {useDebounce, useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import _ from '@lodash';
import MemberModel from './MemberModel';

function MembersList(props) {
    const dispatch = useDispatch();
    const members = [
        {id: 1, email: 'email-1',},
        {id: 2, email: 'email-2',},
        {id: 3, email: 'email-3',},
        {id: 4, email: 'email-4',},
        {id: 5, email: 'email-5',},
        {id: 6, email: 'email-6',},
    ];

    const [membersForm, setMembers] = useState(members);
    const {form: newMemberForm, handleChange, resetForm} = useForm({
            email: ""
        });

    function isFormInValid() {
        return newMemberForm.email === '';
    }

    const handleOnChange = useDebounce((members) => {
        console.log(members);
    }, 600);

    useEffect(() => {
        setMembers(members);
    }, [members]);

    useEffect(() => {
        if (membersForm && !_.isEqual(membersForm, members)) {
            handleOnChange(membersForm);
        }
    }, [handleOnChange, members, membersForm]);

    function handleSubmit(ev) {
        ev.preventDefault();
        if (isFormInValid()) {
            return;
        }

        const newMember = new MemberModel(newMemberForm);
        console.log(newMember);
        setMembers(_.setIn(membersForm, newMember.id, newMember));
        console.log('action');
        resetForm();

    }

    return (
        <React.Fragment>
            {/*<Typography className="text-16 mb-8 font-600">Invite members</Typography>*/}
            <List dense>
                <form onSubmit={handleSubmit}>
                    {/*<ListItem*/}
                    {/*    // className="p-0 mb-16"*/}
                    {/*    // dense*/}
                    {/*>*/}
                        {/*<Icon className="list-item-icon text-16" color="action">add</Icon>*/}
                        {/*<Input*/}
                        {/*    className={clsx("flex flex-1 mx-8")}*/}
                        {/*    name="email"*/}
                        {/*    value={newMemberForm.email}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    placeholder="Invite member"*/}
                        {/*    variant="outlined"*/}
                        {/*/>*/}
                        {/*<IconButton*/}
                        {/*    className="w-32 h-32 mx-4 p-0"*/}
                        {/*    aria-label="Delete"*/}
                        {/*    disabled={isFormInValid()}*/}
                        {/*    type="submit"*/}
                        {/*>*/}
                        {/*    <Icon fontSize="small">check</Icon>*/}
                        {/*</IconButton>*/}
                        <div className="w-full mb-24">
                            <TextField
                                label="Member email"
                                name="email"
                                value={newMemberForm.email}
                                onChange={handleChange}
                                variant="outlined"
                                margin="none"
                                autoFocus
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type="submit"
                                                disabled={isFormInValid()}
                                            >
                                                <Icon>check</Icon>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>
                    {/*</ListItem>*/}
                </form>
                {useMemo(() => {
                    function handleOnDelete(member) {
                        setMembers(_.omit(membersForm, [member.id]));
                    }

                    function handleMemberChange(event, member) {
                        const updatedMember = new MemberModel(_.setIn(member, event.target.email, event.target.value));
                        console.log(updatedMember)
                        setMembers(_.setIn(membersForm, updatedMember.id, updatedMember));
                    }

                    return Object.entries(members).map(([key, member]) => (
                        <ListItem
                            className="p-0"
                            key={member.id}
                            dense
                        >
                            <Icon className="list-item-icon text-16" color="action">member</Icon>
                            <Input
                                className={clsx("flex flex-1 mx-8")}
                                name="email"
                                value={member.email}
                                onChange={(event) => handleMemberChange(event, member)}
                                disableUnderline
                            />
                            <IconButton className="w-32 h-32 mx-4 p-0" aria-label="Delete"
                                        onClick={(ev) => handleOnDelete(member)}>
                                <Icon fontSize="small">delete</Icon>
                            </IconButton>
                        </ListItem>
                    ))
                }, [membersForm])}
            </List>
        </React.Fragment>
    );
}

export default MembersList;
