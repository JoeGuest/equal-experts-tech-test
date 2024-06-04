import { getShoppingList, addItemToShoppingList } from "./actions";

async function ShoppingList() {
  const shoppingList = await getShoppingList();

  return (
    <div className="flex flex-col gap-4">
      {shoppingList.map((item) => (
        <div key={item} className="font-secondary text-2xl text-white">
          {item}
        </div>
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
