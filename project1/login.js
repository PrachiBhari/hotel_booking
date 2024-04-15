document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password match a predefined combination
    if (username === "example" && password === "password") {
        document.getElementById("message").innerText = "Login successful!";
        // Here you could redirect the user to another page
    } else {
        document.getElementById("message").innerText = "Invalid username or password. Please try again.";
    }
});
