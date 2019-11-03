import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
    AppBar, Avatar,
    Button,
    Dialog, DialogActions,
    DialogTitle,
    Icon,
    IconButton,
    Slide,
    Toolbar, Typography
} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import {useForm} from '@fuse/hooks';
import Formsy from 'formsy-react';
import * as Actions from '../../store/actions'
import {useDispatch, useSelector} from "react-redux";
import {TextFieldFormsy} from "../../../../@fuse/components/formsy";
import {FusePageSimple} from "../../../../@fuse";
import {makeStyles} from "@material-ui/styles";
import ProfileHeader from "./ProfileHeader";
import reducer from '../../store/reducers';
import withReducer from '../../../store/withReducer';

const useStyles = makeStyles(theme => ({
    layoutHeader: {
        height: 150,
        minHeight: 150,
        [theme.breakpoints.down('md')]: {
            height: 180,
            minHeight: 180
        }
    }
}));

const defaultFormState = {
    displayName: '',
    description: ''
};

function ProfileSettings(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const account = useSelector(({account}) => account.account.data);
    console.log(account)

    const {form, setForm, handleChange, resetForm} = useForm(defaultFormState);

    useEffect(() => {
        dispatch(Actions.getUserInfo(props.match.params));
    }, [dispatch, props.match.params]);

    const team = {};

    const initDialog = useCallback(() => {
        if (team) {
            setForm({...team})
        }
    }, [team, setForm]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);

        if (team) {
            initDialog();
        }
    };

    const handleClose = () => {
        setOpen(false);

        resetForm();
    };

    function handleSubmit() {
        // dispatch(Actions.updateTeamInfo(form));
    }

    const formRef = useRef(null);

    const [isFormValid, setIsFormValid] = useState(false);

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(false);
    }

    return (
        <React.Fragment>
            <FusePageSimple
                classes={{
                    header: classes.layoutHeader,
                    toolbar: "px-16 sm:px-24"
                }}
                header={
                    <div>
                        <ProfileHeader/>
                    </div>
                }
                content={
                    <div className="md:flex max-w-md">
                        <FuseScrollbars className="p-16 flex flex-col flex-1 md:pr-32">
                            <Formsy
                                onValidSubmit={handleSubmit}
                                onValid={enableButton}
                                onInvalid={disableButton}
                                ref={formRef}
                                className="flex flex-col justify-center w-full"
                            >
                                <div className="w-full mb-24 items-start">
                                    <TextFieldFormsy
                                        id="displayName"
                                        className="flex flex-1 mt-16"
                                        label="Display Name"
                                        name="displayName"
                                        value={form.displayName || ''}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        required
                                        validations={{
                                            minLength: 4,
                                        }}
                                        validationErrors={{
                                            minLength: 'Min character length is 4',
                                        }}
                                    />
                                    <TextFieldFormsy
                                        id="description"
                                        className="flex flex-1 mt-16"
                                        label="Description"
                                        name="description"
                                        value={form.description || ''}
                                        onChange={handleChange}
                                        variant="outlined"
                                        multiline
                                        rows="4"
                                        fullWidth
                                    />
                                    <Button
                                        className="mt-16 float-right"
                                        aria-label="save"
                                        variant="contained"
                                        color="secondary"
                                        type="submit"
                                        size="small"
                                        disabled={!isFormValid}
                                    >
                                        Save
                                    </Button>
                                </div>

                            </Formsy>

                        </FuseScrollbars>
                    </div>
                }
            />
        </React.Fragment>
    )
}

export default withReducer('account', reducer)(ProfileSettings);
