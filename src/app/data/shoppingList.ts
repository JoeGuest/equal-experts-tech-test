const shoppingList = new Map<string, string>();

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
  shoppingList.set(index.toString(), item);
});

export default shoppingList;
