import styles from "./index.module.css";
import KeyPopup from "../KeyPopup/index.jsx";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>LOGO</div>
      <p className={styles.header__title}>Dialog with NPC</p>
      <KeyPopup {...props} />
    </header>
  );
};

export default Header;
