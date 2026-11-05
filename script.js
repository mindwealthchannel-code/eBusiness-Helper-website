function toggleCard(clickedCard) {
  // Check karein ke kya pehle se yeh card open hai
  const isActive = clickedCard.classList.contains('active');
  
  // Pehle saare cards ko band (close) kar dein
  document.querySelectorAll('.rail-card').forEach(card => {
    card.classList.remove('active');
  });
  
  // Agar card pehle se open nahi tha, toh usay open kar dein
  if (!isActive) {
    clickedCard.classList.add('active');
  }
}
