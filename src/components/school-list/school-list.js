
import SchoolItem from "../school-item/school-item";


const SchoolList = () => {
    console.log(12);
  const arr = ["1a", "2b", "3c", "4d", "5e", "6f", "7g", "8h", "9j", "10k"];
  return (
    <>
      {arr.map((item, index) => {
        return (
          <div key={index}>
            <SchoolItem key={item.id} arr={arr} />
          </div>
        );
      })}
    </>
  );
};
export default SchoolList;
