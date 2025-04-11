document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const usernameEmpty = document.getElementById("usernameEmpty");
    const usernameError = document.getElementById("usernameError");
    const usernameSuccess = document.getElementById("usernameSuccess");

    const passwordEmpty = document.getElementById("passwordEmpty");
    const passwordError = document.getElementById("passwordError");
    const passwordSuccess = document.getElementById("passwordSuccess");

    // Resetando estilos e mensagens
    function resetValidation() {
        const inputFields = [usernameInput, passwordInput];
        const messages = [
            usernameEmpty, usernameError, usernameSuccess,
            passwordEmpty, passwordError, passwordSuccess
        ];

        inputFields.forEach(field => {
            field.classList.remove("success", "error", "empty");
        });

        messages.forEach(msg => {
            msg.classList.remove("show");
        });
    }

    resetValidation();

    let isValid = true;

    // Verifica usuário
    if (username === "") {
        usernameInput.classList.add("empty");
        usernameEmpty.classList.add("show");
        isValid = false;
    } else if (username !== "ThuanyGomes") {
        usernameInput.classList.add("error");
        usernameError.classList.add("show");
        isValid = false;
    } else {
        usernameInput.classList.add("success");
        usernameSuccess.classList.add("show");
    }

    // Verifica senha
    if (password === "") {
        passwordInput.classList.add("empty");
        passwordEmpty.classList.add("show");
        isValid = false;
    } else if (password !== "980320") {
        passwordInput.classList.add("error");
        passwordError.classList.add("show");
        isValid = false;
    } else {
        passwordInput.classList.add("success");
        passwordSuccess.classList.add("show");
    }

    if (isValid) {
        window.location.href = "PageHome.html";
        alert("Bem - Vindo Dra. Thuany Gomes !!    :) ");
    }
});
