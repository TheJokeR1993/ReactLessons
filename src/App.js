import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/todo-list/todo-list";
import "./index.css";
import Navigation from "./components/navigation/navigation";
import SchoolList from "./components/school-list/school-list";
import TodoItemAbout from "./components/todo-item-about/todo-item-about";
import FormPage from "./components/form/form";
import Tabs from "./components/tabs/tabs";
import Queries from "./components/queries/queries";
import RtkQueries from "./components/queries/rtk-queries";
import RtkQueriesList from "./components/queries/rtk-queries-list";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="/school" element={<SchoolList />}></Route>
        <Route path="/todoItem/:id" element={<TodoItemAbout />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
        <Route path="/tabs" element={<Tabs />}></Route>
        <Route path="/queries" element={<Queries />}></Route>
        <Route path="/rtkqueries" element={<RtkQueries />}></Route>
        <Route path="/rtkqueriesList" element={<RtkQueriesList />}></Route>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/error" element={<div>Error</div>} />
      </Routes>
    </Router>
  );
}

export default App;
