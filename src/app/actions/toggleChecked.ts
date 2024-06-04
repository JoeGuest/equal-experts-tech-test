"use server";

import { revalidatePath } from "next/cache";
import shoppingList from "../data/shoppingList";

export async function toggleChecked({ id }: { id: number }) {
  const item = shoppingList.get(id.toString());

  if (item) {
    item.checked = !item.checked;
    revalidatePath("/");
    return { message: `Toggled ${item.name} to ${item.checked}` };
  }
}
