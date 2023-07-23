import { useState } from "react";
import TodoItem from "../todo-item/todo-item";
import TodoAddItem from "../todo-add-item/todo-add-item";
import "./todo-list.css";
const TodoList = () => {
  console.log(11);
  const [arr, setArr] = useState([
    { id: 1, action: "купить хлеб", isDone: false },
    { id: 2, action: "купить молоко", isDone: true },
  ]);

  const isChange = (value, action) => {
    if (value === action) return true;
    return arr.find((item) => item.action == value) ? false : true;
  };
  const isRename = (obj) => {
    if (obj.action === arr[obj.id - 1].action) return;

    const newArr = arr.map((item) => (item.id === obj.id ? obj : item));
    return setArr(newArr);
  };
  const addItem = (value) => {
    if (value === "") return;
    const isAvailable = (element, index, array) => {
      if (array.length !== index + 1) {
        if (array[index].id + 1 !== array[index + 1].id) return true;
      }
    };

    setArr(
      [
        ...arr,
        {
          id:
            arr.findIndex(isAvailable) !== -1
              ? arr[arr.findIndex(isAvailable)].id + 1
              : arr.length + 1,
          action: value,
          isDone: false,
        },
      ].sort((a, b) => a.id - b.id)
    );
  };
  const deleteItem = (id) => {
    setArr(arr.filter((item) => item.id !== id));
  };

  return (
    <div className="todo-list" >
      {arr.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            action={item.action}
            isDone={item.isDone}
            deleteItem={deleteItem}
            isChange={isChange}
            isRename={isRename}
          />
        );
      })}
      <TodoAddItem addItem={addItem} isChange={isChange} />
    </div>
  );
};
export default TodoList;
