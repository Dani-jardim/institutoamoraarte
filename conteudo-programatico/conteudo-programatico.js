const itemDoConteudoProgramatico = (index, conteudo) => {
    return `<button class="accordion">Aula ${index + 1}</button>
        <div class="panel">
            <p>${conteudo}</p>
        </div>`
}

const conteudoProgramaticoHtml = (listaDeAulas) => {
        return `<h2><strong>Conteúdo Programático</strong></h2>
    ${listaDeAulas.map((item, index) => {
        return `${itemDoConteudoProgramatico(index, item)}`;
    }).join('')}`;
}

const conteudoProgramaticoEl = document.querySelector('conteudo-programatico');
                    conteudoProgramaticoEl.innerHTML = conteudoProgramaticoHtml(listaDeAulas);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}