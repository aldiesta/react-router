import { useParams, Link, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";

export default function MovieDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const m = movies.find((x) => String(x.id) === id);

    if (!m) {
        return (
            <div>
                <h2>Movie not found</h2>
                <Link to="/movies">Back to list</Link>
            </div>
        )
    };

return (
    <div>
        <button onClick={() => navigate(-1)}>&larr; Back</button>
        <h2 style={{ marginTop: 12 }}>{m.title}</h2>
        <p>
            Year: {m.year}<br />
            Genre: {m.genre}
        </p>
        <p><Link to="/movies">Back to all movies</Link></p>
    </div>
);
}