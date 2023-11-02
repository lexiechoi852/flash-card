import { useParams } from "react-router-dom"
import { useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { FlashcardSet } from "../types/flashcard";
import CardFlip from "../components/CardFlip";

export default function FlashCard() {
  const [flashcard, setFlashcard] = useState<FlashcardSet | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const { id } = useParams()

  const { flashcards } = useAppSelector((state) => state.flashcard);

  useEffect(() => {
    const flashcardSet = flashcards.filter((flashcard) => flashcard.id === id)

    setFlashcard(flashcardSet[0])
  }, [flashcards, id])
  
  return (
    <div>
      <div className="text-3xl font-bold mb-4 text-center py-10">
      <div className="flex justify-center">
        {flashcard && <CardFlip card={flashcard.cards[currentIndex]} />}
      </div>
        <div className="flex justify-center mt-4">
          {flashcard && currentIndex !== 0 && <button 
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="mr-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Previous
          </button>}
          {flashcard && (currentIndex <= flashcard.cards.length - 2) && <button 
            onClick={() => setCurrentIndex(currentIndex + 1)} 
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Next
          </button>}
        </div>
      </div>
    </div>
  )
}
