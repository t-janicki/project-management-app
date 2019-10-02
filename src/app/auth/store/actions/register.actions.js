import {showMessage} from "../../../store/actions/fuse";
import {REGISTER_COMPANY, USER_SIGN_UP} from '../../../apiURL';
import axios from 'axios';
import history from '@history';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

// ORIGINAL VERSION DON'T DELETE
// export function submitRegister({companyName, name, lastName, phone, email, password})
// {
//     return (dispatch) =>
//         jwtService.createUser({
//           signUpUserRequest: {
//             lastName,
//             name,
//             password,
//             email,
//             phone
//           },
//             companyRequest: {
//                 companyName
//           }
//         })
//             .then((user) => {
//                     dispatch(UserActions.setUserData(user));
//                     return dispatch({
//                         type: REGISTER_SUCCESS
//                     });
//                 }
//             )
//             .catch(error => {
//                 if (error.response.data.message) {
//                     dispatch(showMessage({
//                         message: (error.response.data.message),
//                         autoHideDuration: 3000,
//                         anchorOrigin: {
//                             vertical: 'top',
//                             horizontal: 'center'
//                         },
//                         variant: 'error'
//                     }))
//                 }
//             })
// }

export function submitRegister({name, email, password}) {
    return (dispatch) => {

        return new Promise((resolve, reject) => {
            axios.post(USER_SIGN_UP, {
                    name,
                    password,
                    email,
            })
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                        history.push('/login')
                    }
                })
                .then(() => {
                    dispatch(showMessage({
                        message: "Register successful.",
                        autoHideDuration: 2000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'success'
                    }))
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
        })
    }
}
