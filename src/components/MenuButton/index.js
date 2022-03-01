import Tooltip from "@reach/tooltip";
import styles from "./MenuButton.module.css";
import "@reach/tooltip/styles.css";

const MenuButton = ({ label, onClick, image, alt, imageStyles }) => {
  return (
    <Tooltip label={label}>
      <button className={styles.button} onClick={onClick}>
        <img src={image} alt={alt} className={imageStyles} />
      </button>
    </Tooltip>
  );
};

export default MenuButton;
