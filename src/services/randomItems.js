import { tempItems } from "../data/tempData";

export const randomItems = (num, term) => {
  const itemIds = term
    ? Object.keys(tempItems).filter((itemId) => tempItems[itemId][term] > 0)
    : Object.keys(tempItems);

  for (let i = itemIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [itemIds[i], itemIds[j]] = [itemIds[j], itemIds[i]];
  }

  const selectedItemIDs = itemIds.slice(0, num);

  return selectedItemIDs;
};
