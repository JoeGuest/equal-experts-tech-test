import {
  getShoppingList,
  addItemToShoppingList,
  deleteItemFromShoppingList,
} from "./actions";
import { Checkbox, RemoveButton } from "./components";
import type { ShoppingListItem } from "./data/shoppingList";

async function ShoppingListItem({ item }: { item: ShoppingListItem }) {
  return (
    <div className="flex flex-row justify-between gap-2">
      <div className="flex flex-row gap-2">
        <Checkbox item={item} />
        <div className="font-secondary text-2xl text-white">{item.name}</div>
      </div>

      <RemoveButton item={item} />
    </div>
  );
}

async function ShoppingList() {
  const shoppingList = await getShoppingList();

  const shoppingListAsArray = Array.from(shoppingList.values());

  return (
    <div className="flex flex-col gap-4">
      {shoppingListAsArray.map((item, index) => (
        <ShoppingListItem key={index} item={item} />
      ))}
    </div>
  );
}

async function AddNewItem() {
  return (
    <form className="flex flex-row gap-4" action={addItemToShoppingList}>
      <input
        id="item"
        name="item"
        type="text"
        placeholder="Add an item"
        className="border-0 border-white p-2 font-secondary"
      />
      <button
        type="submit"
        className="border-0 bg-white p-2 font-primary font-bold text-equal-experts-blue hover:bg-gray-300 hover:underline"
      >
        Add Item
      </button>
    </form>
  );
}

export default async function Home() {
  const shoppingList = await getShoppingList();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-equal-experts-blue p-24">
      <h1 className="font-primary text-4xl font-bold text-white">
        Equal Experts Shopping List
      </h1>
      <div className="flex flex-col gap-4">
        <ShoppingList />
        <AddNewItem />
      </div>
    </main>
  );
}
