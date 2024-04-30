document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var fullName = document.getElementById('registrationForm').querySelector('input[type="text"]').value;
    var email = document.getElementById('registrationForm').querySelector('input[type="email"]').value;
    var password = document.getElementById('registrationForm').querySelector('input[type="password"]').value;
    var confirmPassword = document.getElementById('registrationForm').querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    // JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Add your login logic here...
        
        // If login is successful, redirect the user
        window.location.href = "https://github.com/Supanicka";
    });
});
