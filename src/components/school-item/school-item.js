import { useState } from "react";
import "./school-item.css";
const SchoolItem = ({ arr }) => {
  const [change, setChange] = useState(true);
  return (
    <div className="school-item">
      <div>
        <h2>Same School</h2>
        <button onClick={() => setChange(!change)}>{change ? "Close" : "Open"}</button>
      </div>
      <div>
        {
        arr.map((item, ind) => (
            change
            ?<div key={ind}>{item}</div>
            : ind>=5 && <div key={ind}>{item}</div>
        ))}
      </div>
    </div>
  );
};
export default SchoolItem;
