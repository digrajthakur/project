function login() {
    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (uname == "world" && pass == "123") {
        location.assign("http://127.0.0.1:5500/indx.html");
    } else {
        window.alert("login failed");
    }
}