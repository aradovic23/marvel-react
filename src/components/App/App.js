import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import getData from "../../fetch";
import "./app.scss";

function App() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);


  function setId(id) {
    setFavorites([...favorites, id]);
  }

  const filter = data.filter((e) => favorites.includes(e.id));

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  console.log(filter);

  return (
    <div className="App">
      <Header />
      <Main filter={filter} data={data} setId={setId} favorites={favorites}/>
    </div>
  );
}

export default App;
