"use client"

import React, { useState } from "react";
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import ImagesContainer from "../ImagesContainer";
import ImageCard from "../../components/ImageCard";
import ICard from "../../interfaces/ICard";

import styles from "./MainContainer.module.css";

export default function MainContainer() {
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [activeCard, setActiveCard] = useState({
    isActive: false,
    url: "",
  });
  console.log("process.env.REACT_APP_API_KEY", process.env);

  return (
    <main className={styles.container}>
      <div className={activeCard.isActive ? styles.blurEffect : ""}>
        <Logo />
        <SearchBar setCards={setCards} />
        <ImagesContainer cards={cards} setActiveCard={setActiveCard} />
      </div>
      {activeCard.isActive ? (
        <ImageCard
          url={activeCard.url}
          isActive={activeCard.isActive}
          setActiveCard={setActiveCard}
        />
      ) : null}
    </main>
  );
}
