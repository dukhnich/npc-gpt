import styles from "./index.module.css";
import KeyPopup from "../KeyPopup/index.jsx";
import CharactersSidebar from "../CharactersSidebar/index.jsx";
import characters from "../../pages/data/characters.json";
const Header = ({ apiKey, onSend, characters, currentNpc, onSetNpc }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>LOGO</div>
      <p className={styles.header__title}>
        Dialog with {currentNpc?.name || "NPC"}
      </p>
      <CharactersSidebar
        characters={characters}
        currentNpc={currentNpc}
        onSetNpc={onSetNpc}
      />
      <KeyPopup apiKey={apiKey} onSend={onSend} />
    </header>
  );
};

export default Header;
