import SchoolItem from "../school-item/school-item";

const arr = ["1a", "2b", "3c", "4d", "5e", "6f", "7g", "8h", "9j", "10k"];

const SchoolList = () => {
  const randomRooms = () => {
    return arr.map((element) => arr[Math.floor(Math.random() * arr.length)]);
  };
  
const Rooms = [randomRooms(),randomRooms(),randomRooms()]

  return (
    <>
      {Rooms.map((item, index) => {
        
        return (
          <div key={index}>
            <SchoolItem  arr={item} />
          </div>
        );
      })}
    </>
  );
};
export default SchoolList;
