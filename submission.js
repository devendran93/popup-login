
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    // Here, you can add logic to send the login data to your server.
    alert('Login successful (for demo purposes)');
    popupOverlay.style.display = 'none';
});