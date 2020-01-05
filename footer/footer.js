const facebook = {
    link: `https://www.facebook.com/abenaf.org/`,
    icon: `fa fa-facebook-official`,
    label: `Facebook`
};

const instagram = {
    link: `https://www.instagram.com/abenaf_institutoamoraarte/`,
    icon: `fa fa-instagram`,
    label: `Instagram`
};

const youtube = {
    link: `https://www.youtube.com/user/Pontodeculturaabenaf`,
    icon: `fa fa-youtube-play`,
    label: `Youtube`
};

const anoAtual = new Date().getFullYear();

const linkComIcone = (pagina) => {
    return `
    <div class="row">
        <a href="${pagina.link}" target="_blank">
            <i class="${pagina.icon}" style="font-size:24px"></i>
            <p class="redesRodape">${pagina.label}
        </a>
        <br>
    </div>`
}

const footerHtml = () => {
    return `
    <div class="blocoAmora" id="bloco04Amora">
        <div class="institucional icol-desk-offset-03 icol-desk-05 icol-mb-offset-02 icol-mb-07">
            <h2>NOSSAS REDES</h2>
            ${linkComIcone(facebook)}
            ${linkComIcone(instagram)}
            ${linkComIcone(youtube)}
        </div>

        <div class="institucional icol-desk-offset-01 icol-desk-05 icol-mb-offset-02 icol-mb-07">
            <h2>NOSSOS CONTATOS</h2>
            <p> 
                Rua Perola do Oeste, 371 <br>
                Jd. Ana Estela Carapicuíba<br> contato@institutoamora.art.br <br>
            </p>
        </div>
        <div class="institucional icol-desk-offset-02 icol-desk-05 icol-mb-offset-02 icol-mb-07">
            <h2>COLABORE</h2>
            <p>
                Sua contribuição é fundamental <br>
                Banco do Brasil<br> Ag: 1008 - 1 | CC: 140249 - 8<br>
                Titular: Associação Beneficente <br> de Amparo a Familia<br>
                CNPJ: 05679376000198
            </p>
        </div>
        <div class="logoFooter icol-desk-offset-09 icol-desk-02 clearAmora icol-mb-offset-05 icol-mb-03"></div>
        <h3 class="icol-desk-offset-00 icol-desk-06 icol-mb-offset-00 icol-mb-12">
            ${anoAtual} Instituto Amora Arte - Todos os direitos reservados
        </h3>
</div>`
};


const footerEl = document.querySelector('amora-footer');
footerEl.innerHTML = footerHtml();