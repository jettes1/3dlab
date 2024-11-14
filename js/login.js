document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
        showAlert("Ju lutem plotësoni të gjitha fushat", "danger");
    } else if (!validateEmail(email)) {
        showAlert("Ju lutem vendosni një adresë emaili të vlefshme", "danger");
    } else {
        showAlert("Login i suksesshëm!", "success");
    }
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        showAlert("Ju lutem plotësoni të gjitha fushat", "danger");
    } else if (!validateEmail(email)) {
        showAlert("Ju lutem vendosni një adresë emaili të vlefshme", "danger");
    } else if (password !== confirmPassword) {
        showAlert("Password-et nuk përputhen", "danger");
    } else if (password.length < 6) {
        showAlert("Password-i duhet të ketë të paktën 6 karaktere", "danger");
    } else {
        showAlert("Regjistrimi i suksesshëm", "success");
    }
});


function showAlert(message, type) {
    const alertContainer = document.getElementById("alert-container");
    const alert = document.createElement("div");
    alert.classList.add("alert", `alert-${type}`, "mt-3");
    alert.textContent = message;
    alertContainer.appendChild(alert);
    setTimeout(function() {
        alert.remove();
    }, 3000);
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
