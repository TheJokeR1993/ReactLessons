import { useEffect, useState } from "react";

const Queries = () => {
  const [dog, setDog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countDogs, setCountDogs] = useState(3);
  const getRandomDogApi = async () => {
    setIsLoading(true);
    const respons = await fetch(
      `https://dog.ceo/api/breed/hound/images/random/${countDogs}`
    ).then((response) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return response.json();
    });
    setDog(respons.message);
  };
  console.log(dog);
  useEffect(() => {
    getRandomDogApi();
  }, []);
  if (isLoading) return <div>Loading.....</div>;
  return (
    <div>
        {dog.map(item=><img src={item} alt='dog'/>)}
      <input
        type="number"
        value={countDogs}
        onChange={(e) => setCountDogs(e.target.value)}
      />
      <button onClick={getRandomDogApi}>Get Dog</button>
    </div>
  );
};
export default Queries;
