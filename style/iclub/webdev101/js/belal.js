const slider = document.querySelector('.rev-slider');
const cards = Array.from(slider.children);
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

let currentIndex = 0;

function updateCards() {
    const containerWidth = slider.parentElement.offsetWidth;
    const cardWidth = cards[0].offsetWidth + 20;
    const maxOffset = cardWidth * cards.length - containerWidth;

    cards.forEach((card, idx) => {
        card.classList.remove('focus', 'blur');
        if (idx === currentIndex) {
            card.classList.add('focus');
        } else {
            card.classList.add('blur');
        }
    });

    let offset = cardWidth * currentIndex - (containerWidth - cardWidth) / 2;
    offset = Math.max(0, Math.min(offset, maxOffset));

    slider.style.transform = `translateX(-${offset}px)`;
}


leftBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCards();
});

rightBtn.addEventListener('click', () => {
    currentIndex = Math.min(cards.length - 1, currentIndex + 1);
    updateCards();
});

updateCards();
window.addEventListener('resize', updateCards);
