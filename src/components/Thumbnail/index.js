import cx from "classnames";
import styles from "./Thumbnail.module.css";

const Thumbnail = ({ src, selected = false, ...extraProps }) => {
  return (
    <video
      className={cx(styles.thumbnail, styles.video, {
        [styles["thumbnail-selected"]]: selected,
      })}
      playsInline
      loop
      autoPlay
      {...extraProps}
    >
      <source src={src} type="video/webm" />
    </video>
  );
};

export default Thumbnail;
