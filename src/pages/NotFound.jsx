import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>That route doesn’t exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}