import React from "react";
import cx from "classnames";
import "./App.css";

import { VIDEOS } from "./consts/videos";

import SideMenu from "./components/SideMenu";
import Thumbnail from "./components/Thumbnail";
import CloseButton from "./components/CloseButton";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";

import kid from "./media/smug.gif";
import music from "./media/music.wav";

import kidSilhouette from "./media/kid_silhouette.png";
import fullscreen from "./media/fullscreen.png";
import move from "./media/move.png";
import background from "./media/background.png";

const wallpapers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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

  function toggleFullScreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
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
            <video
              key={wallpaper}
              className="App-Wallpaper"
              playsInline
              loop
              autoPlay
            >
              <source src={VIDEOS[wallpaper - 1]} type="video/webm" />
            </video>
            <img
              className={cx("App-Kid", { [`App-Kid-${kidPosition}`]: true })}
              src={kid}
              alt="logo"
            />
            <Menu>
              <MenuButton
                label="Change background"
                imageStyles="Menu-Button-Background"
                onClick={toggleSideMenu}
                alt="background-icon"
                image={background}
              />
              <MenuButton
                label="Move kid"
                imageStyles="Menu-Button-Position"
                onClick={togglePositionMenu}
                image={move}
                alt="move-icon"
              />
              <MenuButton
                label="Fullscreen"
                imageStyles="Menu-Button-Fullscreen"
                image={fullscreen}
                alt="fullscreen-icon"
                onClick={toggleFullScreen}
              />
            </Menu>
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
              src={VIDEOS[item - 1]}
              selected={item === wallpaper}
              onClick={changeWallpaper}
            />
          ))}
        </SideMenu>
      )}
      {positionMenu && (
        <SideMenu>
          <CloseButton onClick={togglePositionMenu} />
          <menu className="Position-Menu">
            {new Array(...Array(9)).map((_, index) => {
              const id = index + 1;
              return (
                <button
                  id={id}
                  className="Position-Menu-Button"
                  onClick={moveKidTo}
                >
                  {kidPosition === id ? (
                    <img
                      className="Position-Menu-Kid-Silhouette"
                      src={kidSilhouette}
                      alt="kid_silhouette"
                    />
                  ) : null}
                </button>
              );
            })}
          </menu>
        </SideMenu>
      )}
    </div>
  );
}

export default App;
