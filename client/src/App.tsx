import React, { useEffect, useState } from "react";
import "./style/index.css";

type dataType = {
  message: string;
};

function App() {
  const [data, setData] = useState<dataType>({ message: "" });

  const fetchToApi = async () => {
    const response = await fetch("api");
    const data: dataType = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchToApi();
  });

  return (
    <div className="row">
      <div className="col">
        <p>{data ? data.message : "Loading..."}</p>
      </div>
      <div className="col">
        <p>{data ? data.message : "Loading..."}</p>
      </div>
    </div>
  );
}

export default App;
