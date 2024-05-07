const imgs2 = document.getElementById("img-projetos2");
const img2 = document.querySelectorAll("#img-projetos2 img");
let idx2 = 0

function carrossel2(){
    idx2++;

    if(idx2 > img2.length - 3){
        idx2 = 0;
    }

    imgs2.style.transform = `translateX(${-idx2 * 500}px)`;
}

setInterval(carrossel2, 1800);

const imgs = document.getElementById("img-projetos");
const img = document.querySelectorAll("#img-projetos img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 3){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);

const galleryImgs = document.querySelectorAll('#img-projetos img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let currentImgIndex = 0;

galleryImgs.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImgIndex = index;
    openModal(img.src);
  });
});

leftArrow.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex - 1 + galleryImgs.length) % galleryImgs.length;
  modalImg.src = galleryImgs[currentImgIndex].src;
});

rightArrow.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % galleryImgs.length;
  modalImg.src = galleryImgs[currentImgIndex].src;
});

function openModal(src) {
  modal.style.display = 'block';
  modalImg.src = src;
}

function closeModal() {
  modal.style.display = 'none';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none'; // Oculta o modal ao clicar no botão de fechar
}

window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none'; // Fecha o modal se clicar fora da imagem
    }
});

// Adiciona evento de clique a todas as imagens da galeria
var imagens = document.querySelectorAll("#img-projetos img");
for (var i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function() {
        var imageSrc = this.src;
        openModal(imageSrc);
    });
}


// Move o placeholder para cima quando o input é focado
const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.nextElementSibling.classList.add('focused');
    });
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.nextElementSibling.classList.remove('focused');
        }
    });
});

var paragrafo = document.getElementById('texto');
var cursor = document.querySelector('.cursor')
var texto = paragrafo.innerHTML
var index = 0
const escrever = () => {
  paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

  if (texto.length > index) {
    if (index == 0){
      paragrafo.innerHTML = texto.charAt(index) 
    } else {
      paragrafo.innerHTML += texto.charAt(index) 
    }

    paragrafo.innerHTML += '|'

    index++
    setTimeout(escrever, 150)

  } 
}

escrever()