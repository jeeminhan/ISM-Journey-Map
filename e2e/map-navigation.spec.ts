import { test, expect } from "@playwright/test";

test("home page renders the stage map", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("See the Student.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Pre-Arrival" })).toBeVisible();
  await expect(page.getByText("Empathy Map")).toBeVisible();
});

test("legacy main stage URLs redirect into the home page detail view", async ({ page }) => {
  await page.goto("/stage/pre-arrival?bg=muslim");
  await expect(page.getByRole("heading", { name: "Pre-Arrival" })).toBeVisible();
  await expect(page).toHaveURL(/\/\?stage=pre-arrival&bg=muslim/);
});

test("invalid bg param redirects to the inline canonical URL", async ({ page }) => {
  await page.goto("/stage/arrival?bg=garbage");
  await expect(page).toHaveURL(/\/\?stage=arrival&bg=muslim/);
});

test("missing bg param redirects to the inline canonical URL", async ({ page }) => {
  await page.goto("/stage/integration");
  await expect(page).toHaveURL(/\/\?stage=integration&bg=muslim/);
});

test("unknown stage ID returns 404", async ({ page }) => {
  const response = await page.goto("/stage/bogus");
  expect(response?.status()).toBe(404);
});

test("legacy attrition stage URLs redirect to the inline attrition panel", async ({ page }) => {
  await page.goto("/stage/drift");
  await expect(page.getByRole("heading", { name: "The Drift" })).toBeVisible();
  await expect(page.getByText("Attrition Off-Ramp")).toBeVisible();
  await expect(page).toHaveURL(/\/\?stage=drift/);
  await expect(page.getByText("Filter by background:")).not.toBeVisible();
});

test("background selector updates the inline URL and rerenders content", async ({ page }) => {
  await page.goto("/?stage=arrival&bg=muslim");
  await page.getByRole("button", { name: /Hindu/ }).click();
  await expect(page).toHaveURL(/\/\?stage=arrival&bg=hindu/);
});

test("clicking a stage keeps the user on the same page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Leadership/ }).click();
  await expect(page).toHaveURL(/\/\?stage=leadership&bg=muslim/);
  await expect(page.getByRole("heading", { name: "Leadership" })).toBeVisible();
});
