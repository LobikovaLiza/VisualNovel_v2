import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/History.css";
import { useDispatch, useSelector } from "react-redux";
import { selectHistory } from "../redax/selectors";
import { NextHistory } from "../redax/actions";

export default function History() {
  const history = useSelector(selectHistory);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHistory = (new_chapter, new_witch, new_priest, new_elf) => {
    dispatch(NextHistory({ new_chapter, new_witch, new_priest, new_elf }));
    navigate("/visualnovel");
  };
  return (
    <div className="conteiner">
      <Link className="go_to_home" to="/">
        ⌂
      </Link>

      <div className="history">
        {history.includes("chapter_1(witch_false;pries_false;elf_false)_finished") ? (
          <div
            className="story1"
            onClick={() => handleHistory("1", false, false, false)}
          >
            Начало путешествия
          </div>
        ) : (
          <div className="story1">???</div>
        )}

        <div className="line1"></div>
        <div className="line2"></div>

        <div className="story2">
          {history.includes("chapter_2v1(witch_false;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("2v1", false, false, false)}>
              Помощь старику
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_2v2(witch_false;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("2v2", false, false, false)}>
              Фландэр
            </div>
          ) : (
            <div>???</div>
          )}
        </div>

        <div className="line3"></div>

        <div className="line4">
          <div className="line4_1"></div>
          <div className="line4_2"></div>
        </div>

        <div className="story3">
          <div className="story3_1">
            {history.includes("chapter_3v1(witch_false;pries_false;elf_false)_finished") ? (
              <div onClick={() => handleHistory("3v1", false, false, false)}>
                Встреча с гадалкой
              </div>
            ) : (
              <div>???</div>
            )}

            {history.includes("chapter_3v2(witch_false;pries_false;elf_false)_finished") ? (
              <div onClick={() => handleHistory("3v2", false, false, false)}>
                Фландэр
              </div>
            ) : (
              <div>???</div>
            )}
          </div>
          <div className="line5"></div>
        </div>

        <div className="line6">
          <div className="line6_1"></div>
          <div className="line6_2"></div>
        </div>

        <div className="line7"></div>

        <div className="line8">
          <div></div>
          <div></div>
        </div>

        <div className="story4">
          {history.includes("chapter_5v1(witch_true;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("5v1", true, false, false)}>
              Встреча в лесу
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_5v2(witch_true;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("5v2", true, false, false)}>
              Ночь в лесу
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_5v1(witch_false;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("5v1", false, false, false)}>
              Встреча в лесу
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_5v2(witch_false;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("5v2", false, false, false)}>
              Ночь в лесу
            </div>
          ) : (
            <div>???</div>
          )}
        </div>

        <div className="line9">
          <div></div>
          <div></div>
        </div>

        <div className="line10">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="story5">
          {history.includes("chapter_7v2(witch_true;pries_true;elf_false)_finished") ? (
            <div onClick={() => handleHistory("7v1", true, true, false)}>
              Концовка 1
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_7v3(witch_true;pries_true;elf_false)_finished") ? (
            <div onClick={() => handleHistory("7v3", true, true, false)}>
              Концовка 2
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_7v1(witch_true;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("7v1", true, false, false)}>
              Концовка 3
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_7v3(witch_true;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("7v3", true, false, false)}>
              Концовка 4
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_7v2(witch_false;pries_true;elf_false)_finished") ? (
            <div onClick={() => handleHistory("7v1", false, true, false)}>
              Концовка 5
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_7v3(witch_false;pries_true;elf_false)_finished") ? (
            <div onClick={() => handleHistory("7v3", false, true, false)}>
              Концовка 6
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_7v1(witch_false;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("7v1", false, false, false)}>
              Концовка 7
            </div>
          ) : (
            <div>???</div>
          )}

          {history.includes("chapter_7v3(witch_false;pries_false;elf_false)_finished") ? (
            <div onClick={() => handleHistory("7v3", false, false, false)}>
              Концовка 8
            </div>
          ) : (
            <div>???</div>
          )}
        </div>
      </div>
    </div>
  );
}
