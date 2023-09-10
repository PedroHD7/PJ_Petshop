const cardsContainer = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".card");

let currentIndex = 0;
let startX = 0;
let isDragging = false;
let animationFrameId = null;
const cardWidth = cards[0].offsetWidth;
const sensitivity = 50; // Sensibilidade para considerar um swipe

function showCard(index) {
  if (index < 0) index = 0;
  if (index >= cards.length) index = cards.length - 1;

  currentIndex = index;
  const translateX = -currentIndex * cardWidth;

  cancelAnimationFrame(animationFrameId);
  animationFrameId = requestAnimationFrame(() => {
    cardsContainer.style.transition = "transform 0.3s ease-in-out";
    cardsContainer.style.transform = `translateX(${translateX}px)`;
  });
}

function handleStart(event) {
  isDragging = true;
  startX = getClientX(event);
  cardsContainer.style.transition = "none";
}

function handleMove(event) {
  if (!isDragging) return;

  const deltaX = getClientX(event) - startX;
  const dragDirection = deltaX > 0 ? -1 : 1;

  const cardDelta = Math.abs(Math.round(deltaX / cardWidth));
  showCard(currentIndex + dragDirection * cardDelta);
}

function handleEnd() {
  if (isDragging) {
    isDragging = false;
    cardsContainer.style.transition = "transform 0.3s ease-in-out";
    showCard(currentIndex);
  }
}

function getClientX(event) {
  return event.type.startsWith("mouse")
    ? event.clientX
    : event.touches[0].clientX;
}

cardsContainer.addEventListener("mousedown", handleStart);
cardsContainer.addEventListener("mousemove", handleMove);
cardsContainer.addEventListener("mouseup", handleEnd);

cardsContainer.addEventListener("touchstart", handleStart);
cardsContainer.addEventListener("touchmove", handleMove);
cardsContainer.addEventListener("touchend", handleEnd);

showCard(currentIndex);
