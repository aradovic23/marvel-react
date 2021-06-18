import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Switch, Route } from "react-router-dom";
import getData from "../../fetch";
import "./app.scss";
import CharacterPage from "../CharacterPage/CharacterPage";

function App() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  function setId(id) {
    setFavorites([...favorites, id]);
  }

  function deleteItem(id) {
    const a = favorites.indexOf(id);
    const b = favorites.splice(a, 1);
    setFavorites([...favorites]);
  }

  const filter = data.filter((e) => favorites.includes(e.id));

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main
            filter={filter}
            data={data}
            setId={setId}
            favorites={favorites}
            deleteItem={deleteItem}
          />
        </Route>
        <Route
          path="/character/:id"
          render={(r) => <CharacterPage {...r} data={data}></CharacterPage>}
        ></Route>
        {/* <Route path="/character/:id" component={CharacterPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
