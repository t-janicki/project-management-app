// const BASE_URL = 'https://vps701667.ovh.net:8888/api';
export const BASE_URL = 'http://localhost:8080/api';
// const BASE_URL = 'https://task-management-api.herokuapp.com/api';

//ACCOUNT
export const USER_SIGN_IN = BASE_URL + '/auth/login';
export const USER_SIGN_UP = BASE_URL + '/auth/signup';
export const GET_USER_DATA = BASE_URL + '/users/me';
export const UPDATE_USER_DATA = BASE_URL + '/users/me/settings';
export const UPDATE_USER = BASE_URL + '/users/me';
// export const GET_USER = BASE_URL + '/accounts';
export const NEW_PASSWORD_REQUEST = BASE_URL + '/users/me/reset-password';

// LOCAL URL
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

// REMOTE URL
// export const OAUTH2_REDIRECT_URI = 'https://stoic-neumann-df94d0.netlify.com/oauth2/redirect';

export const GOOGLE_AUTH_URL = BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

//COMPANY
export const REGISTER_COMPANY = BASE_URL + '/company/register';

//PRODUCTS
export const REGISTER_PRODUCT_API = BASE_URL + '/products';
export const GET_PRODUCTS_API = BASE_URL + '/products';
export const GET_PRODUCT_API = BASE_URL + '/products/';
export const UPDATE_PRODUCT_API = BASE_URL + '/products';
export const DELETE_PRODUCT_API = BASE_URL + '/products/';
export const DELETE_ALL_PRODUCTS_API = BASE_URL + '/products/delete/';

//CUSTOMERS
export const REGISTER_CUSTOMER_API = BASE_URL + '/customers';
export const GET_CUSTOMERS_API = BASE_URL + '/customers';
export const GET_CUSTOMER_API = BASE_URL + '/customers/';
export const UPDATE_CUSTOMER_API = BASE_URL + '/customers';
export const DELETE_CUSTOMER_API = BASE_URL + '/customers/';
export const DELETE_ALL_CUSTOMERS_API = BASE_URL + '/customers/delete/';

//PERSONNEL
export const REGISTER_PERSON_API = BASE_URL + '/personnel';
export const GET_PERSONNEL_API = BASE_URL + '/personnel';
export const GET_PERSON_API = BASE_URL + '/personnel/';
export const UPDATE_PERSON_API = BASE_URL + '/personnel';
export const DELETE_PERSON_API = BASE_URL + '/personnel/';
export const DELETE_ALL_PERSONNEL_API = BASE_URL + '/personnel/delete/';

//BOARD APP
export const BOARD_API = BASE_URL + '/boards';

export const TEAM_API = BASE_URL + '/teams';
