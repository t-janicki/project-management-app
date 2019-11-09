import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';
import {USER_SIGN_IN, GET_USER_DATA, UPDATE_USER_DATA} from '../../apiURL';
import history from '@history';

class jwtService extends FuseUtils.EventEmitter {

    init()
    {
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if (err.response === undefined) {
                    this.emit('onAutoLogout', '500');
                    this.setSession(null);
                } else
                if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest )
                {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Unauthorized');
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    oAuth2Authorize = (token) => {
        if(this.isAuthTokenValid(token)) {
            this.setSession(token);
            this.emit('onAutoLogin', true);
        }
    };

    handleAuthentication = () => {

        let access_token = window.localStorage.getItem('jwt_access_token');

        if ( !access_token )
        {
            this.emit('onNoAccessToken');

            return;
        }

        if ( this.isAuthTokenValid(access_token) )
        {
            this.setSession(access_token);
            this.emit('onAutoLogin', true);
        }
        else
        {
            this.setSession(null);
            this.emit('onAutoLogout', 'Unauthorized');
        }
    };

    // ORIGINAL VERSION DON'T DELETE
    // createUser = (data) => {
    //     return new Promise((resolve, reject) => {
    //         axios.post(REGISTER_COMPANY, data)
    //             .then(response => {
    //                 if ( response.data )
    //                 {
    //                     this.setSession(response.data.accessToken);
    //                     resolve(response.data);
    //                 }
    //             })
    //
    //     });
    // };

    updateUserData = (user) => {
            return axios.put(UPDATE_USER_DATA, user)
              .then(res => {
                  if (res) {
                      console.log(res.data)
                  }
              });
    };

    signInWithEmailAndPassword = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post(USER_SIGN_IN,  {
                    email,
                    password
            }).then(response => {
                if ( response.data.accessToken )
                {

                    this.setSession(response.data.accessToken);
                    resolve(response.data);
                }
                else
                {
                    reject(response.data.error);
                }
            })
              .catch(err => console.log('There was an error: ' + err));
        });
    };

    // IMPLEMENTATION TO DO
    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.get(GET_USER_DATA,{
                data: {
                    access_token: this.getAccessToken()
                }
            })
                .then(response => {
                    if ( response.data )
                    {
                        this.setSession(window.localStorage.getItem('jwt_access_token'));
                        resolve(response.data);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };

    setSession = access_token => {
        if ( access_token )
        {
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        this.setSession(null);
    };

    isAuthTokenValid = access_token => {

        if ( !access_token )
        {
            return false;
        }

        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if ( decoded.exp < currentTime )
        {
            console.warn('access token expired');
            return false;
        }

        else
        {
            return true;
        }
    };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };
}

const instance = new jwtService();

export default instance;
