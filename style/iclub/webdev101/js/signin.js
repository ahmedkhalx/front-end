handleSubmit = (e) => {
  e.preventDefault();
  try {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    const error = document.getElementById('error');

    if (!email || !name || !password || !confirmpassword) {
      error.style.color = 'red'
      error.innerText = 'Fill Out All The Fields'
      setTimeout(() => {
        error.innerText = ''
      }, 2000);
      return null;
    }
    if (!email.endsWith("@gmail.com")) {
      error.style.color = 'red'
      error.innerText = 'only gmail accounts can signin'
      setTimeout(() => {
        error.innerText = ''
      }, 2000);
      return null;

    }
    if (password !== confirmpassword) {
      error.style.color = 'red'
      error.innerText = 'password and confirm must be the same'

      setTimeout(() => {
        error.innerText = ''
      }, 2000)
      return null;
    }
    if (password.length < 8) {
      error.style.color = 'red'
      error.innerText = 'password must be at least 8 chars'

      setTimeout(() => {
        error.innerText = ''
      }, 2000)
      return null;
    }

  } catch (err) {
    alert("Something went wrong , please try again later")
  }
}

