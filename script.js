
document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.querySelector("input[type='password']");
    const toggle = document.createElement("i");
    toggle.classList.add("fa-solid", "fa-eye", "toggle-password");
    toggle.style.cursor = "pointer";

    const passwordWrapper = passwordField.parentElement;
    passwordWrapper.appendChild(toggle);

    toggle.addEventListener("click", () => {
        const isPassword = passwordField.type === "password";
        passwordField.type = isPassword ? "text" : "password";
        toggle.classList.toggle("fa-eye");
        toggle.classList.toggle("fa-eye-slash");
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const name = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const password = form.querySelector("input[name='password']").value;

        if (!name || !email || !password) {
            alert("Please fill in all fields.");
        } else {
            alert("Sign-up successful!");
            form.reset();
        }
    });
});
