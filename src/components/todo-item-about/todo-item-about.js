import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const TodoItemAbout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(id);
  useEffect(() => {
    if (!location.state) navigate("/");
  }, []);

  if (!location.state) return;

  return (
    <>
      <p>{location?.state?.id}</p>
      <p>{location?.state?.value}</p>
      <p>{`${location?.state?.isDone}`}</p>
    </>
  );
};
export default TodoItemAbout;
