import FlashCardGrid from "../components/FlashCardGrid";

export default function FlashCardListing() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Flashcards</h2>
      </div>
      <FlashCardGrid />
    </div>
  )
}
