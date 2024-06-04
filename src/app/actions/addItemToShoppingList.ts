"use server";

import { revalidatePath } from "next/cache";
import shoppingList from "../data/shoppingList";

export async function addItemToShoppingList(formData: FormData) {
  // could perform validation here, casting for convenience

  const item = formData.get("item") as string;
  const shoppingListAsArray = Array.from(shoppingList.values());
  const lastItem = shoppingListAsArray[shoppingListAsArray.length - 1];
  const nextIdToUse = lastItem.id + 1;

  if (item) {
    shoppingList.set(nextIdToUse.toString(), { id: nextIdToUse, name: item });
    revalidatePath("/");
    return { message: `Added item "${item}" to shopping list` };
  }
}
