# 🛒 Playwright E2E Test – Advantage Online Shopping

This repository contains an end-to-end (E2E) test using [Playwright](https://playwright.dev/) for the [Advantage Online Shopping](https://advantageonlineshopping.com/) site. The test automates the process of selecting a product, adding it to the cart, checking out, logging in, making a payment using SafePay, and verifying the order confirmation.

---

## 📂 Project Structure

```
.
├── tests/
│   └── productPurchase.spec.ts  # Main test file
├── README.md
├── package.json
├── playwright.config.ts
└── ...
```

---

## 🚀 What the Test Does

1. Navigates to the site
2. Selects a mouse product
3. Adds it to the cart
4. Proceeds to checkout
5. Logs in using provided credentials
6. Verifies user shipping details
7. Completes payment via SafePay
8. Confirms order and logs tracking details
9. Validates that the order appears in the "My Orders" list

---

## 🧪 Technologies Used

- [Playwright Test Runner](https://playwright.dev/docs/test-intro)
- TypeScript (or JavaScript if you prefer)
- Node.js

---

## 🛠️ Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/rmrazeen/playwright-e2e-shopping.git
   cd playwright-e2e-shopping
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the test:
   ```bash
   npx playwright test
   ```

4. To view in headed mode:
   ```bash
   npx playwright test --headed
   ```

---

## 🔐 Test Credentials (Used in Script)

- **Username:** Jason
- **Password:** Cp@5057
- **SafePay Username:** Jason
- **SafePay Password:** Abcd@1234

---

## 📌 Notes

- Locators are cleanly separated and named for better readability.
- All order and tracking information is logged in the terminal.
- Ensure your internet connection is stable, as this is a live site.
- If the site layout or structure changes, locators may need updating.

---

## 📄 License

This project is for educational/demo purposes.

---

## ✍️ Author

Made with ❤️ by [Razeen](https://github.com/rmrazeen)
```

---

Let me know if you want to include screenshots, video recording, or GitHub Actions CI setup in the README too!
