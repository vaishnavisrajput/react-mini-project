import React, { useEffect, useState } from "react";
import axios from "axios";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/vaishnavisrajput")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  console.log(data);

  return (
    <>
      <div className="bg-black text-white py-4">
        <h1>Hi! I am Vaishnavi Singh Rajput</h1>
        <div className="flex justify-center">
        <img className="rounded-full" src={data.avatar_url} alt="Git picture" />
        </div>
        
      </div>
      <div className="bg-black text-white py-4">
        Github Followers: {data.followers}
      </div>
      <div className="bg-black text-white py-4">Github Bio: {data.bio}</div>
      <div className="bg-black text-white py-4">
        Github url:
        <a href="https://github.com/vaishnavisrajput" target="_blank">
          {data.url}
        </a>
      </div>
    </>
  );
}

export default Github;
