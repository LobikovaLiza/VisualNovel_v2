import React from "react";
import "../styles/Dialogue.css";

export default function Dialogue({ handleNextPhrase, phrase }) {
  if (!phrase) {
    return <div>loading....</div>;
  }

  return (
    <div
      onClick={handleNextPhrase}
      style={{
        width: "100vw",
        height: "80vh",
      }}
    >

    {(phrase.type === "description" || phrase.type === "header" ) ? (
      <div>
        <div className={phrase.type}>
          <p>{phrase.text}</p>
        </div>
      </div>
    ) : (
        <div>
          {phrase.type === "dialogue"  && (
            <div>
              <div className="name_character">
                <p>{phrase.character}</p>
              </div>

              {phrase.img_character !== null && (
                <div>
                  <img
                    src={`../IMG/characters/${phrase.img_character}`}
                    className="img_character"
                  />
                </div>
              )}
            </div>
          )}

          <div className="diolog">
            <p style={{ padding: "1vh 5vw" }}>{phrase.text}</p>
          </div>
        </div>
      )}

    </div>
  );
}
