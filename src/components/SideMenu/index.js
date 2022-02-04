import styles from "./SideMenu.module.css";
import { Portal } from "@reach/portal";

const SideMenu = ({ children }) => {
  return (
    <Portal>
      <div className={styles.sideMenu}>{children}</div>
    </Portal>
  );
};

export default SideMenu;
