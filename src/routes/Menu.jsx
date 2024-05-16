import { Link } from "react-router-dom";
import "../styles/Menu.css";
import { useDispatch } from "react-redux";
import { DeleteHistory } from "../redax/actions";

export default function Menu() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(DeleteHistory());
  };
  return (
    <div className="menu">
      <Link to="/visualnovel" className="link">
        Играть
      </Link>

      <Link to="/history" className="link">
        Хроника путешествия
      </Link>

      <button onClick={handleClick} className="link">
        Удалить прогресс
      </button>
    </div>
  );
}
