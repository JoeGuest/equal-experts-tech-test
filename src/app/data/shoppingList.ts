const shoppingList = new Map<number, string>();

const initialShoppingList = [
  "Apples",
  "Bananas",
  "Carrots",
  "Cherries",
  "Dates",
  "Eggs",
  "Grapes",
  "Honey",
  "Lemons",
  "Mangoes",
  "Oranges",
  "Peacheses",
  "Pears",
  "Pineapples",
  "Plums",
  "Strawberries",
  "Watermelon",
];

initialShoppingList.forEach((item, index) => {
  shoppingList.set(index, item);
});

export default shoppingList;
