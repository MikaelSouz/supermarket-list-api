## Supermarket List Api

API in Node.js using Express and Mongoose to connect a MongoDB Database.
Assist the user with a dynamic shopping list.

### Technologies Used

- Node.js,
- Express,
- Mongoose,
- MongoDB.

### Required Technologies

- Node.js installed (https://nodejs.org/en)
- MongoDB instance running:

  Ex.: Running with docker

  ```
  docker run --name supermarket-list -p 27017:27017  -d mongo

  ```

### Steps to run project

1. Clone the repository

```
https://github.com/MikaelSouz/supermarket-list-api.git
```

2. Navigate to the repository

```
cd supermarket-list-api
```

3. Install the dependencies

```
npm install
```

4. Run the API

```
npm run start
```

### Availabe endpoints

[GET]/list-items

[POST]/list-items

[DELETE]/list-items/:id

[PUT]list-items/:id
