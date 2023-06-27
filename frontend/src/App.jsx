import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <main className="container mx-auto px-20">
        <Navbar />
        <Routes>
          <Route index path="/" element={<TasksList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
