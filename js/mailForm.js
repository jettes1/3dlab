document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emri = document.getElementById("Emri").value;
    const email = document.getElementById("email").value;
    const subjekti = document.getElementById("subjekti").value;
    const mesazh = document.getElementById("mesazh").value;

    if (emri === "" || email === "" || subjekti === "" || mesazh === "") {
        showAlert("Ju lutem plotësoni të gjitha fushat", "danger");
    } else if (!document.getElementById("exampleCheck1").checked) {
        showAlert("Ju duhet të pranoni termat dhe kushtet", "warning");
    } else {
        showAlert("Mesazhi u dërgua me sukses!", "success");
    }
});

function showAlert(message, alertType) {
    const alertContainer = document.getElementById("alert-container");
    const alert = document.createElement("div");
    alert.classList.add("alert", `alert-${alertType}`, "mt-3");
    alert.textContent = message;
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alert);
    setTimeout(() => alert.remove(), 5000);
}
