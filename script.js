// Seleccionamos el elemento .cat
const cat = document.querySelector('.cat');

// Agregamos un evento de click al elemento .cat
cat.addEventListener('click', () => {
  const catRect = cat.getBoundingClientRect();
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.position = 'absolute';

      // Ajustamos la posición vertical para que salgan arriba de la cabeza del gato
      heart.style.top = `${catRect.top - 50 + Math.random() * 20}px`;

      // Ajustamos la posición horizontal para que salgan en una zona más amplia
      heart.style.left = `${catRect.left - 30 + Math.random() * 200}px`;

      heart.style.transform = `rotate(${Math.random() * 360}deg) scale(0.5)`;
      heart.style.transition = 'all 2s ease-out';

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.top = '-100px';
        heart.style.opacity = '0';
      }, 2000);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, i * 50);
  }
});