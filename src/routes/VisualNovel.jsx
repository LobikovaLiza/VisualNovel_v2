import React, { useState, useEffect } from "react";
import Dialogue from "./Dialogue";
import { Link, useNavigate } from "react-router-dom";
import "../styles/VisualNovel.css";
import { useDispatch, useSelector } from "react-redux";
import { selectState } from "../redax/selectors";
import { ActionSkip, NextChoice, NextPhrase, getData } from "../redax/actions";
import Choice from "./Choice";

export default function VisualNovel() {
  const state = useSelector(selectState);

  const [end, setEnd] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getData(state.chapter, navigate))
  }, [state.chapter]);

  const handleNextPhrase = () => {
    dispatch(NextPhrase({ state, setEnd }));
  };

  const handleChoice = (new_choice) => {
    dispatch(NextChoice(new_choice));
  };

  useEffect(() => {
    if (state.chapter === "1" && end) {
      navigate("/", { replace: true });
    }
  }, [state.chapter, end, navigate]);
  return (
    <div
      className="vn"
      style={{ backgroundImage: `url(../IMG/backgrounds/${state.background})` }}
    >
      <div className="menu_novel">
        <Link className="home" to="/">
          ⌂
        </Link>

        {state.history.includes(
          "chapter_" +
            state.chapter +
            "(witch_" +
            state.witch +
            ";pries_" +
            state.priest +
            ";elf_" +
            state.elf +
            ")_finished"
        ) &&
          !state.choice.action &&
          state.chapter_data.length - 1 !== state.chapter_data_index && (
            <div
              className="skip"
              onClick={() =>
                dispatch(
                  ActionSkip(
                    state.chapter_data[state.chapter_data.length - 1].dg
                  )
                )
              }
            >
              Пропустить
            </div>
          )}
      </div>

      <div className="play">
        {!state?.choice.action ? (
          <Dialogue
            handleNextPhrase={handleNextPhrase}
            phrase={state.chapter_data[state.chapter_data_index]}
          ></Dialogue>
        ) : (
          <Choice choice={state.choice} handleChoice={handleChoice} />
        )}
      </div>
    </div>
  );
}
