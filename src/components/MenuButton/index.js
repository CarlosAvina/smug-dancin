import cx from "classnames";
import Tooltip from "@reach/tooltip";
import styles from "./MenuButton.module.css";
import "@reach/tooltip/styles.css";

const MenuButton = ({ label, onClick, image, alt, imageStyles }) => {
  return (
    <Tooltip label={label}>
      <button className={styles.button} onClick={onClick}>
        <img
          src={image}
          alt={alt}
          className={cx(imageStyles, styles.filter)}
        />
      </button>
    </Tooltip>
  );
};

export default MenuButton;
