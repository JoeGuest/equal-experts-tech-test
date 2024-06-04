import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Equal Experts Shopping List/);
});

test("has shopping list", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Expects page to have list of items.
  await expect(page.getByText("Apples", { exact: true })).toBeVisible();
  await expect(page.getByText("Bananas")).toBeVisible();
  await expect(page.getByText("Oranges")).toBeVisible();
  await expect(page.getByText("Strawberries")).toBeVisible();
});

test("can add item to shopping list", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Enter new item text
  await page.getByPlaceholder("Add an item").fill("Ketchup");

  // Add item
  await page.getByRole("button", { name: "Add" }).click();

  // Check that new item is in the list
  await expect(page.getByText("Ketchup")).toBeVisible();
});

test.skip("can remove item from shopping list", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Check if item is in the list
  const item = await page.locator("text=Apples");
  await expect(item).toBeVisible();

  // Find and click the remove button
  const removeButton = item.locator('button:has-text("Remove")');
  await removeButton.click();

  // Check if item is removed from the list
  await expect(item).not.toBeVisible();
});

test.skip("can strikethrough item from shopping list", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Check if item is in the list
  const item = await page.locator("text=Apples");
  await expect(item).toBeVisible();

  // Find and click the bought button
  const boughtButton = item.locator('button:has-text("Bought")');
  await boughtButton.click();

  // Check if item is struckthrough
  await expect(item).toHaveCSS("text-decoration", "line-through");
});
