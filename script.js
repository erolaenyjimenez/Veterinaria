document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Email inválido ❌");
        return;
    }

    let modal = new bootstrap.Modal(document.getElementById("modalConfirm"));
    modal.show();

    setTimeout(() => {
        window.location.href = `mailto:vet@petcare.com?subject=Consulta&body=Hola soy ${nombre}`;
    }, 1500);
});