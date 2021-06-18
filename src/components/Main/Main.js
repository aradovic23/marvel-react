import React from "react";
import "./main.scss";
import Character from "../Character/Character";
import { FaTrashAlt } from "react-icons/fa";

const Main = (props) => {
  const { data } = props;
  const { setId } = props;
  const { filter } = props;
  const jpg = ".jpg";
  const { favorites } = props;
  const { deleteItem } = props;
  console.log(favorites);

  return (
    <div>
      <div className="search-box">
        <input type="text" name="search" id="search" />
        <button>Go</button>
      </div>
      <div className="main-container">
        <div className="card-container">
          {data.map((e) => (
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
