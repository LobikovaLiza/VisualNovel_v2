const initialState = {
    chapter: "1",
    choice: { action: false },
    witch: false,
    priest: false,
    elf: false,
    background: "bg0.png",
    chapter_data: [],
    chapter_data_index: 0,
    history: [],
  };
 
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "meeting_with_a_with":
        return {
          ...state,
          chapter: action.nextChapter,
          witch: true,
          history: state.history.includes(
            "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished"
          )
            ? state.history
            : [
                ...state.history,
                "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished",
              ],
        };
  
      case "meeting_with_a_priest":
        return {
          ...state,
          chapter: action.nextChapter,
          priest: true,
          history: state.history.includes(
            "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished"
          )
            ? state.history
            : [
                ...state.history,
                "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished",
              ],
        };
  
      case "meeting_with_an_elf":
        return {
          ...state,
          chapter: action.nextChapter,
          elf: true,
          history: state.history.includes(
            "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished"
          )
            ? state.history
            : [
                ...state.history,
                "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished",
              ],
        };
  
      case "next_chapter":
        return {
          ...state,
          chapter: action.nextChapter,
          history: state.history.includes(
            "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished"
          )
            ? state.history
            : [
                ...state.history,
                "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished",
              ],
        };
  
      case "next_choice":
        return {
          ...state,
          choice: action.nextChoice,
        };
  
      case "next_chapter_and_choice":
        return {
          ...state,
          chapter: action.nextChapter,
          choice: [false],
          history: state.history.includes(
            "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished"
          )
            ? state.history
            : [
                ...state.history,
                "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished",
              ],
        };
  
      case "next_background_and_chapter_data":
        return {
          ...state,
          background: action.nextBackground,
          chapter_data: action.nextChapterData,
        };
  
      case "next_background_index":
        return {
          ...state,
          background: action.nextBackground,
          chapter_data_index: state.chapter_data_index + 1,
        };
  
      case "next_index":
        return {
          ...state,
          chapter_data_index: 0,
        };
  
      case "next_history":
        return {
          ...state,
          chapter: action.nextChapter,
          choice: [false],
          witch: action.nextWitch,
          priest: action.nextPriest,
          elf: action.nextElf,
          background: "bg0.png",
          chapter_data: [],
          chapter_data_index: 0,
        };
  
      case "skip":
        return {
          ...state,
          chapter_data_index: state.chapter_data.length - 1,
          background: action.nextBackground,
        };

      case "end":
        return {
          chapter: "1",
          choice: [false],
          witch: false,
          priest: false,
          elf: false,
          background: "bg0.png",
          chapter_data: [],
          chapter_data_index: 0,
          history: state.history.includes(
            "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished"
          )
            ? state.history
            : [
                ...state.history,
                "chapter_" + state.chapter + "(witch_" + state.witch + ";pries_" + state.priest + ";elf_" + state.elf + ")_finished",
              ],
      };  
      case "delete_history":
        return {
          chapter: "1",
          choice: [false],
          witch: false,
          priest: false,
          elf: false,
          background: "bg0.png",
          chapter_data: [],
          chapter_data_index: 0,
          history: [],
      };  
      default:
        return state;
    }
  }