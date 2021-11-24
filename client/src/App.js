import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Menu from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route index path="/" element={<TasksList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
