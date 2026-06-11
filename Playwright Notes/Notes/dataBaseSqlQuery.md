In **QA Automation interviews**, SQL is mainly used for **data validation, test data setup, and backend verification**. As someone with **automation + backend validation experience (Playwright / Node.js / Cypress)**, you will often be asked **basic to intermediate SQL queries**.

Below are **Top 15 SQL queries commonly used by QA Automation Engineers in interviews**.

---

# 1️⃣ Select All Data

Used to fetch all records from a table.

```sql
SELECT * FROM users;
```

Example use:
Verify all users stored in the database.

---

# 2️⃣ Select Specific Columns

Fetch only required columns.

```sql
SELECT id, name, email FROM users;
```

Purpose: Validate specific fields instead of entire table.

---

# 3️⃣ WHERE Condition

Filter data based on condition.

```sql
SELECT * FROM users
WHERE email = 'test@mail.com';
```

Automation use:
Verify that **newly registered user exists in DB**.

---

# 4️⃣ COUNT Records

Count number of rows.

```sql
SELECT COUNT(*) FROM users;
```

Example use:

- Validate number of records inserted.

---

# 5️⃣ Insert Test Data

Used to insert data for testing.

```sql
INSERT INTO users (name, email, password)
VALUES ('Test User', 'test@mail.com', '12345');
```

Automation use:

- Create **test data before running automation**.

---

# 6️⃣ Update Data

Modify existing records.

```sql
UPDATE users
SET status = 'active'
WHERE email = 'test@mail.com';
```

Example:
Change user status for testing.

---

# 7️⃣ Delete Data

Remove test data.

```sql
DELETE FROM users
WHERE email = 'test@mail.com';
```

Automation use:
Clean test data after execution.

---

# 8️⃣ ORDER BY

Sort records.

```sql
SELECT * FROM orders
ORDER BY created_at DESC;
```

Example:
Get **latest order placed by user**.

---

# 9️⃣ LIMIT

Fetch limited records.

```sql
SELECT * FROM orders
ORDER BY created_at DESC
LIMIT 5;
```

Automation use:
Check **recent transactions**.

---

# 🔟 GROUP BY

Group records.

```sql
SELECT status, COUNT(*)
FROM orders
GROUP BY status;
```

Example:
Check order distribution by status.

---

# 1️⃣1️⃣ INNER JOIN

Combine data from two tables.

```sql
SELECT users.name, orders.order_id
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

Automation use:
Validate **user order mapping**.

---

# 1️⃣2️⃣ LEFT JOIN

Return all records from left table.

```sql
SELECT users.name, orders.order_id
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
```

Example:
Find users **without orders**.

---

# 1️⃣3️⃣ BETWEEN

Filter range values.

```sql
SELECT * FROM orders
WHERE created_at BETWEEN '2026-01-01' AND '2026-01-31';
```

Automation use:
Verify orders created during testing period.

---

# 1️⃣4️⃣ LIKE

Pattern search.

```sql
SELECT * FROM users
WHERE email LIKE '%gmail.com';
```

Example:
Fetch users with Gmail emails.

---

# 1️⃣5️⃣ DISTINCT

Remove duplicate values.

```sql
SELECT DISTINCT status
FROM orders;
```

Example:
List all unique order statuses.

---

# ⭐ Real Automation Example (Interview Level)

Example query used in **Playwright / Cypress DB validation**:

```sql
SELECT order_id, status
FROM orders
WHERE user_id = 101
ORDER BY created_at DESC
LIMIT 1;
```

Purpose:

- Verify **latest order status after UI action**.

---

# ⭐ SQL Skills Expected from QA Automation Engineers

Interviewers usually expect knowledge of:

- SELECT
- WHERE
- JOIN
- GROUP BY
- ORDER BY
- LIMIT
- COUNT
- INSERT / UPDATE / DELETE
