export const AppConstant = {
    DELAY_RELOAD: 300000, // delay between two calls on the API (5mn)
    
    SESSION_STORAGE_CREDENTIALS_KEY: 'usercredentials', //name of the session data used to store credentials
    SESSION_STORAGE_CSRF_KEY: 'XSRF-TOKEN', // name of the session data used to store csrf token
    COOKIE_CSRF_KEY: 'XSRF-TOKEN', // name of the cookie used by backend to store csrf token
}