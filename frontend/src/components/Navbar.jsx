import { useNavigate, Link, useParams, useLocation } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const location =  useLocation()

  return (
    <nav className="flex items-center justify-between">
      <Link to="/">
        <h1 className="text-white font-bold text-4xl my-4">Tasks</h1>
      </Link>

      {location.pathname === "/tasks/new" || location.pathname.includes('/tasks/') ? (
        <button
          className="bg-slate-200 text-black font-bold py-2 px-4 rounded-lg my-2"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      ) : (
        <button
          className="bg-slate-200 text-black font-bold py-2 px-4 rounded-lg my-2"
          onClick={() => navigate("/tasks/new")}
        >
          Add Task
        </button>
      )}
    </nav>
  );
}
