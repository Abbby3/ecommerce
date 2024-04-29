import styles from "./ItemModal.module.scss";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";
import { useDataContext } from "../../../context/DataContext";
import ItemName from "../../ItemDetails/ItemName/ItemName";
import ItemPrice from "../../ItemDetails/ItemPrice/ItemPrice";
import WishlistBtn from "../WishlistBtn/WishlistBtn";
import CartBtn from "../CartBtn/CartBtn";
import ItemStock from "../../ItemDetails/ItemStock/ItemStock";

const ItemModal = ({ itemID, onToggle }) => {
  const data = useDataContext();
  const item = data[itemID];
  const [index, setIndex] = useState(0);

  // variant states
  const [power, setPower] = useState(item.power && item.power[0]);
  const [models, setModels] = useState(item.models && item.models[0]);
  const [surface, setSurface] = useState(item.surface && item.surface[0]);
  const [flavour, setFlavour] = useState(item.flavour && item.flavour[0]);
  const [storage, setStorage] = useState(item.storage && item.storage[0]);
  const [size, setSize] = useState(item.size && item.size[0]);
  const [colour, setColour] = useState(item.colour ? item.colour[0] : "default");

  // carousel buttons
  const handleCrement = (v) => {
    setIndex((prev) => (prev + (v === "+" ? 1 : -1) + images.length) % images.length);
  };

  const images = (item.images[colour] && item.images[colour]) || [];
  const image = images[index];

  return (
    <div className={styles.bg} onClick={() => onToggle()}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.exit} onClick={() => onToggle()}>
          X
        </button>
        {image && <Carousel url={image} onCrement={handleCrement} size={"big"} />}
        <div className={styles.info}>
          <ItemName itemID={itemID} />

          {item.power && (
            <span>
              <p>Power:</p>
              <span className={styles.btns}>
                {item.power.map((v) => (
                  <button
                    key={v}
                    onClick={() => setPower(v)}
                    style={{ borderColor: v === power ? "black" : "lightgrey" }}
                  >
                    {v}
                  </button>
                ))}
              </span>
            </span>
          )}
          {item.models && (
            <span>
              <p>Models:</p>
              <span className={styles.btns}>
                {item.models.map((v) => (
                  <button
                    key={v}
                    onClick={() => setModels(v)}
                    style={{ borderColor: v === models ? "black" : "lightgrey" }}
                  >
                    {v}
                  </button>
                ))}
              </span>
            </span>
          )}
          {item.surface && (
            <span>
              <p>Surface:</p>
              <span className={styles.btns}>
                {item.surface.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSurface(v)}
                    style={{ borderColor: v === surface ? "black" : "lightgrey" }}
                  >
                    {v}
                  </button>
                ))}
              </span>
            </span>
          )}
          {item.flavour && (
            <span>
              <p>Flavour:</p>
              <span className={styles.btns}>
                {item.flavour.map((v) => (
                  <button
                    key={v}
                    onClick={() => setFlavour(v)}
                    style={{ borderColor: v === flavour ? "black" : "grey" }}
                  >
                    {v}
                  </button>
                ))}
              </span>
            </span>
          )}
          {item.storage && (
            <span>
              <p>Storage:</p>
              <span className={styles.btns}>
                {item.storage.map((v) => (
                  <button
                    key={v}
                    onClick={() => setStorage(v)}
                    style={{ borderColor: v === storage ? "black" : "lightgrey" }}
                  >
                    {v}
                  </button>
                ))}
              </span>
            </span>
          )}
          {item.size && (
            <span>
              <p>Size:</p>
              <span className={styles.btns}>
                {item.size.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSize(v)}
                    style={{ borderColor: v === size ? "black" : "lightgrey" }}
                  >
                    {v}
                  </button>
                ))}
              </span>
            </span>
          )}
          {item.colour && (
            <span>
              <p>Colour:</p>
              <span className={styles.btns}>
                {item.colour.map((v) => (
                  <button
                    key={v}
                    onClick={() => setColour(v)}
                    style={{
                      backgroundColor: v,
                      border: "2px solid white",
                      outline: v === colour ? "2px solid black" : "2px solid lightgrey",
                    }}
                  />
                ))}
              </span>
            </span>
          )}

          <ItemPrice itemID={itemID} />
          <ItemStock itemID={itemID} />
          <span>
            <WishlistBtn itemID={itemID} />
            <CartBtn itemID={itemID} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
