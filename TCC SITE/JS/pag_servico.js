var caixa1 = document.getElementById('caixa1');
var caixa2 = document.getElementById('caixa2');
var caixa3 = document.getElementById('caixa3');
var caixa4 = document.getElementById('caixa4');

var grande = {
    nome: document.getElementById('nomeGrande'),
    preco: document.getElementById('preçoGrande'),
    descricao: document.getElementById('descriçãoGrande')
}


const imagens = {
    imagemGrande: document.getElementById('imagemgrande'),
    imagem1: document.getElementById('imagem1'),
    imagem2: document.getElementById('imagem2'),
    imagem3: document.getElementById('imagem3'),
    imagem4: document.getElementById('imagem4')
}






caixa1.addEventListener('click',caixa01)
caixa2.addEventListener('click',caixa02)
caixa3.addEventListener('click',caixa03)
caixa4.addEventListener('click',caixa04)


function caixa01(){

    localStorage.setItem('nome', grande.nome.innerHTML)
    grande.nome.innerHTML = caixa1.querySelector('.nome').innerHTML;
    caixa1.querySelector('.nome').innerHTML = localStorage.getItem('nome');

    localStorage.setItem('preço', grande.preco.innerHTML)
    grande.preco.innerHTML = caixa1.querySelector('.preço').innerHTML;
    caixa1.querySelector('.preço').innerHTML = localStorage.getItem('preço')

    localStorage.setItem('descricao', grande.descricao.innerHTML)
    grande.descricao.innerHTML = caixa1.querySelector('.descricao').innerHTML;
    caixa1.querySelector('.descricao').innerHTML = localStorage.getItem('descricao');

    localStorage.setItem('imagemgrande', imagens.imagemGrande.src)
    imagens.imagemGrande.src = imagens.imagem1.src
    imagens.imagem1.src = localStorage.getItem('imagemgrande')
    localStorage.setItem('imagemgrande', imagens.imagemGrande.src)
}


function caixa02(){
    localStorage.setItem('nome', grande.nome.innerHTML)
    grande.nome.innerHTML = caixa2.querySelector('.nome').innerHTML;
    caixa2.querySelector('.nome').innerHTML = localStorage.getItem('nome');

    localStorage.setItem('preço', grande.preco.innerHTML)
    grande.preco.innerHTML = caixa2.querySelector('.preço').innerHTML;
    caixa2.querySelector('.preço').innerHTML = localStorage.getItem('preço')

    localStorage.setItem('descricao', grande.descricao.innerHTML)
    grande.descricao.innerHTML = caixa2.querySelector('.descricao').innerHTML;
    caixa2.querySelector('.descricao').innerHTML = localStorage.getItem('descricao')
    
    localStorage.setItem('imagemgrande', imagens.imagemGrande.src)
    imagens.imagemGrande.src = imagens.imagem2.src
    imagens.imagem2.src = localStorage.getItem('imagemgrande')
    localStorage.setItem('imagemgrande', imagens.imagemGrande.src)
}


function caixa03(){
    localStorage.setItem('nome', grande.nome.innerHTML)
    grande.nome.innerHTML = caixa3.querySelector('.nome').innerHTML;
    caixa3.querySelector('.nome').innerHTML = localStorage.getItem('nome');

    localStorage.setItem('preço', grande.preco.innerHTML)
    grande.preco.innerHTML = caixa3.querySelector('.preço').innerHTML;
    caixa3.querySelector('.preço').innerHTML = localStorage.getItem('preço')

    localStorage.setItem('descricao', grande.descricao.innerHTML)
    grande.descricao.innerHTML = caixa3.querySelector('.descricao').innerHTML;
    caixa3.querySelector('.descricao').innerHTML = localStorage.getItem('descricao')

    localStorage.setItem('imagemgrande', imagens.imagemGrande.src)
    imagens.imagemGrande.src = imagens.imagem3.src
    imagens.imagem3.src = localStorage.getItem('imagemgrande')
    localStorage.setItem('imagemgrande', imagens.imagemGrande.src)
}


function caixa04(){

    localStorage.setItem('nome', grande.nome.innerHTML)
    grande.nome.innerHTML = caixa4.querySelector('.nome').innerHTML;
    caixa4.querySelector('.nome').innerHTML = localStorage.getItem('nome');

    localStorage.setItem('preço', grande.preco.innerHTML)
    grande.preco.innerHTML = caixa4.querySelector('.preço').innerHTML;
    caixa4.querySelector('.preço').innerHTML = localStorage.getItem('preço')

    localStorage.setItem('descricao', grande.descricao.innerHTML)
    grande.descricao.innerHTML = caixa4.querySelector('.descricao').innerHTML;
    caixa4.querySelector('.descricao').innerHTML = localStorage.getItem('descricao') 

    localStorage.setItem('imagemgrande', imagens.imagemGrande.src)
    imagens.imagemGrande.src = imagens.imagem4.src
    imagens.imagem4.src = localStorage.getItem('imagemgrande')
    localStorage.setItem('imagemgrande', imagens.imagemGrande.src)
}

