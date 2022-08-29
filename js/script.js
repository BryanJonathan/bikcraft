const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  //Verifica se inclui o href na url
  if (url.includes(href)) {
    //Adiciona a class ao link
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
