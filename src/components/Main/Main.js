import React, {useState, useEffect} from "react";
import "./main.scss";
import Character from "../Character/Character";
import { FaTrashAlt } from "react-icons/fa";


const Main = ({data, setId, filter, favorites, deleteItem}) => {
  const jpg = ".jpg";
  const [search, setSearch] = useState('')

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      data?.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);


  return (
    <div>
      <div className="search-box">
        <input type="text" name="search" id="search" placeholder='Search for more characters' onChange={(e) => setSearch(e.target.value)}
/>
      </div>
      <div className="main-container">
        <div className="card-container">
          {filtered?.map((e) => (
            <Character
              setId={setId}
              img={e.thumbnail.path}
              name={e.name}
              id={e.id}
              key={e.id}
            />
          ))}
        </div>

        <div className="side-container">
          <h1>My Team</h1>
          {filter.map((e) => (
            <div className="sidebar-team" key={e.id}>
              <img src={`${e.thumbnail.path}${jpg}`} alt="no-img"></img>
              <div className="content">
                <h1>{e.name}</h1>
                <span>
                  {favorites ? (
                    <FaTrashAlt
                      onClick={() => {
                        deleteItem(filter.id);
                      }}
                    />
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
