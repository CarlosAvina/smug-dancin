import cx from "classnames";
import styles from "./Thumbnail.module.css";

const Thumbnail = ({ src, alt, selected = false, ...extraProps }) => {
  return (
    <img
      className={cx(styles.thumbnail, { [styles['thumbnail-selected']]: selected })}
      src={src}
      alt={alt}
      {...extraProps}
    />
  );
};

export default Thumbnail;
