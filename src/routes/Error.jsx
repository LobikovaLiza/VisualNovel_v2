import { Link } from "react-router-dom";
import "../styles/Error.css";

export default function Error() {
  return (
    <div className="menu">

      <p className="error">Ошибка!</p>

      <Link to="/" className="link">
        Вернуться на главную
      </Link>

    </div>
  );
}