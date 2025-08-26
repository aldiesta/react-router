import { movies } from "../data/movies";

export default function Movies() {
    return (
    <div>
      <h2>All Movies</h2>
      <ul style={{ paddingLeft: 18 }}>
        {movies.map((m) => (
          <li key={m.id} style={{ marginBottom: 6 }}>
            {m.title}
            <span style={{ marginLeft: 8, color: "#666" }}>
              ({m.year}) — {m.genres.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
    );
}