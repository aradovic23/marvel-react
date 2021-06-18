import "./CharacterPage.scss";
import marvel from "../../img/marvel.png";

const CharacterPage = (props) => {
  const { id } = props.match.params;
  const { data } = props;

  console.log(id);
  console.log(data);

  const hero = data.find((e) => e.id == id);
  console.log(hero);

  return (
    <div className="hero-div">
      <div className="hero">
        <img src={hero?.thumbnail.path + ".jpg"} alt="no-img" id="profile" />
        <div className="h1">
          <h1>This is {hero?.name}</h1>
          <p>{hero?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
