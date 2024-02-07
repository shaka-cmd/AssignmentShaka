

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    
    if (username === '' || password === '') {
        errorMessage.textContent = 'Username and password are required.';
    } else if (username !== 'Shaka Dieume' || password !== '123') {
        errorMessage.textContent = 'Invalid username or password.';
    } else {
        errorMessage.textContent = '';
       
        alert('Login successful!');
       
        window.location.href = 'index.html';
    }
}
