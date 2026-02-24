document.getElementById("regForm").addEventListener("submit", function(e) {

    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var course = document.getElementById("course").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById("message");

    message.className = "";
    message.innerHTML = "";

    if (name === "" || email === "" || password === "" || course === "" || !gender) {
        message.className = "error";
        message.innerHTML = "Please fill all fields.";
        return;
    }

    if (!email.includes("@")) {
        message.className = "error";
        message.innerHTML = "Enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        message.className = "error";
        message.innerHTML = "Password must be at least 6 characters.";
        return;
    }

    message.className = "success";
    message.innerHTML = "Registration successful!";
    
});