document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();

  if (!username || !password) {
    document.getElementById('errorMessage').classList.remove('hidden');
    return;
  }

  // Encrypt password with salt (dummy implementation)
  var saltedPassword = saltPassword(password);

  // Save data in local storage
  localStorage.setItem('Password ' + username, saltedPassword);

  // Redirect to homepage.html
  window.location.href = 'homepage.html';
});

function saltPassword(password) {
  // Dummy implementation, should use proper encryption
  return password + 'salt';
}
