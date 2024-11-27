const images = document.querySelector('.carousel-images');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.children.length; // Mover al siguiente índice
    images.style.transform = `translateX(-${index * 100}%)`; // Transición horizontal
  }, 3000); // Cambiar cada 3 segundos