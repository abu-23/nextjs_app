"use client";
import { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch("api/user", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      const data2 = await response.json();
      setData(data2);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="m-12 ">
      <p className="text-gray-500">
        api endpoint: "api/user" in route.js file
      </p>
      <br />
      <h2>User Name: - {data?.name}</h2>
      <h2>Email: - {data?.email}</h2>
      <h2>Website: - {data?.website}</h2>
      <div className="my-4">
        <span>Navigate to <a href="/ssg/user/1" className="text-orange-400">static site generation</a> page</span><br/>
        <span>Navigate to <a href="/ssr/user/1" className="text-orange-400">server side rendering</a> page</span><br/>
      </div>
    </main>
  );
}
