// auth.js
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Fetch login data from loginData.json
    const response = await fetch('loginData.json');
    const users = await response.json();

    // Check if credentials match
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Set logged-in status in localStorage
        localStorage.setItem('isLoggedIn', true);
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Show error message
        errorMessage.style.display = 'block';
    }
}
