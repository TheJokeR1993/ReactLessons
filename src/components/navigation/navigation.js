import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">todo</Link>
      <Link to="/school">school</Link>
    </div>
  );
};
export default Navigation;
