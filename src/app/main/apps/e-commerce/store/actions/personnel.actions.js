import axios from 'axios';
import {
    REGISTER_PERSON_API,
    UPDATE_PERSON_API,
    GET_PERSONNEL_API,
    DELETE_PERSON_API,
    DELETE_ALL_PERSONNEL_API
} from "../../../../../apiURL";
import {showMessage} from "../../../../../store/actions/fuse";

export const GET_PERSONNEL = '[E-COMMERCE APP] GET PERSONNEL';
export const SET_SEARCH_TEXT_PERSON = '[E-COMMERCE APP] SET SEARCH TEXT PERSONNEL';
export const TOGGLE_IN_SELECTED_PERSONNEL = '[E-COMMERCE APP] TOGGLE IN SELECTED PERSONNEL';
export const SELECT_ALL_PERSONNEL = '[E-COMMERCE APP] SELECT ALL PERSONNEL';
export const DESELECT_ALL_PERSONNEL = '[E-COMMERCE APP] DESELECT ALL PERSONNEL';
export const OPEN_NEW_PERSON_DIALOG = '[E-COMMERCE APP] OPEN NEW PERSON DIALOG';
export const CLOSE_NEW_PERSON_DIALOG = '[E-COMMERCE APP] CLOSE NEW PERSON DIALOG';
export const OPEN_EDIT_PERSON_DIALOG = '[E-COMMERCE APP] OPEN EDIT PERSON DIALOG';
export const CLOSE_EDIT_PERSON_DIALOG = '[E-COMMERCE APP] CLOSE EDIT PERSON DIALOG';
export const ADD_PERSON = '[E-COMMERCE APP] ADD PERSON';
export const UPDATE_PERSON = '[E-COMMERCE APP] UPDATE PERSON';
export const REMOVE_PERSON = '[E-COMMERCE APP] REMOVE PERSON';
export const REMOVE_PERSONNEL = '[E-COMMERCE APP] REMOVE PERSONNEL';

export function getPersonnel(routeParams) {

    const request = axios.get(GET_PERSONNEL_API, {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_PERSONNEL,
                payload: response.data,
                routeParams
            })
        );
}

export function setSearchTextPerson(event) {
    return {
        type: SET_SEARCH_TEXT_PERSON,
        searchText: event.target.value
    }
}

export function toggleInSelectedPersonnel(personId) {
    return {
        type: TOGGLE_IN_SELECTED_PERSONNEL,
        personId
    }
}

export function selectAllPersonnel() {
    return {
        type: SELECT_ALL_PERSONNEL
    }
}

export function deSelectAllPersonnel() {
    return {
        type: DESELECT_ALL_PERSONNEL
    }
}

export function openNewPersonDialog() {
    return {
        type: OPEN_NEW_PERSON_DIALOG
    }
}

export function closeNewPersonDialog() {
    return {
        type: CLOSE_NEW_PERSON_DIALOG
    }
}

export function openEditPersonDialog(data) {
    return {
        type: OPEN_EDIT_PERSON_DIALOG,
        data
    }
}

export function closeEditPersonDialog() {
    return {
        type: CLOSE_EDIT_PERSON_DIALOG
    }
}

export function addPerson({name, lastName, email, phone, jobTitle, streetAndNumber, postCode, city, country}) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.personnel;

        return new Promise((resolve, reject) => {
            axios.post(REGISTER_PERSON_API, {
                name, lastName, email, phone, jobTitle,
                streetAndNumber, postCode, city, country
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: ADD_PERSON
                        });
                        dispatch(getPersonnel(routeParams));
                        dispatch(showMessage({
                            message: "Person Registered",
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'success'
                        }))
                    }
                })
                .catch(error => {
                    if (error.response.data.message) {
                        dispatch(showMessage({
                            message: (error.response.data.message),
                            autoHideDuration: 3000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'error'
                        }))
                    }
                })
        });
    };
}

export function updatePerson({id, name, lastName, email, phone, jobTitle, isActive, streetAndNumber, postCode, city, country}) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.personnel;

        return new Promise((resolve, reject) => {
            axios.put(UPDATE_PERSON_API, {
                id, name, lastName, email, phone, jobTitle, isActive,
                streetAndNumber, postCode, city, country
            })
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: UPDATE_PERSON
                        });
                        dispatch(getPersonnel(routeParams));
                        dispatch(showMessage({
                            message: "Person Updated",
                            autoHideDuration: 2000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'info'
                        }))
                    }
                })
                .catch(error => {
                    if (error.response.data.message) {
                        dispatch(showMessage({
                            message: (error.response.data.message),
                            autoHideDuration: 3000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'error'
                        }))
                    }
                })
        });
    };
}

export function removePerson(personId) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.personnel;

        const request = axios.delete(DELETE_PERSON_API + personId, {
            personId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_PERSON
                })
            ]).then(() => dispatch(getPersonnel(routeParams)))
                .then(() => {
                    dispatch(showMessage({
                        message: "Person deleted",
                        autoHideDuration: 3000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'error'
                    }))
                })
        )
    }
}

export function removePersonnel(personnelIds) {
    return (dispatch, getState) => {

        const {routeParams} = getState().eCommerceApp.personnel;

        const request = axios.delete(DELETE_ALL_PERSONNEL_API + personnelIds, {
            personnelIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_PERSONNEL
                }),
                dispatch({
                    type: DESELECT_ALL_PERSONNEL
                })
            ]).then(() => dispatch(getPersonnel(routeParams)))
                .then(() => {
                    dispatch(showMessage({
                        message: "Personnel deleted",
                        autoHideDuration: 3000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'error'
                    }))
                })
        )
    }
}
