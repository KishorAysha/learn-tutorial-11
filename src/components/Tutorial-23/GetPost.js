import React, { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setData({});
        setError("Data not found");
      });
  });
  return (
    <div>
      <p>ID:{data.id}</p>
      <p>{loading ? "Loading...." : data.title}</p>
      <p>{loading ? "Loading...." : data.body}</p>
      {error ? error : null}
    </div>
  );
}
