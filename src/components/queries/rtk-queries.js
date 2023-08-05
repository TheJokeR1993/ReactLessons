import React, { useState } from "react";
import { useGetRandomDogQuery } from "../../services/dogs";

const RtkQueries = () => {
  const [counts, setCounts] = useState(3);
  const { data, error, isFetching, isLoading } = useGetRandomDogQuery(counts);
  if (isFetching) return <p>Loading.....</p>;
  return (
    <>
      {data?.message?.map((el, index) => (
        <React.Fragment key={index}>
          <img src={el} alt="dog"></img>
        </React.Fragment>
      ))}

      <button
        onClick={() => {
          setCounts((value) => value + 3);
        }}
      >
        toggle
      </button>
    </>
  );
};
export default RtkQueries;
