const altura = document.body.scrollHeight - window.innerHeight;
            //tamaño completo de nuestra pag - tamaño de la ventan
const fondo = document.getElementById('fondo');

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 500;
    if(anchoFondo <= 100)
        fondo.style.width = anchoFondo + '%';
}