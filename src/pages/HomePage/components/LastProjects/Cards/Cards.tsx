import { useEffect, useRef, useState } from "react";
import styles from "./Cards.module.scss";
import { NewDataProps, residentialCategoryData } from "../../../../../components/App/data";

const Cards = () => {
  const limitedData: NewDataProps[] = residentialCategoryData.projects.slice(0, 3);

  const [activeCard, setActiveCard] = useState(0); // Tracks the currently active card
  const sectionRef = useRef<HTMLElement | null>(null);

  // ✅ Detect which card is active
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.cardsContainer}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveCard(index); // Update the active card index
            }
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the card is visible
    );

    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className={styles.cardsSection} ref={sectionRef}>
      {/* Render cards */}
      {limitedData.map((item, index) => (
        <div
          key={item.id || index}
          className={styles.cardsContainer}
          data-index={index}
        >
          {/* Left Side: Image */}
          <div className={styles.image}>
            <img
              src={item.profileImage}
              alt={`Project ${index + 1}`}
              className={styles.profileImage}
            />
          </div>

          {/* Right Side: Info */}
          <div className={`${styles.info} ${activeCard === index ? styles.active : ""}`}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <hr className={styles.separator} />
            <button>learn more</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;