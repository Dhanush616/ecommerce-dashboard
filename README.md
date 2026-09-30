# Ecommerce Dashboard

A responsive React storefront for browsing everyday technology products, managing a shopping cart, and completing a simple checkout flow.

## Features

- Product catalog with category filtering and sorting by name, price, or rating
- Product cards with images, descriptions, ratings, stock status, and pricing
- Add products to the cart and adjust quantities
- Remove items and calculate cart totals automatically
- Automatic 10% discount for orders over $500
- Checkout form with order confirmation
- Responsive layout for desktop, tablet, and mobile screens
- Accessible focus states and clear navigation between catalog, cart, and checkout views

## Tech Stack

- React 19
- Create React App
- React Router
- Bootstrap
- Axios
- Radium
- React Testing Library

Product data is currently provided by local mock data in `src/utils/mockData.js`. Product images use Unsplash URLs.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install --legacy-peer-deps
```

The legacy peer dependency option is currently required because Radium declares compatibility with older React versions while this project uses React 19.

### Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the development server |
| `npm test` | Runs the test suite in watch mode |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm run eject` | Ejects the Create React App configuration |

## Project Structure

```text
src/
├── components/       # Header, navigation, product, cart, and checkout UI
├── styles/            # Responsive layout rules
├── utils/             # Mock data, API helpers, and price utilities
├── App.jsx            # Application state and page routing logic
├── App.css            # Main visual styles
└── index.css          # Global styles and accessibility defaults
```

## Build

Create a production build with:

```bash
npm run build
```

The generated files are written to the `build/` directory.
