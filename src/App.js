import React from "react";
import kid from "./media/smug.gif";
import music from "./media/music.wav";
import "./App.css";

function App() {
  const [start, setStart] = React.useState(false);
  const audioPlayer = React.useRef(null);

  function onPlay() {
    setStart(true);

    if (audioPlayer) {
      audioPlayer.current.play();
    }
  }

  return (
    <div className="App">
      {!start ? (
        <button onClick={onPlay}>Smug</button>
      ) : (
        <div className="App-Grid">
          <img
            className="App-Wallpaper"
            src={`/wallpaper${8}.gif`}
            alt="wallpaper"
          />
          <img className="App-Kid" src={kid} alt="logo" />
        </div>
      )}
      <audio
        className="App-Audio"
        ref={audioPlayer}
        src={music}
        loop
      />
    </div>
  );
}

export default App;
