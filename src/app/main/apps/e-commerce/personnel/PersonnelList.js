import React, {useEffect, useState} from 'react';
import {Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import ReactTable from "react-table";
import * as Actions from './../store/actions';
import PersonnelMultiSelectMenu from "./PersonnelMultiSelectMenu";
import history from '@history';

function PersonnelList(props)
{
    const dispatch = useDispatch();
    const personnel = useSelector(({eCommerceApp}) => eCommerceApp.personnel.entities);
    const selectedPersonnelIds = useSelector(({eCommerceApp}) => eCommerceApp.personnel.selectedPersonnelIds);
    const searchText = useSelector(({eCommerceApp}) => eCommerceApp.personnel.searchText);

    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        function getFilteredArray(entities, searchText)
        {
            const arr = Object.keys(entities).map((id) => entities[id]);
            if ( searchText.length === 0 )
            {
                return arr;
            }
            return FuseUtils.filterArrayByString(arr, searchText);
        }

        if ( personnel )
        {
            setFilteredData(getFilteredArray(personnel, searchText));
        }
    }, [personnel, searchText]);


    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no personnel!
                </Typography>
            </div>
        );
    }

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
            <ReactTable
                className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
                getTrProps={(state, rowInfo, column) => {
                    return {
                        className: "cursor-pointer",
                        onClick  : (e, handleOriginal) => {
                            if ( rowInfo )
                            {
                                // dispatch(Actions.openEditPersonDialog(rowInfo.original));
                                history.push('/person/' + rowInfo.original.id);
                            }
                        }
                    }
                }}
                data={filteredData}
                columns={[
                    {
                        Header   : () => (
                            <Checkbox
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                                onChange={(event) => {
                                    event.target.checked ? dispatch(Actions.selectAllPersonnel()) : dispatch(Actions.deSelectAllPersonnel());
                                }}
                                checked={selectedPersonnelIds.length === Object.keys(personnel).length && selectedPersonnelIds.length > 0}
                                indeterminate={selectedPersonnelIds.length !== Object.keys(personnel).length && selectedPersonnelIds.length > 0}
                            />
                        ),
                        accessor : "",
                        Cell     : row => {
                            return (<Checkbox
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    checked={selectedPersonnelIds.includes(row.value.id)}
                                    onChange={() => dispatch(Actions.toggleInSelectedPersonnel(row.value.id))}
                                />
                            )
                        },
                        className: "justify-center",
                        sortable : false,
                        width    : 64
                    },
                    {
                        Header   : () => (
                            selectedPersonnelIds.length > 0 && (
                                <PersonnelMultiSelectMenu />
                            )
                        ),
                        className: "justify-center",
                        width    : 64,
                        sortable : false
                    },
                    {
                        Header    : "First Name",
                        accessor  : "name",
                        filterable: true,
                    },
                    {
                        Header    : "Last Name",
                        accessor  : "lastName",
                        filterable: true,
                    },
                    {
                        Header    : "Email",
                        accessor  : "email",
                        filterable: true
                    },
                    {
                        Header    : "Job Title",
                        accessor  : "jobTitle",
                        filterable: true
                    },
                    {
                        Header    : "Phone",
                        accessor  : "phone",
                        filterable: true
                    },
                    {
                        Header    : "Joined At",
                        accessor  : "createdAt",
                        filterable: false
                    },
                    {
                        Header: "",
                        width : 80,
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.openEditPersonDialog(row.original));
                                    }}
                                >
                                    <Icon>edit</Icon>
                                </IconButton>
                            </div>
                        )
                    },
                    {
                        Header: "",
                        width : 80,
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.removePerson(row.original.id));
                                    }}
                                >
                                    <Icon>delete</Icon>
                                </IconButton>
                            </div>
                        )
                    }
                ]}
                defaultPageSize={10}
                noDataText="No personnel found"
            />
        </FuseAnimate>
    );
}

export default PersonnelList;
