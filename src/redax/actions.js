import { useNavigate } from "react-router-dom";

export const NextPhrase = ({state, setEnd}) => async (dispatch) => {
    
  if (state.chapter_data_index < state.chapter_data.length - 1) {
      dispatch({
        type: "next_background_index",
        nextBackground: state.chapter_data[state.chapter_data_index + 1].dg,
      });
    }

  if (state.chapter_data_index == state.chapter_data.length - 1) {
    switch (state.chapter) {
      case "1":
        dispatch({
          type: "next_choice",
          nextChoice: {action: true, next_chapter_1: "2v1", next_chapter_2: "2v2", text_choice_1: "Подойти и помочь", text_choice_2: "Пойти дальше"},
        });
        break;

      case "2v1":
        dispatch({
          type: "next_choice",
          nextChoice: {action: true, next_chapter_1: "3v1", next_chapter_2: "3v2", text_choice_1: "Пойти к гадалке", text_choice_2: "Не идти"},
        });
        break;

      case "3v1":
        dispatch({ type: "meeting_with_a_with", nextChapter: "4" });
        break;

      case "3v2":
      case "2v2":
        dispatch({ type: "next_chapter", nextChapter: "4"});
        break;

      case "4":
        dispatch({
          type: "next_choice",
          nextChoice: {action: true, next_chapter_1: "5v1", next_chapter_2: "5v2", text_choice_1: "Посмотреть откуда шум", text_choice_2: "Не идти"},
        });
        break;

      case "5v1":
        dispatch({ type: "meeting_with_a_priest", nextChapter: "6" });
        break;

      case "5v2":
        dispatch({ type: "next_chapter", nextChapter: "6" });
        break;

      case "6":
        {
          if (state.priest) {
              dispatch({
                type: "next_choice",
                nextChoice: {action: true, next_chapter_1: "7v2", next_chapter_2: "7v3", text_choice_1: "Узнать что случилось", text_choice_2: "Не идти" },
              });
            } else {
              dispatch({
                type: "next_choice",
                nextChoice: {action: true, next_chapter_1: "7v1", next_chapter_2: "7v3", text_choice_1: "Узнать что случилось", text_choice_2: "Не идти"},
              });
            }
          }
          break;

        case "7v1":
        case "7v2":
          dispatch({ type: "meeting_with_an_elf", nextChapter: "8" });
          break;

        case "7v3":
          dispatch({ type: "next_chapter", nextChapter: "8" });
          break;

        case "8":
          {
            if (state.witch && state.priest && state.elf)
              dispatch({ type: "next_chapter", nextChapter: "9v1" });
            else if (state.witch && state.priest && !state.elf)
              dispatch({ type: "next_chapter", nextChapter: "9v2" });
            else if (state.witch && !state.priest && state.elf)
              dispatch({ type: "next_chapter", nextChapter: "9v3" });
            else if (state.witch && !state.priest && !state.elf)
              dispatch({ type: "next_chapter", nextChapter: "9v4" });
            else if (!state.witch && state.priest && state.elf)
              dispatch({ type: "next_chapter", nextChapter: "9v5" });
            else if (!state.witch && state.priest && !state.elf)
              dispatch({ type: "next_chapter", nextChapter: "9v6" });
            else if (!state.witch && !state.priest && state.elf)
              dispatch({ type: "next_chapter", nextChapter: "9v7" });
            else dispatch({ type: "next_chapter", nextChapter: "9v8" });
          }
          break;

        default:
          dispatch({ type: "end" });
          setEnd(true);
          break;
      }

      dispatch({ type: "next_index" });
    }
};

export const NextChoice = (new_choice) => async (dispatch) => {
  dispatch({ type: "next_chapter_and_choice", nextChapter: new_choice });
};

export const  NextHistory = ({new_chapter, new_witch, new_priest, new_elf}) => async (dispatch) => {
  dispatch({type: "next_history", nextChapter: new_chapter, nextWitch: new_witch, nextPriest: new_priest, nextElf: new_elf})
}

export const ActionSkip = (new_background) => async (dispatch) => {
  dispatch({type: "skip", nextBackground: new_background })
}


export const DeleteHistory = () => async (dispatch) => {
  dispatch({type: "delete_history"})
}

export const getData = (chapter, navigate) => async (dispatch) => {
  try {
    const data = await fetch(`http://localhost:5001/${chapter}`).then((r) => r.json());
    dispatch({
      type: "next_background_and_chapter_data",
      nextBackground: data[0].dg,
      nextChapterData: data,
    });
  } catch (err) {
    navigate("/error");
  }
};