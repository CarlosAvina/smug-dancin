import cx from "classnames";
import Tooltip from "@reach/tooltip";
import styles from "./MenuButton.module.css";
import "@reach/tooltip/styles.css";

const tooltipStyles = {
  backgroundColor: "transparent",
  color: "white",
  filter:
    "brightness(0) saturate(100%) invert(97%) sepia(36%) saturate(321%) hue-rotate(51deg) brightness(101%) contrast(101%) drop-shadow(0 0 10px #42ff4f)",
};

const MenuButton = ({ label, onClick, image, alt, imageStyles }) => {
  return (
    <Tooltip style={tooltipStyles} label={label}>
      <button className={styles.button} onClick={onClick}>
        <img src={image} alt={alt} className={cx(imageStyles, styles.filter)} />
      </button>
    </Tooltip>
  );
};

export default MenuButton;
