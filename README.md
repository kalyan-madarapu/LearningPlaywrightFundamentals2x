# LearningPlaywrightFundamentals2x

A comprehensive Playwright test automation project for learning and demonstrating browser testing fundamentals. This repository contains example tests that validate web application behavior using Playwright's powerful API.

## Project Contents

- **package.json** - Project dependencies and npm scripts
- **playwright.config.ts** - Playwright test configuration (supports Chromium, Firefox, and WebKit)
- **tests/example.spec.ts** - Example test suites with multiple test cases
- **playwright-report/** - Generated HTML test reports
- **test-results/** - Raw test result artifacts

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/kalyan-madarapu/LearningPlaywrightFundamentals2x.git
cd LearningPlaywrightFundamentals2x
```

2. Install dependencies:

```bash
npm install
```

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests in headed mode (see browser)

```bash
npm run test:headed
```

### Run tests in debug mode (interactive debugging)

```bash
npm run test:debug
```

### Run tests with UI mode

```bash
npm run test:ui
```

### Generate and view HTML report

```bash
npm run test:report
```

## Test Configuration

**Supported Browsers:**
- Chromium (Desktop Chrome)
- Firefox (Desktop Firefox)
- WebKit (Desktop Safari)

**Test Settings:**
- Tests run in parallel by default
- HTML report generation enabled
- Trace collection on first retry
- 2 retries on CI environments

## Project Structure

```
.
├── tests/
│   └── example.spec.ts       # Example test suites
├── playwright-report/        # Generated reports
├── playwright.config.ts      # Playwright configuration
├── package.json              # Dependencies and scripts
├── README.md                 # This file
└── .gitignore                # Git ignore rules
```

## Notes

- `node_modules/` is excluded from version control to reduce repository size
- A `.gitignore` file is included in `node_modules/` to handle directory tracking
- All test reports and results are automatically generated during test runs
- Customize `playwright.config.ts` to enable mobile testing or add CI/CD configuration
