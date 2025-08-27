import { Link } from "react-router-dom";
import { movies } from "../data/movies.js";

export default function Movies() {
  return (
    <div>
      <h2>All Movies</h2>
      <ul style={{ paddingLeft: 18 }}>
        {movies.map((m) => (
          <li key={m.id} style={{ marginBottom: 6 }}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
            <span style={{ marginLeft: 8, color: "#666" }}>
              ({m.year}) — {m.genre}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}