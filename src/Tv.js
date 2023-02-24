import React, { useState, useEffect } from "react";

export default function Tv() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=cdsVJfSMDm2BHWWVpVJ73JshZU5MbabWsmYQ-Tpb0Dw`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(res);
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  return(<main className="main">
  <div className="tvContainer">
 
  <figure className="tv">{img} </figure>
 </div>
 <div className="remoteContainer">
<input
  className="input"
  type="text"
  placeholder="Search Anything..."
  value={img}
  onChange={(e) => setImg(e.target.value)}
/>
 </div>
 </main>

  )
}
