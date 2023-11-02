import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FlashCard } from '../types/flashcard';

type CardFlipProps = {
    card: FlashCard
}

export default function CardFlip({ card }: CardFlipProps) {
    const [isFlipped, setIsFlipped] = useState<boolean>(false)
    
    useEffect(() => {
        setIsFlipped(false)
    }, [card.id])

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="h-80 w-96 bg-white rounded-lg border border-gray-200 shadow-md flex justify-center items-center"
        >
            <div className="p-5 overflow-auto">
                <p className="mb-3 font-bold text-gray-700">{card.question}</p>
            </div>
        </div>

        <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="h-80 w-96 bg-white rounded-lg border border-gray-200 shadow-md flex justify-center items-center"
        >
            <div className="p-5 overflow-auto">
                <p className="mb-3 font-bold text-gray-700">{card.answer}</p>
            </div>
        </div>
  </ReactCardFlip>
  )
}
