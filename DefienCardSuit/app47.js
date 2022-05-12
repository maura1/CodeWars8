/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/
//Using the arrow function with tenary operator
const defineSuit = (card) =>
    card.substr(-1) === '♣'
        ? 'clubs'
        : card.substr(-1) === '♦'
        ? 'diamonds'
        : card.substr(-1) === '♥'
        ? 'hearts'
        : 'spades';

//Using the switch statement

function defineSuit(card) {
    let suit = card.slice(-1);
    switch (suit) {
        case '♣':
            return 'clubs';
            break;
        case '♦':
            return 'diamonds';
            break;
        case '♥':
            return 'hearts';
            break;
        default:
            return 'spades';
    }
}

//Checking to see which matches the last element
function defineSuit(card) {
    return { '♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts' }[
        card.slice(-1)
    ];
}
