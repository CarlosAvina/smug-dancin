import styles from "./MenuButton.module.css";

const MenuButton = ({ onClick, image, alt, imageStyles }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img
        src={image}
        alt={alt}
        className={imageStyles}
      />
    </button>
  );
};

export default MenuButton;
