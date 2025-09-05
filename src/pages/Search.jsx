import { useSearchParams, Link } from "react-router-dom";
import { movies } from "../data/movies.js";

function filterMovies(list, q) {
  const needle = q.trim().toLowerCase();
  if (!needle) return list;
  return list.filter((m) =>
    m.title.toLowerCase().includes(needle) ||
    String(m.year).includes(needle) ||
    (m.genre ?? "").toLowerCase().includes(needle)
  );
}

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";

  function update(next) {
    setParams({ q: next });
  }

  const results = filterMovies(movies, q);

  return (
    <div>
      <h2>Search</h2>

      <input
        placeholder="search title / year / genre…"
        value={q}
        onChange={(e) => update(e.target.value)}
        style={{ padding: 8, width: 320, marginBottom: 12 }}
      />

      <div style={{ marginBottom: 8, color: "#666" }}>
        {results.length} result{results.length === 1 ? "" : "s"}
        {q ? <> for <strong>{q}</strong></> : null}
      </div>

      <ul style={{ paddingLeft: 18 }}>
        {results.length === 0 ? (
          <li>No matches</li>
        ) : (
          results.map((m) => (
            <li key={m.id} style={{ marginBottom: 6 }}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
              <span style={{ marginLeft: 8, color: "#666" }}>
                ({m.year}) — {m.genre}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
