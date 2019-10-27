import React from 'react';
import clsx from 'clsx';
import _ from '@lodash';

export const invitationStatuses = [
    {
        id   : 1,
        name : 'Sended',
        color: 'bg-blue text-white'
    },
    {
        id   : 2,
        name : 'Accepted',
        color: 'bg-green text-white'
    },
    {
        id   : 3,
        name : 'Refused',
        color: 'bg-red text-white'
    }
];

function InvitationStatus(props) {
    return (
        <div className={clsx("inline text-12 p-4 rounded truncate", _.find(invitationStatuses, {name: props.name}).color)}>
            {props.name}
        </div>
    )
}

export default InvitationStatus;
