import React from "react";
import "../styles/Choice.css";

export default function Choice({ choice, handleChoice }) {
  return (
    <div className="choice">
      <button
        onClick={() => {
          handleChoice(choice.next_chapter_1);
        }}
      >
        {choice.text_choice_1}
      </button>
      <button
        onClick={() => {
          handleChoice(choice.next_chapter_2);
        }}
      >
        {choice.text_choice_2}
      </button>
    </div>
  );
}
