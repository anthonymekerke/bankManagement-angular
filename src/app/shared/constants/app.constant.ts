export const AppConstant = {
    DELAY_RELOAD: 300000, // delay between two calls on the API (5mn)
    
    SESSION_STORAGE_CREDENTIALS_KEY: 'usercredentials', //name of the session data used to store credentials
    SESSION_STORAGE_CSRF_KEY: 'XSRF-TOKEN', // name of the session data used to store csrf token
    SESSION_STORAGE_JWT_TOKEN_KEY: 'JWT-TOKEN', // name of the session data used to store jwt token
    SESSION_STORAGE_CONNECTED_USER_KEY: 'connected _user', // name of the session data use to store the name of connected user

    COOKIE_CSRF_KEY: 'XSRF-TOKEN', // name of the cookie used by backend to store csrf token
}