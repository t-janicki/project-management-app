import React from 'react';
import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import ChatPanel from "../../shared-components/chatPanel/ChatPanel";

function RightSideLayout2()
{
    return (
        <React.Fragment>

            <ChatPanel/>

            <QuickPanel/>

        </React.Fragment>
    );
}

export default RightSideLayout2;
