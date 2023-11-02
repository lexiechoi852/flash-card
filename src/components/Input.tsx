import { useState } from "react"
import { addFlashcards } from "../assets/api/openai"
import { useAppDispatch } from "../store/hooks"
import { generateFlashcard } from "../store/flashcardSlice"

export default function Input() {
  const [value, setValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const dispatch = useAppDispatch();
  
  const generate = async () => {
    setIsLoading(true)
    const flashcard = await addFlashcards(value)
    
    dispatch(generateFlashcard(flashcard))
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center p-10">
      <input 
          type="text"
          value={value}
          placeholder="Enter a topic to begin generating flashcards"
          onChange={(e) => setValue(e.target.value)} 
          className="p-3 rounded-full border-2 border-gray-300 focus:border-orange-500 outline-none transition-colors w-10/12"
      />
      <button 
        type="button" 
        onClick={generate}
        className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
      >
        {isLoading ? <div>Generating...</div> : <div>Generate Flashcards</div>}
      </button>
    </div>
  )
}
