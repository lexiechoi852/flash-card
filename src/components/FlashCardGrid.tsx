import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export default function FlashCardGrid() {
  const { flashcards } = useAppSelector((state) => state.flashcard);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
        {flashcards.map((flashcard) => (
            <div key={flashcard.id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                <div className="p-5">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{flashcard.topic}</h2>
                    <p className="mb-3 font-normal text-gray-700">{flashcard.topic} with {flashcard.cards.length} flashcards</p>
                    <Link to={`/flashcard/${flashcard.id}`} className="text-orange-500 hover:underline">View Cards →</Link>
                </div>
            </div>
        ))}
    </div>
  )
}
