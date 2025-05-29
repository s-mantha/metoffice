# Met Office Playwright Test Suite

This project uses [Playwright](https://playwright.dev) for end-to-end testing of the [Met Office](https://www.metoffice.gov.uk/) website, including:

- Location search
- Forecast navigation
- Pollen map interactions
- Precipitation map with zoom and region selection

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://gitlab.com/your-group/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
npx playwright install --with-deps
```

---

## Run Tests

Run the tests with these commands:

```bash
npx run test          # Run tests in headless mode
npm run test:headed # Run tests with browser UI (headed)
npm run report   # View the latest test report


To see the report:

```bash
npx playwright show-report
```

## GitLab CI/CD

This project is CI-ready with GitLab. The `.gitlab-ci.yml` config runs Playwright tests in a headless container.