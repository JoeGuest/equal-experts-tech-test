"use server";

import shoppingList from "../data/shoppingList";

export async function addItemToShoppingList(formData: FormData) {
  // could perform validation here, casting for convenience

  const item = formData.get("item") as string;
  const position = shoppingList.size;

  if (item) {
    shoppingList.set(position, item);
    return true;
  }
}
