import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { createOpenAiClient, generate } from "./api/generate";
import Header from "../components/Header/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import characters from "/pages/data/characters.json";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [apiKey, setApiKey] = useState();
  const [currentNpc, setCurrentNpc] = useState();
  const [message, setMessage] = useState("");
  const [result, setResult] = useState();
  const setCurrentNpcById = (id) => {
    const npc = (characters || []).find((c) => c.id === id);
    setCurrentNpc(npc);
  };
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
      const data = await generate(currentNpc, message);
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
      <Header
        apiKey={apiKey}
        onSend={setApiKey}
        characters={characters}
        currentNpc={currentNpc}
        onSetNpc={setCurrentNpcById}
      />
      <main className={styles.main}>
        <img src="/dice-logo.png" alt="dice logo" className={styles.icon} />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Enter a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Send
          </Button>
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
};

export default Home;
