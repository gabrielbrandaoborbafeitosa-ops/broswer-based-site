function abrirsite() {
    let iframe = document.getElementById('iframesite')
    let site = document.getElementById('inputurl').value;
    iframe.src = site;
}
function abrirnovaguia() {
    let site = document.getElementById('inputurl').value;
    window.open(site)
}