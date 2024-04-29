import { useState } from "react";
import styles from "./ItemCard.module.scss";
import ItemModal from "../../components/misc/ItemModal/ItemModal";

const ItemCard = ({ itemID, style, children }) => {
  const [modal, setModal] = useState(false);
  const [staticID, setStaticID] = useState(itemID);

  const handleToggle = () => {
    setStaticID(itemID);
    setModal(!modal);
  };

  return (
    <>
      {modal && <ItemModal itemID={staticID} onToggle={handleToggle} />}
      <article className={styles[style]} onClick={handleToggle}>
        {children}
      </article>
    </>
  );
};

export default ItemCard;
