import React from 'react';
import {Typography} from "@material-ui/core";

function Work(props) {
    return (
        <div>
            <div className="pb-48">

                <div className="mb-24">

                    <div className="table-responsive mb-16">

                        <div className="pb-16 flex items-center">
                            <Typography className="h3" color="textSecondary">Employee information</Typography>
                        </div>

                        <table className="simple">
                            <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Joined at</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <Typography
                                        className="truncate">{props.person.role}</Typography>
                                </td>
                                <td>
                                    <Typography
                                        className="truncate">{props.person.createdAt}</Typography>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*<div className="table-responsive mb-16">*/}

                    {/*    <div className="pb-16 flex items-center">*/}
                    {/*        <Typography className="h3" color="textSecondary">Company Address</Typography>*/}
                    {/*    </div>*/}

                    {/*    <table className="simple">*/}
                    {/*        <thead>*/}
                    {/*        <tr>*/}
                    {/*            <th>Company name</th>*/}
                    {/*            <th>City</th>*/}
                    {/*            <th>Post code</th>*/}
                    {/*            <th>Street</th>*/}
                    {/*            <th>Country</th>*/}
                    {/*        </tr>*/}
                    {/*        </thead>*/}
                    {/*        <tbody>*/}
                    {/*        <tr>*/}
                    {/*            <td>*/}
                    {/*                <Typography*/}
                    {/*                    className="truncate">{props.person.company.name}</Typography>*/}
                    {/*            </td>*/}
                    {/*            <td>*/}
                    {/*                <span className="truncate">{props.person.company.address.city}</span>*/}
                    {/*            </td>*/}
                    {/*            <td>*/}
                    {/*                <span className="truncate">{props.person.company.address.postCode}</span>*/}
                    {/*            </td>*/}
                    {/*            <td>*/}
                    {/*                <span className="truncate">{props.person.company.address.streetAndNumber}</span>*/}
                    {/*            </td>*/}
                    {/*            <td>*/}
                    {/*                <span className="truncate">{props.person.company.address.country}</span>*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Work;
