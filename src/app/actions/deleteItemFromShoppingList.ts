"use server";

import { revalidatePath } from "next/cache";
import shoppingList from "../data/shoppingList";

export async function deleteItemFromShoppingList(formData: FormData) {
  // could perform validation here, casting for convenience

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;

  console.log(id, name);

  if (id && name) {
    shoppingList.delete(id);
    revalidatePath("/");
    return { message: `Removed item "${name}" to shopping list` };
  }
}
