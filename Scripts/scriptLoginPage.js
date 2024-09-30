document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    Login();
  });

function Login() {
  const usuario = document.getElementById("usuario_input").value;
  const senha = document.getElementById("senha_input").value;
  const usuarioCadastrado = "mahindra";
  const senhaCadastrada = "12345";

  if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
    alert("Acesso liberado");
    navigate();
  } else {
    alert("Usuário ou senha inválidos");
    document.getElementById("usuario_input").value = "";
    document.getElementById("senha_input").value = "";
    document.getElementById("usuario_input").focus();
  }
}

function navigate() {
  location.href = "Home.html";
}
