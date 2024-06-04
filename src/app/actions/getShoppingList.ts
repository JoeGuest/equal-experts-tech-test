"use server";

import shoppingList from "../data/shoppingList";

export async function getShoppingList() {
  return shoppingList;
}
