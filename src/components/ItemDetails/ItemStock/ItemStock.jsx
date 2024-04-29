import { useDataContext } from "../../../context/DataContext";

const ItemStock = ({itemID}) => {
  const data = useDataContext();

  return <p>{data[itemID].stock} in stock</p>;

}

export default ItemStock