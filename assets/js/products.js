const conteudoDiv = document.querySelector(".container-select-products");

const renderConditional = (value) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      conteudoDiv.innerHTML = xhr.responseText;
    }
  };

  let url = "";

  if (value === "racao-cachorro") {
    url = "products/dog/racao.html";
  } else if (value === "medicina-cachorro") {
    url = "products/dog/medicina.html";
  } else if (value === "higiene-cachorro") {
    url = "products/dog/higiene.html";
  } else if (value === "brinquedo-cachorro") {
    url = "products/dog/brinquedo.html";
  } else if (value === "racao-gato") {
    url = "/assets/pages/products/cat/racao.html";
  } else if (value === "medicina-gato") {
    url = "/assets/pages/products/cat/medicina.html";
  } else if (value === "higiene-gato") {
    url = "/assets/pages/products/cat/higiene.html";
  } else if (value === "brinquedo-gato") {
    url = "/assets/pages/products/cat/brinquedo.html";
  }

  xhr.open("GET", url, true);
  xhr.send();
};

conteudoDiv.addEventListener("mousedown", (event) => {
  const target = event.target.closest(".products-render-btn");
  if (target) {
    renderConditional(target.getAttribute("value"));
  }
});
