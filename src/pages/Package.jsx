import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default () => {
  // fetch the package name from the URL
  const { packageName } = useParams();
  const [travelpackage, setTravelPackage] = useState(null);

  useEffect(() => {
    // fetch the package data from the server
    fetch(`/.netlify/functions/package?id=${packageName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTravelPackage(data);
      });
  }, [packageName]);

  return (
    <>
      <h1>Package: {packageName}</h1>

      {travelpackage ? (
        <pre>{JSON.stringify(travelpackage, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
