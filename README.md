# EXPRESS JS CRUD OPERATION WITH MONGOOSE AND TYPESCRIPT

This is a TypeScript Express Application with Mongoose for MongoDB CRUD operations. It includes user-related endpoints such as adding a user, retrieving a single user, getting all users, updating a user, deleting a user, updating user orders, and getting the total price value of a user's orders.

## Prerequisites

- [Node.js](https://nodejs.org/) Needs to be installed on your machine
- [MongoDB](https://www.mongodb.com/) Needs to be installed locally or a You have MongoDB database URL

## Installation

**1. Clone the repository in your local machine:**

```bash
  https://github.com/anowarzz/assignment-2-mongoose-CRUD.git
 ```

**2. Navigate to the cloned project folder:**
 
```bash
cd assignment-2-mongoose-crud
```

**3. Install dependencies:**

```bash
npm install 
```

**4. Create a .env file in the root directory with the following content:**
```bash
PORT=5000
DATABASE_URL=Here_Your_MongoDB_URL
BCRYPT_SALT_ROUND=12

```
Replace Here_Your_MongoDB_URL with your actual MongoDB database connection URL.


## Running The Application

- **Build the project**
```bash
npm run build
```

- **Start the development server**
```bash
npm run start:dev

```

- **Run ESLint with automatic fixes**
```bash
npm run lint:fix
```


- **Run Prettier with automatic fixes**
```bash
npm run prettier:fix
```


## API ENDPOINTS

**POST : Add a user.**
```code
/api/users/
```
**GET : Get all users.**
```code
/api/users/
```
**GET :  Get a single user based on userId**
```code
/api/users/:userId
```
**PUT :  Update a user information**
```code
/api/users/:userId
```

**DELETE : Delete a user from database**
```code
/api/users/:userId
```

**PUT :  Add order in user's order list**
```code
/api/users/:userId/orders
```

**GET :  Calculate the total price of order of user**
```code
/api/users/:userId/orders/total-price
```


## Happy Developing