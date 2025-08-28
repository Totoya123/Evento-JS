console.log(document.body);

console.log(document.body.childNodes[1]);

//selecionar por tag
const ListaItens = document.getElementsByTagName('li')
console.log(ListaItens);

//para pegar o elemento btn e usar da escuta click
// const botao = document.getElementById('btn');
// botao.addEventListener('click', function() {
// });

const cor = document.getElementById('btn');
cor.addEventListener('click', function(){
    document.body.style.backgroundColor = 'rgba(62, 40, 102, 0.76)'
});
