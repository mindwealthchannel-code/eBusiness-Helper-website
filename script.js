function toggleCard(clickedCard) {
  const isActive = clickedCard.classList.contains('active');
  document.querySelectorAll('.rail-card').forEach(card => {
    card.classList.remove('active');
  });
  if (!isActive) {
    clickedCard.classList.add('active');
  }
}
