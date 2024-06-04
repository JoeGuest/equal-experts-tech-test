export type ShoppingListItem = {
  id: number;
  name: string;
  checked: boolean;
};

const shoppingList = new Map<string, ShoppingListItem>();

const initialShoppingList = [
  { id: 1, name: "Apples", checked: false },
  { id: 2, name: "Bananas", checked: false },
  { id: 3, name: "Carrots", checked: false },
  { id: 4, name: "Cherries", checked: false },
  { id: 5, name: "Dates", checked: false },
  { id: 6, name: "Eggs", checked: false },
  { id: 7, name: "Grapes", checked: false },
  { id: 8, name: "Honey", checked: false },
  { id: 9, name: "Lemons", checked: false },
  { id: 10, name: "Mangoes", checked: false },
  { id: 11, name: "Oranges", checked: false },
  { id: 12, name: "Peaches", checked: false },
  { id: 13, name: "Pears", checked: false },
  { id: 14, name: "Pineapples", checked: false },
  { id: 15, name: "Plums", checked: false },
  { id: 16, name: "Strawberries", checked: false },
  { id: 17, name: "Watermelon", checked: false },
];

initialShoppingList.forEach((item) => {
  shoppingList.set(item.id.toString(), item);
});

export default shoppingList;
