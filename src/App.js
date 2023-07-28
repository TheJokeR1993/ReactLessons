import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/todo-list/todo-list";
import "./index.css";
import Navigation from "./components/navigation/navigation";
import SchoolList from "./components/school-list/school-list";
import TodoItemAbout from "./components/todo-item-about/todo-item-about";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="/school" element={<SchoolList />}></Route>
        <Route path="/todoItem/:id" element={<TodoItemAbout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
