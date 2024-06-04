"use client";

import { toggleChecked } from "../actions";
import { ShoppingListItem } from "../data/shoppingList";

export default function Checkbox({ item }: { item: ShoppingListItem }) {
  return (
    <input
      className="peer"
      type="checkbox"
      name="item"
      checked={item.checked}
      readOnly
      onChange={async () => toggleChecked({ id: item.id })}
    />
  );
}
