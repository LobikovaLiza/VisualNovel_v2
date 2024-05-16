import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import VisualNovel from "./routes/VisualNovel";
import History from "./routes/Histor";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redax";
import Menu from "./routes/Menu";
import { useRef } from "react";
import { useState } from "react";
import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/visualnovel",
    element: <VisualNovel />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

export default function App() {
  const [isClicked, setIsClicked] = useState(false);

  const audioRef = useRef();

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleVolume = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = e.target.value;
    }
  };
  return (
    <div>
      <audio ref={audioRef} src="../Music/music_1.mp3" autoPlay loop />
      <button onClick={handleClick} className="music_icon">
        {isClicked ? "🔊" : "🔇"}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        onChange={handleVolume}
        className="music_input"
      />

      <Provider store={store}>
        <PersistGate loading={<div>Loading....</div>} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
}
