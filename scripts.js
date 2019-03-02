const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    // console.log('Clicked');
    // console.log(this);
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        // do card matching
        if (firstCard.dataset.framework === 
            secondCard.dataset.framework) {
             // matched
             firstCard.removeEventListener('click', flipCard);
             secondCard.removeEventListener('click', flipCard);
        } else  {
            // not matched
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1000);
            
        }
        
    }

}

cards.forEach(card => card.addEventListener('click', flipCard));