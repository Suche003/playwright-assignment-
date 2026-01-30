
# SwiftTranslator Playwright Automation

![Playwright](https://img.shields.io/badge/Automation-Playwright-green)
![Node.js](https://img.shields.io/badge/Node.js-Required-blue)
![Browser](https://img.shields.io/badge/Browser-Chrome-yellow)

This project contains **UI automation tests** for
**[https://www.swifttranslator.com/](https://www.swifttranslator.com/)** using **Playwright Test**.

The automation validates that the application correctly handles **different types of user inputs** and dynamically updates the translated output.

---

## Project Objective

The goal of this project is to verify that SwiftTranslator:

* Accepts multiple languages (Sinhala, Tamil, English)
* Handles emojis and special characters
* Processes mixed and noisy input correctly
* Updates translation output automatically (without submit button)
* Remains stable during repeated input testing
* Allows visual verification using a real browser

---

## Prerequisites

Make sure the following are installed on your system:

* **Node.js** (v16 or later recommended)
* **npm** (comes with Node.js)
* **Google Chrome** browser
* Internet connection (application is web-based)

---

## How to Run This Project

Follow these steps **after cloning the repository**.

### 1 Clone the repository

```bash
git clone https://github.com/Suche003/playwright-assignment-.git
cd playwright-assignment-
```

---

### 2 Install project dependencies

```bash
npm install
```

---

### 3 Install Playwright browsers

```bash
npx playwright install
```

---

### 4 Run the Playwright tests

```bash
npx playwright test
```

### What you will observe:

* Chrome browser opens in **headed mode**
* Text is typed **slowly (character by character)**
* Translation output updates automatically
* Each input pauses for **5 seconds** for visual verification
* Browser closes only after all inputs are processed

---

### 5 View the HTML test report (optional)

```bash
npx playwright show-report
```

This opens a detailed Playwright HTML report in the browser.

---

## Types of Inputs Tested

The test covers a wide range of real-world input scenarios:

* Sinhala transliterations
  `heta gedhara innavaa`
* Tamil text
  `உயிரெழுத்துக்கள்`
* Emojis
  `😀😃😄`
* Special characters
  `@@@@****`
* Mixed characters
  `ma@ma meeka# pariika$Shaa karanavaa`
* English sentences
* Repeated and varied inputs

---

## Tech Stack

| Tool            | Purpose                 |
| --------------- | ----------------------- |
| Playwright Test | UI automation framework |
| Node.js         | Runtime environment     |
| Google Chrome   | Browser execution       |
| JavaScript      | Test scripting          |
| HTML Reporter   | Test result reporting   |

---

## Project Structure

```
PLAYWRIGHT/
├── .github/                    # GitHub workflows/configs
├── node_modules/               # Installed dependencies
├── playwright-report/          # HTML test reports
├── test-results/               # Test execution results
├── tests/
│   ├── inputHandling.spec.js   # Main Playwright test file
│   └── testCase.js             # Input test data
├── .gitignore                  # Git ignore rules
├── package-lock.json
├── package.json                # Project dependencies & scripts
├── playwright.config.js        # Playwright configuration
├── README.md                   # Project documentation
└── RepositoryLink.txt          # Repository reference link

```

---

## Playwright Configuration Highlights

* Runs **only on Chrome**
* Headed mode (`headless: false`)
* Slow execution for visual observation
* Sequential execution (single worker)
* Automatic translation handling (no submit button)
* HTML reporter enabled

---

## Test Flow

1. Launch Chrome browser
2. Navigate to SwiftTranslator
3. Locate input and output text areas
4. Loop through test input list
5. Clear previous input
6. Type new text **slowly (0.5s per character)**
7. Wait until translation output changes
8. Pause 5 seconds for observation
9. Repeat for all inputs

---

## Core Test Logic (Excerpt)

```js
for (const text of inputs) {
  const previousOutput = await outputBox.textContent();

  await inputBox.fill('');
  await inputBox.type(text, { delay: 500 });

  await expect
    .poll(async () => await outputBox.textContent(), { timeout: 20000 })
    .not.toBe(previousOutput);

  await page.waitForTimeout(5000);
}
```

---

## Notes for Evaluators

* This project is designed for **visual verification**
* GitHub Actions may fail due to headed browser usage
* Local execution works as intended
* No external test data or environment variables required

---

## Repository Access

This repository is **publicly accessible** and can be cloned and executed without additional configuration.

---

