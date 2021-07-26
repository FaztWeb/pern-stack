import { Container } from "semantic-ui-react";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Menu from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Menu />
      <Container style={{ padding: "2rem", height: "100%" }}>
        <Switch>
          <Route path="/" component={TasksList} exact name="home" />
          <Route path="/new-task" component={TaskForm} />
          <Route path="/edit-task/:id" component={TaskForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
