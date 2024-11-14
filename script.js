// Wait for the document to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element and add a submit event listener
    const contactForm = document.getElementById("contactForm");
    
    // Handle form submission
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Clear previous error messages
        clearErrors();

        // Get the form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;

        // Validate Name
        if (name === "") {
            isValid = false;
            document.getElementById("nameError").textContent = "Name is required.";
        }

        // Validate Email
        if (email === "") {
            isValid = false;
            document.getElementById("emailError").textContent = "Email is required.";
        } else if (!validateEmail(email)) {
            isValid = false;
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
        }

        // Validate Subject
        if (subject === "") {
            isValid = false;
            document.getElementById("subjectError").textContent = "Subject is required.";
        }

        // Validate Message
        if (message === "") {
            isValid = false;
            document.getElementById("messageError").textContent = "Message cannot be empty.";
        }

        // If the form is valid, show the success message
        if (isValid) {
            // Show success message
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("errorMessage").style.display = "none";
            // Clear the form
            contactForm.reset();
        } else {
            // Show error message
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("successMessage").style.display = "none";
        }
    });

    // Function to validate email using a regular expression
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    // Function to clear error messages
    function clearErrors() {
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("subjectError").textContent = "";
        document.getElementById("messageError").textContent = "";
    }
});
