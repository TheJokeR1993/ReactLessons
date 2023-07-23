import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TodoItemAbout = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
