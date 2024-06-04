"use server";

import { revalidatePath } from "next/cache";
import shoppingList from "../data/shoppingList";

export async function deleteItemFromShoppingList(formData: FormData) {
  // could perform validation here, casting for convenience

  const id = formData.get("id") as string;
  const item = formData.get("item") as string;

  if (id && item) {
    shoppingList.delete(id);
    revalidatePath("/");
    return { message: `Removed item "${item}" to shopping list` };
  }
}
