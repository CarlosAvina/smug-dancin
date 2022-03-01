import React from "react";
import cx from "classnames";
import "./App.css";

import SideMenu from "./components/SideMenu";
import Thumbnail from "./components/Thumbnail";
import CloseButton from "./components/CloseButton";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";

import kid from "./media/smug.gif";
import music from "./media/music.wav";

import fullscreen from "./media/fullscreen.png";
import move from "./media/move.png";
import background from "./media/background.png";

const wallpapers = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const [start, setStart] = React.useState(false);
  const [sideMenu, setSideMenu] = React.useState(false);
  const [positionMenu, setPositionMenu] = React.useState(false);
  const [wallpaper, setWallpaper] = React.useState(1);
  const [kidPosition, setKidPosition] = React.useState(5);
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

  function togglePositionMenu() {
    setPositionMenu(!positionMenu);
  }

  function changeWallpaper(event) {
    const wallpaper = Number(event.currentTarget.id);
    setWallpaper(wallpaper);
  }

  function moveKidTo(event) {
    const position = Number(event.currentTarget.id);
    setKidPosition(position);
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
            <img
              className={cx("App-Kid", { [`App-Kid-${kidPosition}`]: true })}
              src={kid}
              alt="logo"
            />
            <Menu>
              <MenuButton
                imageStyles="Menu-Button-Background"
                onClick={toggleSideMenu}
                alt="background-icon"
                image={background}
              />
              <MenuButton
                imageStyles="Menu-Button-Position"
                onClick={togglePositionMenu}
                image={move}
                alt="move-icon"
              />
              <MenuButton
                imageStyles="Menu-Button-Fullscreen"
                image={fullscreen}
                alt="fullscreen-icon"
              />
            </Menu>
          </>
        )}
      </div>
      <audio className="App-Audio" ref={audioPlayer} src={music} loop muted />
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
      {positionMenu && (
        <SideMenu>
          <menu className="Position-Menu">
            <button id="1" onClick={moveKidTo}>
              1
            </button>
            <button id="2" onClick={moveKidTo}>
              2
            </button>
            <button id="3" onClick={moveKidTo}>
              3
            </button>
            <button id="4" onClick={moveKidTo}>
              4
            </button>
            <button id="5" onClick={moveKidTo}>
              5
            </button>
            <button id="6" onClick={moveKidTo}>
              6
            </button>
            <button id="7" onClick={moveKidTo}>
              7
            </button>
            <button id="8" onClick={moveKidTo}>
              8
            </button>
            <button id="9" onClick={moveKidTo}>
              9
            </button>
          </menu>
        </SideMenu>
      )}
    </div>
  );
}

export default App;
