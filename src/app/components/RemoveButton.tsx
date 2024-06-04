import { deleteItemFromShoppingList } from "../actions";
import { ShoppingListItem } from "../data/shoppingList";

export default function RemoveButton({ item }: { item: ShoppingListItem }) {
  return (
    <form className="flex flex-row gap-4" action={deleteItemFromShoppingList}>
      <input type="hidden" name="id" value={item.id} />
      <input type="hidden" name="name" value={item.name} />
      <button
        type="submit"
        className="border-0 bg-white p-2 font-primary text-xs font-bold text-equal-experts-blue hover:bg-gray-300 hover:underline"
      >
        Remove
      </button>
    </form>
  );
}
