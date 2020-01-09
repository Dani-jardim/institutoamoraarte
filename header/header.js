const headerHtml = () => {
    return `
    <link rel="stylesheet" href="header/header-amora.css" type="text/css" />

<div class="blocoAmora" id="bloco01Amora">
<div class="redesSociais icol-desk-offset-20 icol-desk-04 icol-mb-offset-09 icol-mb-03">
<a href="https://www.instagram.com/abenaf_institutoamoraarte/" target="_blank"><img border="0" alt="instagram" src="img/icon_instagram.png" width="25" height="25"></a>
<a href="https://www.facebook.com/abenaf.org/" target="_blank"><img border="0" alt="facebook" src="img/icon_facebook.png" width="25" height="25"></a>
<a href="https://www.youtube.com/user/Pontodeculturaabenaf" target="_blank"><img class="you" border="0" alt="youtube" src="img/icon_youtube.png" width="33" height="25"></a>
</div>

<div class="logoAmora icol-desk-offset-09 icol-desk-07 icol-mb-offset-03 icol-mb-06" alt="Instituto Amora Arte">
</div>
</div>   `
}

const el = document.querySelector('amora-header');
el.innerHTML = headerHtml();