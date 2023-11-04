import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { createOpenAiClient, generate } from "./api/generate";
import Header from "../components/Header/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [alignment, setAlignment] = useState("");
  const [apiKey, setApiKey] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    const key = localStorage.getItem("npc-api-key");
    if (key) {
      setApiKey(key);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("npc-api-key", apiKey);
    createOpenAiClient(apiKey);
  }, [apiKey]);
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const data = await generate({ alignment: alignment });
      setResult(data.result);
      // setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      // alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>DnD NPC</title>
        <link rel="icon" href="/dog.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header apiKey={apiKey} onSend={setApiKey} />
      <main className={styles.main}>
        <img src="/dice-logo.png" alt="dice logo" className={styles.icon} />
        <h3>Greet a hero</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="alignment"
            placeholder="Enter an alignment"
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
          />
          <input type="submit" value="Greet" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
};

export default Home;
