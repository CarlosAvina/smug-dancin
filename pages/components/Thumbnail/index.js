import { isMobile } from "react-device-detect";
import cx from "classnames";
import styles from "./Thumbnail.module.css";

const Thumbnail = ({ media, selected = false, ...extraProps }) => {
  return (
    <video
      className={cx(styles.thumbnail, styles.video, {
        [styles["thumbnail-selected"]]: selected,
      })}
      playsInline
      loop
      autoPlay
      poster={media.poster}
      {...extraProps}
    >
      {!isMobile ? (
        <>
          <source src={media.mini.webm} type="video/webm" />
          <source src={media.mini.mp4} type="video/mp4" />
        </>
      ) : null}
    </video>
  );
};

export default Thumbnail;
