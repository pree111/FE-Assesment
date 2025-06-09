const cards = document.querySelectorAll('.card');
const radios = document.querySelectorAll('input[name="unit"]');
const totalDisplay = document.getElementById('totalPrice');

function selectCard(card) {
  cards.forEach(c => c.classList.remove('selected'));
  const radio = card.querySelector('input[type="radio"]');
  radio.checked = true;
  card.classList.add('selected');
  totalDisplay.textContent = `$${parseFloat(radio.dataset.price).toFixed(2)} USD`;
}

// Hover to select
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    selectCard(card);
  });
});
