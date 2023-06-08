function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const errorElement = document.getElementById("signup-error");

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
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log("User signed up:", user);
    })
    .catch((error) => {
      errorElement.textContent = error.message;
    });
}
