import styles from "./Carousel.module.scss";
import left from "../../../assets/left.png";
import right from "../../../assets/right.png";

const Carousel = ({ url, onCrement, size }) => {
  const handleCrement = (e, v) => {
    onCrement(v);
    e.stopPropagation();
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.btn} onClick={(e) => handleCrement(e, "-")}>
        <img className={styles.btnImg} src={left} alt="previous" />
      </button>

      <img src={url} className={styles[size]} />

      <button className={styles.btn} onClick={(e) => handleCrement(e, "+")}>
        <img className={styles.btnImg} src={right} alt="next" />
      </button>
    </div>
  );
};

export default Carousel;
