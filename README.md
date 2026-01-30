# SwiftTranslator UI Automation (Playwright)

![Playwright](https://img.shields.io/badge/Automation-Playwright-green)
![Node.js](https://img.shields.io/badge/Node.js-Required-blue)
![Browser](https://img.shields.io/badge/Browser-Chrome-yellow)
![Status](https://img.shields.io/badge/Test-Type%20Input%20Validation-success)

This project automates UI testing for **https://www.swifttranslator.com/** using *Playwright Test*.  
It validates that the application correctly handles *different types of text inputs* and updates translation output properly.

---

## Project Objective

To verify that SwiftTranslator:

✔ Accepts multiple languages  
✔ Handles emojis and special characters  
✔ Processes long text inputs  
✔ Updates output dynamically  
✔ Stays stable under repeated input testing  

---

## How to Run This Project

Follow these steps after cloning the repository.

## Clone the repository
git clone <your-repo-link>
cd <repo-folder>

## 2 Install Node modules
npm install

## 3 Install Playwright browsers
npx playwright install

## 4 Run the tests
npx playwright test


You will see:

Browser opens

Text typed slowly

Translation output appears

Each input waits 5 seconds

## 5 View the test report
npx playwright show-report

Opens detailed HTML report in browser.

-- 

## Tech Stack

| Tool | Purpose |
|------|--------|
| Playwright Test | UI Automation Framework |
| Node.js | Runtime Environment |
| Google Chrome | Browser Execution |
| HTML Reporter | Test Report Generation |

---

## Project Structure

.
├── tests/
│ └── inputHandling.spec.js # Main Playwright test
├── testCase.js # Test inputs list
├── playwright.config.js # Playwright configuration
├── package.json
└── README.md

---

## Playwright Configuration Highlights

- Headful execution (headless: false)
- Slow motion enabled (slowMo: 2000)
- Sequential test run (workers: 1)
- Real Google Chrome (channel: chrome)
- Trace collection on retry

---

## Test Flow

1. Launch browser  
2. Open SwiftTranslator  
3. Locate input and output fields  
4. Loop through test inputs  
5. Clear previous input  
6. Type new text slowly  
7. Wait until translation output changes  
8. Pause for visual verification  
9. Repeat  

---

## Core Test Logic

```js
for (const text of inputs) {
  const previousOutput = await outputBox.textContent();

  await inputBox.fill('');
  await inputBox.type(text, { delay: 100 });

  await expect
    .poll(async () => await outputBox.textContent(), { timeout: 20000 })
    .not.toBe(previousOutput);

  await page.waitForTimeout(5000);
}

 Types of Inputs Tested

Sinhala transliterations

Tamil text → உயிரெழுத்துக்கள்

Emojis → 😀😃😄

Special symbols → @@@**

Mixed symbols → ma@ma meeka# pariika$Shaa karanavaa

English sentence

Long paragraph input

Numeric/date input

 