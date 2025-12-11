// const block = document.querySelector('.map-widget__wrapper');

// block.addEventListener('click', (e) => {
//   // размеры блока
//   const rect = block.getBoundingClientRect();

//   // координаты клика относительно блока
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   // переводим в проценты
//   const leftPercent = (x / rect.width) * 100;
//   const topPercent = (y / rect.height) * 100;

//   const leftRounded = leftPercent.toFixed(2);
//   const topRounded = topPercent.toFixed(2);

//   console.log(`
//       top: ${topRounded}%;
//       left: ${leftRounded}%;
//     `);
// });

const mapWidgetCards = document.querySelectorAll('.map-widget__card');

function clearMapWidgetCards() {
  mapWidgetCards.forEach((card) => card.classList.remove('active'));
}

mapWidgetCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const isLayout = event.target.classList.contains('map-widget__card-layout');
    const isPoint = event.target.classList.contains('map-widget__card-point');

    if (isLayout) {
      event.currentTarget.classList.remove('active');
    }

    if (isPoint) {
      clearMapWidgetCards();
      event.currentTarget.classList.add('active');
    }
  });
});
