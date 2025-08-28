const imagem = document.getElementById('image');
const mensagem = document.getElementById('mensagem');

imagem.addEventListener('mouseover', function (){
    mensagem.textContent = 'Você passou o mouse na imagem'
    mensagem.addEventListener('mouseout', function () {
        mensagem.textContent = ''
    });
});