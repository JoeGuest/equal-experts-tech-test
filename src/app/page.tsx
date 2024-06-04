import { getShoppingList } from "./actions/getShoppingList";

export default async function Home() {
  const shoppingList = await getShoppingList();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-equal-experts-blue p-24">
      <h1 className="font-primary text-4xl font-bold text-white">
        Equal Experts Shopping List
      </h1>
      <div className="flex flex-col gap-4">
        {shoppingList.map((item) => (
          <div key={item} className="font-secondary text-2xl text-white">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
