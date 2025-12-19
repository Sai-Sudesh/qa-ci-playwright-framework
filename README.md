A **CI-ready QA Automation framework** using **Playwright + TypeScript**, focused on **stability, maintainability, and real-world testing practices.

This project demonstrates an example of how a **Senior QA Automation Engineer** would approach test automation: keeping the focus on **critical business flows**, **clean structure**, and **CI reliability**, not just the number of tests.

"---

Project Goals
* Create a **production-style Playwright framework
* Automate **critical user journeys** rather than just shallow UI coverage

Ensure tests are **CI-friendly and stable.

* Demonstrate **senior-level QA decision making

---
Tech Stack ????️
* **Playwright
* **TypeScript

* **Node.js

* **GitHub Actions CI

* **HTML Test Reports
-
## Project Structure
```
qa-ci-playwright-framework/
│
├── playwright.config.ts      # Global Playwright configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
├ README.md
│
├── tests/
│   └── ui/
│      ├── login.spec.ts     # Login flow tests
│       └── core-flow.spec.ts # Add to Cart → Checkout flow
│
└── .github/
│   └── workflows/

│       └── playwright.yml    # GitHub Actions CI pipeline

|

├── .gitignore

```
---
## ☑️ Test Coverage

UI Automation (Critical Flows)

* Login : Positive & Negative Scenarios

* Add product to cart

* Checkout & order confirmation
Defensive validation - absence of error states
> Tests are designed to be **limited and focused**, representative of real production priorities.
-
## design choices why this is senior-level

* **Critical-path testing** over excessive UI coverage

* **Defensive assertions** separate from happy-path tests

* **Retries enabled only in CI**, and not locally

* **No hard waits / sleeps
* Clean selectors by using `data-test` attributes

* Easy debugging of CI failures via HTML reports

-
Running Tests Locally ????

1️⃣ Install dependencies

```bash
npm install

```

2️⃣ Install Playwright browsers
```bash

npx playwright install

```

3️⃣ Run all the tests

```bash
npx playwright test
```

4️⃣ View HTML report

```bash
npx playwright show-report

```

---

CI Integration (GitHub Actions)
This project uses a **GitHub Actions pipeline**, which:
* Runs tests on every push & PR
* Performs tests headlessly

* Retries failures in CI

* Uploads HTML reports as artifacts

✦ Workflow file:

�
.github/workflows/playwright.yml

↑

-

What This Project Demonstrates ????

* Senior-level automation thinking

* CI-ready test design
* Practical Playwright usage
* Realistic test scope decisions

* Ownership of quality, not just scripts

---

About Me

I am an experienced **Senior QA Automation Engineer** with experience across:

* Web, Mobile & API automation

* CI/CD-driven test execution
* Banking & enterprise systems

Currently actively exploring Senior QA Automation opportunities. ???? Connect with me on **LinkedIn**. - ## ???? Future Improvements (Optional) * Page Object refactor for scaling API-level validations for checkout flow. V Test data abstraction * Cross-browser execution - ⭐ If you're a recruiter or hiring manager This repo is representative of **how I work**, not simply what tools I know. - If you wish, next I can * Provide the **exact LinkedIn post** for sharing this repository * Provide you with a **resume bullet** based on this project Create a **push checklist** before forwarding this to recruiters. Just tell me what you want next ????