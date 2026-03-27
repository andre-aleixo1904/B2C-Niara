import type { ReactNode } from "react";
import styles from "./HotelCard.module.css";

export interface HotelCardProps {
  imageUrl: string;
  imageAlt: string;
  name: string;
  location: string;
  rating: number;
  pricePerNight: number;
  currency?: string;
  badge?: ReactNode;
  onSelect?: () => void;
}

export function HotelCard({
  imageUrl,
  imageAlt,
  name,
  location,
  rating,
  pricePerNight,
  currency = "BRL",
  badge,
  onSelect,
}: HotelCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={imageAlt} className={styles.image} />
        {badge && <div className={styles.badge}>{badge}</div>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.location}>{location}</p>
        <div className={styles.footer}>
          <span className={styles.rating}>
            {"★".repeat(Math.round(rating))}
            {"☆".repeat(5 - Math.round(rating))}
          </span>
          <div className={styles.priceBlock}>
            <span className={styles.price}>
              {currency} {pricePerNight.toLocaleString()}
            </span>
            <span className={styles.perNight}>/noite</span>
          </div>
        </div>
        <button className={styles.cta} onClick={onSelect}>
          Ver Quartos
        </button>
      </div>
    </article>
  );
}
