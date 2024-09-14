import React, { useState, useEffect } from "react";
import useData from "../hooks/useData";

const Person = () => {
  const [id, setId] = useState(1);
  const {
    data: person,
    setData: setPerson,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useData(`https://jsonplaceholder.typicode.com/users/${id}`);

  return (
    <>
      <select
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{person.name}</h1>
          <h1>{person.email}</h1>
        </>
      )}
    </>
  );
};

export default Person;
