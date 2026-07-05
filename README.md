# Playwright Automation + Restaurant Franchise Starter

This repository now contains two connected directions:

1. A Playwright-based automation project using a clean Page Object Model.
2. A starter architecture for a restaurant franchise system centered around Sire & Sons Smokehouse and the future parent group, Sire & Sons Collective.

## Project Goals

- Build a reliable Playwright search automation example.
- Organize the test suite around a reusable page object.
- Capture scraped search results into JSON output.
- Create a scalable blueprint for restaurant operations, training, inventory, finance, onboarding, and AI-driven automation.

## Structure

- src/pages/SearchPage.ts — reusable Playwright page object for search flows
- tests/example.spec.ts — example Playwright test using the page object
- data/results.json — generated search results output
- restaurant-franchise-skeleton/ — starter backend-style project for the restaurant/franchise system

## Getting Started

### Playwright

Install dependencies:

```bash
npm install
```

Run the example test:

```bash
npx playwright test --project=chromium
```

### Restaurant Franchise Starter

Run the starter app:

```bash
cd restaurant-franchise-skeleton
npm start
```

## Branding Direction

- Flagship restaurant: Sire & Sons Smokehouse
- Parent group: Sire & Sons Collective

## Notes

This repository is a working starter project and can be expanded into a full automation platform, restaurant operations platform, or AI-assisted franchise system.
