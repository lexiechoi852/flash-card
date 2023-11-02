import { Link } from "react-router-dom";
import Input from "../components/Input";
import FlashCardGrid from "../components/FlashCardGrid";

export default function HomePage() {
  return (
    <div className="flex-grow">
      <Input />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Top Flashcards</h2>
          <Link to="/flashcards" className="text-orange-500 hover:underline">View All →</Link>
        </div>
        <FlashCardGrid />
      </div>
    </div>
  )
}
