import "./CharacterPage.scss";
import { MdArrowBack} from "react-icons/md";

const CharacterPage = (props) => {
  
  const { id } = props.match.params;
  const { data } = props;
  const {goBack} = props.history


  const hero = data.find((e) => e.id === parseInt(id));

  if (!hero) {
    return null;
  }

  return (
    <div className="hero-div">
      <div className="hero">
        <img src={hero?.thumbnail.path + ".jpg"} alt="no-img" id="profile" />
        <div className="h1">
          <h1>{hero?.name}</h1>
          <p>{hero?.description}</p>
          <h3>Total comics appearances:</h3>
          <p>{hero?.comics.available}</p>
          <button onClick={goBack}><MdArrowBack/>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
