import { useState } from "react";
import "./todo-add-item.css";
const TodoAddItem = ({ addItem, isChange }) => {
  const [value, setValue] = useState("");
  const [look, setLook] = useState(true);

  return (
    <div>
      <input
        className="todo-add-item-input"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (e.target.value.trim() !== "") return setLook(false);
        }}
      />
      <button
        disabled={look}
        onClick={() => {
          if (isChange(value)) {
            addItem(value);
            setValue("");
            setLook(false);
          } else setLook(true);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default TodoAddItem;
