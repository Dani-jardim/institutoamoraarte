const headerCursoHtml = (nomeCurso, professores, backgroundImage) => {
    // backgroundImage = "./img/amora_fotografia_bloco03-2020.jpg";
    return `
    <link rel="stylesheet" href="header-curso/header-curso.css" type="text/css" />

    <div id="tituloBloco03">
            <h1>Sobre o curso de ${nomeCurso}</h1>
        </div>
        <div class="professorResponsavel" style='background-image: url("${backgroundImage}");'>
            <h4>${professores}</h4>
        </div>
     `
}

const headerCursoEl = document.querySelector('amora-header-curso');
headerCursoEl.innerHTML = headerCursoHtml(curso, professores, backgroundImage);