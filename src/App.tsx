import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import FlashCard from './pages/FlashCard'
import FlashCardListing from './pages/FlashCardListing'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} /> 
          <Route path="/flashcard/:id" element={<FlashCard />} /> 
          <Route path="/flashcards" element={<FlashCardListing />} />
          <Route path="*" element={<NotFound />} />
        </Route> 
      </Routes>
    </>
  )
}

export default App
