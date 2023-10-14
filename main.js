    document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB");
    const resultMessage = document.getElementById("resultMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const valorA = parseFloat(campoA.value);
        const valorB = parseFloat(campoB.value);

        if (isNaN(valorA) || isNaN(valorB)) {
        resultMessage.textContent =
            "Por favor, preencha ambos os campos com números válidos.";
        resultMessage.classList.remove("message");
        resultMessage.classList.add("error-message");
        } else if (valorB > valorA) {
        resultMessage.textContent = "Formulário válido, Parabéns B é maior que A!";
        resultMessage.classList.remove("error-message");
        resultMessage.classList.add("message");
        } else {
        resultMessage.textContent = "Formulário inválido. B não é maior que A.";
        resultMessage.classList.remove("message");
        resultMessage.classList.add("error-message");
        }
    });
    });
