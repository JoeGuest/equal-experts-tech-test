import { test, expect, BrowserContext, Page } from "@playwright/test";

async function addItems(
  page: Page,
  context: BrowserContext,
  condiment: string,
) {
  await page.goto("http://localhost:3000");

  // Get browser name
  const browserName = context.browser()?.browserType().name();

  // Enter new item text
  await page
    .getByPlaceholder("Add an item")
    .fill(`${condiment} from ${browserName}`);

  // Add item
  await page.getByRole("button", { name: "Add Item" }).click();

  // Check if item is in the list
  const item = page.getByText(`${condiment} from ${browserName}`, {
    exact: true,
  });
  await expect(item).toBeVisible();
}

async function removeItems(
  page: Page,
  context: BrowserContext,
  condiment: string,
) {
  await page.goto("http://localhost:3000");

  // Get browser name
  const browserName = context.browser()?.browserType().name();

  // Check if item is in the list
  const item = page.getByText(`${condiment} from ${browserName}`, {
    exact: true,
  });
  await expect(item).toBeVisible();

  // Find and click the remove button
  const removeButton = page
    .getByText(`${condiment} from ${browserName}Remove`, {
      exact: true,
    })
    .getByRole("button");
  await removeButton.click();

  // Check if item is removed from the list
  await expect(item).not.toBeVisible();
}

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

test.describe("Adding ketchup items", () => {
  const condiment = "Ketchup";

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test.afterEach(async ({ page, context }) => {
    await removeItems(page, context, condiment);
  });

  test("can add item to shopping list", async ({ page, context }) => {
    // Get browser name
    const browserName = context.browser()?.browserType().name();

    // Set item text to be dependent on browser name
    const itemText = `${condiment} from ${browserName}`;

    // Enter new item text
    await page.getByPlaceholder("Add an item").fill(itemText);

    // Add item
    await page.getByRole("button", { name: "Add Item" }).click();

    // Check that new item is in the list
    await expect(page.getByText(itemText)).toBeVisible();
  });
});

test.describe("Removing mayonnaise items", () => {
  const condiment = "Mayonnaise";

  test.beforeEach(async ({ page, context }) => {
    await addItems(page, context, condiment);
  });

  test("can remove item from shopping list", async ({ page, context }) => {
    // Get browser name
    const browserName = context.browser()?.browserType().name();

    // Get pre-loaded item
    const item = page.getByText(`${condiment} from ${browserName}`, {
      exact: true,
    });

    // Find and click the remove button
    const removeButton = page
      .getByText(`${condiment} from ${browserName}Remove`, {
        exact: true,
      })
      .getByRole("button");
    await removeButton.click();

    // Check if item is removed from the list
    await expect(item).not.toBeVisible();
  });
});

test.describe.only("Striking through items", () => {
  const condiment = "Mustard";

  test.beforeEach(async ({ page, context }) => {
    await addItems(page, context, condiment);
  });

  test.afterEach(async ({ page, context }) => {
    await removeItems(page, context, condiment);
  });

  test("can strikethrough item from shopping list", async ({
    page,
    context,
  }) => {
    // Get browser name
    const browserName = context.browser()?.browserType().name();

    // Get pre-loaded item
    const item = page.getByText(`${condiment} from ${browserName}`, {
      exact: true,
    });

    // Find and click the checkbox
    const checkbox = item.getByRole("checkbox");
    await checkbox.click();

    // Check if item is struckthrough
    await expect(item).toHaveCSS("text-decoration", "line-through");
  });
});
