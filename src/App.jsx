import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import Fighters from './pages/Fighters'
import About from './pages/About'
import Shop from './pages/Shop' 

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col">
      <Navbar />

      <main className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/fighters" element={<Fighters />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="mt-16 pb-8 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} Lion Combat League (Pvt) Ltd.
      </footer>
    </div>
  )
} 
