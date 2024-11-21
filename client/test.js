// test.js

// Function to open the registration popup
function openPopup() {
    document.getElementById("registrationPopup").style.display = "flex";
}

// Function to close the registration popup
function closePopup() {
    document.getElementById("registrationPopup").style.display = "none";
    document.getElementById("registrationForm").reset();
    var registerButton = document.getElementById("rs");
    registerButton.innerHTML = "Register";
}

// Function to display registration success message
function success() {
    var registerButton = document.getElementById("rs");
    registerButton.innerHTML = "Registration Successful!";
}


// Event listener for the registration form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);

    // Send registration data to the backend using fetch
    fetch("http://localhost:3006/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("User already exists!");
        }
        return response.json(); // Assuming the backend returns JSON, adjust accordingly
    })
    .then(data => {
        // Handle the response data here
        console.log(data);
        success();
    })
    .catch(error => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
        alert(error);
    });

   
    
});



// Function to open the login popup
function openLoginPopup() {
    document.getElementById("loginPopup").style.display = "flex";
}

// Function to close the login popup
function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("memberloginForm").reset();
}

// Event listener for the login form submission
document.getElementById("memberloginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);

    // Send login data to the backend using fetch
    fetch("http://localhost:3006/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Login failed");
        }
        return response.json();
    })
    .then(data => {
        // Redirect to member dashboard or display message
        window.location.href = "/client/memberdashboard.html"; // Redirect to the member dashboard page
    })
    .catch(error => {
        console.error("Login failed:", error);
        alert(error);
        // Display error message to the user
    });

    // Close the login pop-up after successful login
    closeLoginPopup();
});


