import React from "react";
import styles from "./Counter.module.scss";
import { tempItems } from "../../../data/tempData";

const Counter = ({ itemID, qty, setQty }) => {
  const handleCount = (sign) => {
    if (sign === "+" && qty < tempItems[itemID].stock) {
      setQty(qty + 1);
    } else if (sign === "-" && qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <button
        className={styles.btn}
        onClick={() => {
          handleCount("-");
        }}
      >
        -
      </button>
      <p className={styles.qty}>{qty}</p>
      <button
        className={styles.btn}
        onClick={() => {
          handleCount("+");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
