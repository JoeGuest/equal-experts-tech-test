import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Equal Experts Shopping List/);
});

test("has shopping list", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Expects page to have list of items.
  await expect(page.getByText(/Apples/)).toBeVisible();
  await expect(page.getByText("Bananas")).toBeVisible();
  await expect(page.getByText("Oranges")).toBeVisible();
  await expect(page.getByText("Strawberries")).toBeVisible();
});
