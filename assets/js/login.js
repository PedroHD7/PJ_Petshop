const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const register = document.getElementById("btn-register");
const login = document.getElementById("btn-login");

const checkLogin = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (
    emailInput.value !== user.email ||
    passwordInput.value !== user.password
  ) {
    alert("Usuário Não encontrado!");
    return;
  }

  alert("Usuário logado!");
  window.location.href = "/";
};

const saveRegisterData = (name, email, password) => {
  localStorage.setItem("user", JSON.stringify({ name, email, password }));
};

const getRegisterData = () => {
  const nameInput = document.getElementById("name");
  const confirmPasswordInput = document.getElementById("confirm-password");

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === "" ||
    confirmPasswordInput.value === ""
  ) {
    alert("Preencha todos os campos!");
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("As senhas não conferem!");
    return;
  }

  alert("Usuário cadastrado com sucesso!");
  saveRegisterData(nameInput.value, emailInput.value, passwordInput.value);
  window.location.href = "/";
};

register.addEventListener("click", getRegisterData);
login.addEventListener("click", checkLogin);
