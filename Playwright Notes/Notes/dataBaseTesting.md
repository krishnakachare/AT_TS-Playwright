In **Playwright automation**, sometimes we need to **validate data in the database after performing UI actions** (for example: after creating a user from UI, verify the user record exists in DB).
We usually connect to the database using a Node.js SQL client like **mysql2** or **pg**.

Below is a **simple demo example using Playwright + SQL query**.

---

# 1️⃣ Scenario Example

**Test Case:**

1. User registers on the website through UI.
2. After submission, verify the **user record is stored in the database**.

---

# 2️⃣ Install Required Package

Example for **MySQL**

```bash
npm install mysql2
```

---

# 3️⃣ Database Connection Utility

Create file: **dbConnection.js**

```javascript
import mysql from 'mysql2/promise';

export async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testdb'
  });

  return connection;
}
```

---

# 4️⃣ Playwright Test With SQL Query

Create test file: **register.spec.js**

```javascript
import { test, expect } from '@playwright/test';
import { getDBConnection } from './dbConnection';

test('Verify user data in DB after registration', async ({ page }) => {

  const email = `testuser_${Date.now()}@mail.com`;

  // Step 1: Perform UI Action
  await page.goto('https://example.com/register');

  await page.fill('#name', 'Test User');
  await page.fill('#email', email);
  await page.fill('#password', 'Password123');
  await page.click('#registerBtn');

  await page.waitForTimeout(3000);

  // Step 2: Connect DB
  const connection = await getDBConnection();

  // Step 3: Execute SQL Query
  const [rows] = await connection.execute(
    `SELECT * FROM users WHERE email = ?`,
    [email]
  );

  // Step 4: Assertion
  expect(rows.length).toBeGreaterThan(0);
  expect(rows[0].email).toBe(email);

  // Step 5: Close connection
  await connection.end();

});
```

---

# 5️⃣ SQL Query Used

```sql
SELECT * FROM users WHERE email = 'testuser@mail.com';
```

Purpose:

* Check if the **user record exists**
* Validate **email, name, status, created date etc**

---

# 6️⃣ Where This Is Used in QA Automation

Common **real-world scenarios**:

| Scenario          | SQL Validation              |
| ----------------- | --------------------------- |
| User Registration | Verify user record created  |
| Order Placement   | Verify order entry in DB    |
| Payment           | Validate transaction status |
| Password Reset    | Verify token stored         |
| Email Trigger     | Verify notification record  |

---

# 7️⃣ Advanced Example (Reusable DB Helper)

```javascript
export async function getUserByEmail(email) {
  const connection = await getDBConnection();

  const [rows] = await connection.execute(
    `SELECT * FROM users WHERE email=?`,
    [email]
  );

  await connection.end();
  return rows;
}
```

Test usage:

```javascript
const user = await getUserByEmail(email);
expect(user.length).toBe(1);
```

---

# 8️⃣ Interview Explanation (Short Version)

You can say in interview:

> In Playwright automation, I sometimes validate backend data using SQL queries. For example, after creating a user through UI, I connect to the database using a Node.js library like mysql2, execute a SELECT query, and assert that the expected record exists. This helps ensure end-to-end data integrity between UI and backend.
