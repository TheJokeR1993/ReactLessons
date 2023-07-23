import { HashRouter, Route, Routes } from "react-router-dom";
import TodoList from "./components/todo-list/todo-list";
import "./index.css";
import Navigation from "./components/navigation/navigation";
import SchoolList from "./components/school-list/school-list";

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="/school" element={<SchoolList />}></Route>
        <button></button>
      </Routes>
    </HashRouter>
  );
}

export default App;
