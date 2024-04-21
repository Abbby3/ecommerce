import { tempItems } from "../data/tempData";

export const randomItems = (num) => {
  const itemIds = Object.keys(tempItems);

  for (let i = itemIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [itemIds[i], itemIds[j]] = [itemIds[j], itemIds[i]];
  }

  const selectedItemIDs = itemIds.slice(0, num);

  return selectedItemIDs;
};

export const randomSaleItems = (num) => {
  const saleItemIds = Object.keys(tempItems).filter((itemId) => tempItems[itemId].sale > 0);

  for (let i = saleItemIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [saleItemIds[i], saleItemIds[j]] = [saleItemIds[j], saleItemIds[i]];
  }

  const selectedSaleItemIDs = saleItemIds.slice(0, num);

  return selectedSaleItemIDs;
};