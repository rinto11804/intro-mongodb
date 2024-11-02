
# MongoDB Express API Testing with `curl`

This document provides `curl` commands to test each CRUD endpoint of a MongoDB Express API.

## Base URL
Assuming the server is running locally:
```
http://localhost:5000
```

## Endpoints

### 1. Get All Items

Retrieve all items from the database.

```bash
curl -X GET http://localhost:5000/api/items
```

### 2. Get Item by ID

Retrieve a specific item by its ID. Replace `:id` with the actual item ID.

```bash
curl -X GET http://localhost:5000/api/items/:id
```

### 3. Create New Item

Create a new item with a JSON payload. Customize `name`, `quantity`, and `description` as needed.

```bash
curl -X POST http://localhost:5000/api/items \
-H "Content-Type: application/json" \
-d '{
  "name": "Sample Item",
  "quantity": 10,
  "description": "This is a test item."
}'
```

### 4. Update Item by ID

Update an item by its ID. Replace `:id` with the actual item ID, and modify the JSON body if needed.

```bash
curl -X PUT http://localhost:5000/api/items/:id \
-H "Content-Type: application/json" \
-d '{
  "name": "Updated Item",
  "quantity": 20,
  "description": "This is an updated description."
}'
```

### 5. Delete Item by ID

Delete an item by its ID. Replace `:id` with the actual item ID.

```bash
curl -X DELETE http://localhost:5000/api/items/:id
```

---

## Notes

- Ensure your server is running at `http://localhost:5000` before testing.
- Replace `:id` in the commands for specific items with a real item ID from your MongoDB collection.
- Use these commands to perform CRUD operations and verify each endpoint.
