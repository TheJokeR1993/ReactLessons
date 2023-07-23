import { useState } from "react";
import "./todo-item.css";
import { useNavigate } from "react-router-dom";
const TodoItem = ({ isDone, action, id, deleteItem, isChange, isRename }) => {
  const navigate = useNavigate();
  const [change, setChange] = useState(true);
  const [value, setValue] = useState(action);
  const goToAbout = () =>
    navigate("/todoItem", {
      state: {
        id,
        value,
        isDone,
      },
    });

  return (
    <div onClick={goToAbout} className="todo-item">
      <b>{id}.</b>
      {change ? (
        <h2>{action}</h2>
      ) : (
        <input
          autoFocus
          onChange={(e) => setValue(e.target.value)}
          className="todo-item-input"
          type="text"
          value={value}
        />
      )}

      <input type="checkbox" defaultChecked={isDone} />
      <button onClick={() => deleteItem(id)}>Delete</button>

      {change ? (
        <button type="text" onClick={() => setChange(!change)}>
          Change
        </button>
      ) : (
        <button
          type="text"
          onClick={() => {
            if (isChange(value, action)) {
              isRename({ id: id, action: value, isDone: isDone });
              setChange(!change);
            }
          }}
        >
          Save
        </button>
      )}
    </div>
  );
};
export default TodoItem;
