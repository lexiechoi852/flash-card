export type FlashcardSet = {
    id: string;
    topic: string;
    cards: FlashCard[];
}

export type FlashCard = {
    id: string;
    question: string;
    answer: string;
}