// import { cards } from '../data/cards';

const keyGen = () => {
    return(
        Math.random().toString(36).substring(2,15) +
        Math.random().toString(36).substring(2,15)
    )
};

export const duplicateArray = (array) => {
    return array.concat(array);
};

export const sortArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

export const regenerateCard = (cards) => {
    return cards.map((card) => ({ ...card, id: keyGen() }));
};

export const duplicateRegenerateSortArray = (cards) => {
    return sortArray(regenerateCard(duplicateArray((cards))));
};

//console.log(duplicateRegenerateSortArray(cards))