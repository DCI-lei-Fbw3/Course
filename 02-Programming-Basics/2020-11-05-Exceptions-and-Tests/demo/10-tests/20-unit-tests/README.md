# Unit Tests

## Frameworks

---

### Mocha

https://mochajs.org/

---

### Jest

https://jestjs.io

Jest will execute files found in `__tests__/`-folders files ending in:

-   test
-   spec
-   test.js
-   spec.js

refer to https://stackoverflow.com/questions/55995157/how-to-run-jest-on-files-not-ending-in-test-js-or-spec-js

#### Getting Started

https://jestjs.io/docs/en/getting-started

1. Install

    Either with:

    ```
    $> yarn add --dev jest
    # or
    $> npm init
    $> npm install --save-dev jest
    ```

2. Configure `package.json`

    add the following, or similar:

    ```javascript
    {
      "scripts": {
        "test": "jest"
      }
    }
    ```

3. Sample-Test

    `sum.test.js`

    ```javascript
    const sum = require("./sum");

    test("adds 1 + 2 to equal 3", () => {
    	expect(sum(1, 2)).toBe(3);
    });
    ```

4. Run Tests

    Either with:

    ```
    $> yarn test
    # or
    $> npm run test

    # or if "jest" is in the search path
    # create basic config:
    $> jest init
    # execute tests:
    $> jest FILE_FILTER --notify --config=config.json
    ```

---
