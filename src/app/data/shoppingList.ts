export type ShoppingListItem = {
  id: number;
  name: string;
};

const shoppingList = new Map<string, ShoppingListItem>();

const initialShoppingList = [
  { id: 1, name: "Apples" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Carrots" },
  { id: 4, name: "Cherries" },
  { id: 5, name: "Dates" },
  { id: 6, name: "Eggs" },
  { id: 7, name: "Grapes" },
  { id: 8, name: "Honey" },
  { id: 9, name: "Lemons" },
  { id: 10, name: "Mangoes" },
  { id: 11, name: "Oranges" },
  { id: 12, name: "Peaches" },
  { id: 13, name: "Pears" },
  { id: 14, name: "Pineapples" },
  { id: 15, name: "Plums" },
  { id: 16, name: "Strawberries" },
  { id: 17, name: "Watermelon" },
];

initialShoppingList.forEach((item) => {
  shoppingList.set(item.id.toString(), item);
});

export default shoppingList;
