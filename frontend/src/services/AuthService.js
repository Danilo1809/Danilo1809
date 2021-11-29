export function doLogin(email, password) {
    return new Promise((response, reject)=>{
    if (email === 'danilomcvlcnt2@gmail.com'
        && password === 12345) {
        response(true);
    }
    reject('Invalid user and/or password');
    })
}


export function doLogout() {


}