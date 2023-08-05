import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">todo</Link>
      <Link to="/school">school</Link>
      <Link to="/form">form</Link>
      <Link to="/tabs">tabs</Link>
      <Link to="/queries">queries</Link>
      <Link to="/rtkqueries">RTKqueries</Link>
    </div>
  );
};
export default Navigation;
