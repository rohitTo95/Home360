const eye_slash = document.querySelectorAll(".fa-eye-slash"); //eye-slash

eye_slash.forEach((e) => {
  e.addEventListener("click", () => {
    const inputFieldId = e.attributes[1].value;
    const inputField = document.getElementById(inputFieldId);
    if (e.classList.contains("fa-eye-slash")) {
      e.classList.remove("fa-eye-slash");
      e.classList.add("fa-eye");
      inputField.type = "text";
      return 0;
    }
    e.classList.remove("fa-eye");
    e.classList.add("fa-eye-slash");
    inputField.type = "password";
  });
});
