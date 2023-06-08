function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const errorElement = document.getElementById("login-error");

  errorElement.textContent = "";

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email || !emailRegex.test(email)) {
    errorElement.textContent = "Please enter a valid email address.";
    return;
  }

  if (!password) {
    errorElement.textContent = "Please enter a password.";
    return;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log("User logged in:", user);

      window.location.href = "intro.html";
    })
    .catch((error) => {
      errorElement.textContent = error.message;
    });
}
