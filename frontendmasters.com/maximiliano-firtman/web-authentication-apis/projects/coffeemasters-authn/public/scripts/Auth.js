import API from "./API.js";
import Router from "./Router.js";

const Auth = {
    isLoggedIn: false,
    account: null,
    postLogin: (response, user) => {
        if (response.ok) {
            Auth.isLoggedIn = true;
            Auth.account = user;
            Auth.updateStatus();
            Router.go("/account");
        } else {
            alert(response.message);
        }
        // Credential Management API storage
        if (window.PasswordCredential && user.password) {
            let credentials = new PasswordCredential({
                id: user.email,
                name: user.name,
                password: user.password
            });
            try {
                navigator.credentials.store(credentials);
            } catch (e) {
                console.log(e);
            }
        }
    },
    register: async (event) => {
        event.preventDefault();
        const user = {
            name: document.getElementById("register_name").value,
            email: document.getElementById("register_email").value,
            password: document.getElementById("register_password").value,
        }
        const response = await API.register(user);
        console.log(response);
        Auth.postLogin(response, user);
    },
    login: async (event) => {
        if(event) event.preventDefault();
        const credentials = {
            email: document.getElementById("login_email").value,
            password: document.getElementById("login_password").value,
        }
        const response = await API.login(credentials);
        console.log(response);
        Auth.postLogin(response, {
            ...credentials,
            name: response.name
        });
    },
    autoLogin: async () => {
        if (window.PasswordCredential) {
            const credentials = await navigator.credentials.get({ password: true });
            document.getElementById("login_email").value = credentials.id;
            document.getElementById("login_password").value = credentials.password;
            Auth.login();
            console.log(credentials);
        }
    },
    logout: () => {
        Auth.isLoggedIn = false;
        Auth.account = null;
        Auth.updateStatus();
        Router.go("/");
        // Credential Management API storage
        if (window.PasswordCredential) {
            navigator.credentials.preventSilentAccess();
        }
    },
    updateStatus() {
        if (Auth.isLoggedIn && Auth.account) {
            document.querySelectorAll(".logged_out").forEach(
                e => e.style.display = "none"
            );
            document.querySelectorAll(".logged_in").forEach(
                e => e.style.display = "block"
            );
            document.querySelectorAll(".account_name").forEach(
                e => e.innerHTML = Auth.account.name
            );
            document.querySelectorAll(".account_username").forEach(
                e => e.innerHTML = Auth.account.email
            );

        } else {
            document.querySelectorAll(".logged_out").forEach(
                e => e.style.display = "block"
            );
            document.querySelectorAll(".logged_in").forEach(
                e => e.style.display = "none"
            );

        }
    },
    init: () => {

    },
}
Auth.updateStatus();
Auth.autoLogin();

export default Auth;

// make it a global object
window.Auth = Auth;
