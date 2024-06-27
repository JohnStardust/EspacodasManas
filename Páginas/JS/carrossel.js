const box = document.querySelector('.container');
const imagens = document.querySelectorAll('.container img')
let contador = 0;

function slider(){
    contador++;
    if(contador > imagens.length - 8){
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 1200}px)`
}

setInterval(slider, 3000);