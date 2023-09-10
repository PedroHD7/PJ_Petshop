const arrBtns = document.querySelectorAll(".btn-option-service");
const conteudoDiv = document.querySelector(".container-description-service");

const renderConditional = (value) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      conteudoDiv.innerHTML = xhr.responseText;
    }
  };

  if (value === "hospedagem") {
    xhr.open("GET", "services/hospedagem.html", true);
  } else if (value === "banho") {
    xhr.open("GET", "services/banho.html", true);
  } else if (value === "tosa") {
    xhr.open("GET", "services/tosa.html", true);
  } else {
    alert("Houve um erro, por favor recarregue a página!");
  }

  xhr.send();
};

arrBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    arrBtns.forEach((btn) => {
      btn.classList.remove("btn-service-active");
    });
    renderConditional(btn.value);
    btn.classList.add("btn-service-active");
  });
});
