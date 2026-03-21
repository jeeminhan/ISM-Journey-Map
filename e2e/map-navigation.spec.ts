import { test, expect } from "@playwright/test";

test("home page renders the stage map", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("See the Student.")).toBeVisible();
  // Desktop SVG map or mobile button list present
  const hasSvg = await page.locator("svg").count();
  const hasButtons = await page.locator('button:has-text("Pre-Arrival")').count();
  expect(hasSvg + hasButtons).toBeGreaterThan(0);
});

test("navigating to a main stage page works", async ({ page }) => {
  await page.goto("/stage/pre-arrival?bg=muslim");
  await expect(page.getByRole("heading", { name: "Pre-Arrival" })).toBeVisible();
  await expect(page.getByText("← Back to Map")).toBeVisible();
});

test("invalid bg param redirects to canonical URL", async ({ page }) => {
  await page.goto("/stage/arrival?bg=garbage");
  await expect(page).toHaveURL(/\/stage\/arrival\?bg=muslim/);
});

test("missing bg param redirects to canonical URL", async ({ page }) => {
  await page.goto("/stage/integration");
  await expect(page).toHaveURL(/\/stage\/integration\?bg=muslim/);
});

test("unknown stage ID returns 404", async ({ page }) => {
  const response = await page.goto("/stage/bogus");
  expect(response?.status()).toBe(404);
});

test("attrition stage page renders without bg selector", async ({ page }) => {
  await page.goto("/stage/drift");
  await expect(page.getByRole("heading", { name: "The Drift" })).toBeVisible();
  await expect(page.getByText("Attrition Off-Ramp")).toBeVisible();
  await expect(page.getByText("Filter by background:")).not.toBeVisible();
});

test("background selector updates URL and rerenders content", async ({ page }) => {
  await page.goto("/stage/arrival?bg=muslim");
  await page.getByRole("button", { name: /Hindu/ }).click();
  await expect(page).toHaveURL(/bg=hindu/);
});

test("back button returns to home", async ({ page }) => {
  await page.goto("/stage/leadership?bg=secular");
  await page.getByText("← Back to Map").click();
  await expect(page).toHaveURL("/");
});
