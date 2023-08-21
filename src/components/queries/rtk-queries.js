import React, { useEffect, useMemo, useState } from "react";
import { useGetRandomDogQuery } from "../../services/dogs";
import { useFetcher, useLocation, useNavigate } from "react-router-dom";
import Test from "./test";

const RtkQueries = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [counts, setCounts] = useState(false);
  const { data, error, isFetching, isLoading } = useGetRandomDogQuery(3);

  /*   useEffect(() => {
    if(!location.state) navigate("/")
    if (error) navigate("/error", { state: { error: error } });
  }, [error]); */

  const pri = () => {
    console.log("priovet");
  };

  useEffect(() => {
    console.log("render");
  });
  const dogsList = useMemo(() => {
    return data?.message?.map((el, index) => {
      return (
        <React.Fragment key={index}>
          <Test pri={pri} el={el} />
        </React.Fragment>
      );
    });
  }, [data]);

  if (isFetching) return <p>Loading.....</p>;

  return (
    <>
      {dogsList}

      <button
        onClick={() => {
          setCounts((value) => !value);
        }}
      >
        toggle
      </button>
    </>
  );
};
export default RtkQueries;
