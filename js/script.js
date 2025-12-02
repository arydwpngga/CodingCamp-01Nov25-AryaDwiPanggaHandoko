// Greeting
document.getElementById("setNameBtn").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value.trim();
    const welcomeText = document.getElementById("welcomeText");

    if (name === "") {
        welcomeText.textContent = "Hi, Welcome To Website";
    } else {
        welcomeText.textContent = "Hi " + name + ", Welcome To Website";
    }
});

// Form Validation
document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const phone = document.getElementById("formPhone").value.trim();
    const message = document.getElementById("formMessage").value.trim();

    if (!name || !email || !phone || !message) {
        alert("All fields must be filled!");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Invalid Email Format!");
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert("Phone number must be digits only!");
        return;
    }

    // Output
    const outputArea = document.getElementById("outputArea");
    outputArea.textContent = 
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Message:\n" + message;
});
