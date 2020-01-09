const headerCursoHtml = (nomeCurso) => {
    return `
    <link rel="stylesheet" href="header-curso/header-curso.css" type="text/css" />

    <div id="tituloBloco03">
            <h1>Sobre o curso de ${nomeCurso}</h1>
        </div>
        <div class="professorResponsavel">
            <h4>Professores Responsáveis: Gustavo Názio e Wesley Gomes</h4>
        </div>
     `
}

const headerCursoEl = document.querySelector('amora-header-curso');
headerCursoEl.innerHTML = headerCursoHtml('Coregrafia Musical');