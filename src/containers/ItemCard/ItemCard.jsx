import { useState } from "react";
import styles from "./ItemCard.module.scss";
import ItemModal from "../../components/misc/ItemModal/ItemModal";

const ItemCard = ({ itemID, style, children }) => {
  const [modal, setModal] = useState(false);

  const handleToggle = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && <ItemModal itemID={itemID} onToggle={handleToggle} />}
      <article className={styles[style]} onClick={handleToggle}>
        {children}
      </article>
    </>
  );
};

export default ItemCard;
