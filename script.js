
function togglePassword() {
    var passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
function login(event) {
    event.preventDefault();
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user === "admin" && pass === "1234") {
        window.location.href = "crm.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
