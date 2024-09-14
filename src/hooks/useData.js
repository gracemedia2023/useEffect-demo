import React, { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    setTimeout(() => {
      fetch(url, {
        signal: controller.signal,
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch request aborted");
          } else {
            setError(err.name);
            setIsLoading(false);
          }
        });
    }, 2000);

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    setData,
    isLoading,
    setIsLoading,
    error,
    setError,
  };
};

export default useData;
