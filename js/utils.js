function findId(id) { return document.getElementById(id) }
/** Function auth
 * Alongside auth page, will be used as a middleware for the other pages.
 * It compels the user to be logged-in.
 */
function auth() {
    if (window.localStorage.getItem('loginStatus')) {
        console.log("logado");
        window.location.href = '../principal/principal.html';
    }
}
/** Function login
 *  Calls errorValidation. Checks if user already exists, if not it calls registerNewUser.
 *  If it exists checks if the passwords match, if not the user is warned about the mismatch
 *  If the password is correct the user is fowarded to the Main page
 */
function login() {
    if (!errorValidation([["username", "icon1"], ["password", "icon2"]])) {
        let username = {
            user: findId("username").value,
            password: findId("password").value
        };
        let user = JSON.parse(window.localStorage.getItem(username.user));
        if (!user) {
            window.location.href = '../cadastro/cadastro.html';
        } else if (username.password != user.password) {
            alert("Password doesn't match");
        } else {
            alert("Logged In!");
            window.localStorage.setItem('loginStatus', true)
            window.location.href = '../principal/principal.html';
        }
    } else {
        alert("Please fill all the input Fields!");
    }
}
/** Function errorValidation
 * Verify's if the inputs are filled and sets the error class accordingly.
 * @param {Array} errorArray - the Array refers to the input's html id  
 * @returns boolean errorFound - representing if the error was found
 */
function errorValidation(errorArray) {
    let errorFound = false;
    let noErrorIcon = '<i class="mdi mdi-check-circle-outline"></i>';
    let errorIcon = '<i class="mdi mdi-close-circle-outline"></i>';
    errorArray.forEach(error => {
        let id = findId(error[0]);
        let icon = findId(error[1]);
        if (id.value.length == 0) {
            id.parentElement.classList.add("input-error")
            icon.innerHTML = errorIcon;
            errorFound = true;
        } else {
            if (id.parentElement.classList.contains("input-error")) { id.parentElement.classList.remove("input-error") };
            icon.innerHTML = noErrorIcon;
        }
    });
    return errorFound;
}