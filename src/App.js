import React from "react";
import cx from "classnames";

import SideMenu from "./components/SideMenu";
import Thumbnail from "./components/Thumbnail";
import CloseButton from "./components/CloseButton";

import kid from "./media/smug.gif";
import music from "./media/music.wav";
import "./App.css";

const wallpapers = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const [start, setStart] = React.useState(false);
  const [sideMenu, setSideMenu] = React.useState(false);
  const [wallpaper, setWallpaper] = React.useState(1);
  const audioPlayer = React.useRef(null);

  function onPlay() {
    setStart(true);

    if (audioPlayer) {
      audioPlayer.current.play();
    }
  }

  function toggleSideMenu() {
    setSideMenu(!sideMenu);
  }

  function changeWallpaper(event) {
    const wallpaper = Number(event.currentTarget.id);
    setWallpaper(wallpaper);
  }

  return (
    <div className="App">
      <div className="App-Grid">
        {!start ? (
          <button className="App-Button App-Button-Start" onClick={onPlay}>
            dance
          </button>
        ) : (
          <>
            <div
              className={cx("App-Wallpaper", {
                [`App-Wallpaper-${wallpaper}`]: true,
              })}
            />
            <img className="App-Kid" src={kid} alt="logo" />
            <button
              className="App-Button App-Button-Wallpaper"
              onClick={toggleSideMenu}
            >
              Background
            </button>
          </>
        )}
      </div>
      <audio className="App-Audio" ref={audioPlayer} src={music} loop />
      {sideMenu && (
        <SideMenu>
          <CloseButton onClick={toggleSideMenu} />
          {wallpapers.map((item) => (
            <Thumbnail
              id={item}
              key={item}
              src={`/wallpaper${item}.gif`}
              selected={item === wallpaper}
              onClick={changeWallpaper}
            />
          ))}
        </SideMenu>
      )}
    </div>
  );
}

export default App;
