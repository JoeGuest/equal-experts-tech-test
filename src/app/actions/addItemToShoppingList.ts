"use server";

import { revalidatePath } from "next/cache";
import shoppingList from "../data/shoppingList";

export async function addItemToShoppingList(formData: FormData) {
  // could perform validation here, casting for convenience

  const item = formData.get("item") as string;
  const position = shoppingList.size;

  if (item) {
    shoppingList.set(position, item);
    revalidatePath("/");
    return { message: `Added item "${item}" to shopping list` };
  }
}
