import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import './App.css'

function App() {

  return (
    <>
      <div style={{ maxWidth: 860, margin: "32px auto", fontFamily: "system-ui" }}>
        <header style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </>
  )
}

export default App
