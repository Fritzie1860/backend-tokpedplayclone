# Tokped Play Clone (API / Backend)

A repository that is part of the final project of the Fullstack Track in Generasi Gigih 3.0, which produces a cloning of Tokopedia Play. This repository is the backend component, created using Node.js, Express.js, and MongoDB.

See [frontend repository](https://github.com/Fritzie1860/frontend-tokpedplayclone.git)


## **Table of Contents**

- [Database Schema](#database-schema)
- [API Structure](#api-structure)
- [Server Hosting Information](#server-hosting-information)
- [How to run in local](#how-to-run-in-local)


## **Database Schema**

**Relationship**

The structure includes 3 collections: `Videos`, `Products`, and `Comments`, with the following relationships:

- Every `Videos` contains a list of `Products` as well as a list of `Comments`.
- The visibility of `Comments` and `Products` is dependent on the accessed video_id.

**Model Schema**

1. Videos

```
{
    "_id": <ObjectID>,
    "link_thumbnail": String,
    "link_video": String,
    "title": String,
    "upload_date": Date,
}
```

2. Products

```
{
    "_id": <ObjectID>,
    "video_id": <ObjectID>,
    "link_product": String,
    "price": Number,
    "title": String,
    "link_imageProduct": String,
}
```

3. Comments

```
{
    "_id": <ObjectID>,
    "video_id": <ObjectID>,
    "username": String,
    "comment": String,
    "timestamp": Date,
}
```


## **API Structure**

There are 3 parent endpoints: /videos, /products, and /comments:

- videos
  - `GET` /videos
  - `GET` /videos/:video_id
- products
  - `GET` /products
- comments
  - `POST` /comments
  - `GET` /comments/:video_id


## **Server Hosting Information**

The server is hosted on the render.com platform with the server link: https://tokpedplay-fritzie.onrender.com.

**How to Access the Server:**

To interact with the server, you can use the provided link: https://tokpedplay-fritzie.onrender.com.

Please note that this link serves as the base URL for making API requests to the server. Make sure to include the relevant endpoints in your requests as needed.


## How to run in local

**Pre-requisites**

- Node.js and npm installed on your machine.
- MongoDB installed and running.
- A MongoDB database set up on MongoDB Atlas (or another host), with the connection details configured in [/db.js](https://github.com/Fritzie1860/backend-tokpedplayclone/blob/main/src/utils/db.js).

**Instructions**

1. Clone the repository to your local machine:

```
git clone https://github.com/Fritzie1860/backend-tokpedplayclone.git
```

2. Install the required npm packages:
```
   npm install
```
3. DB setup (optional): 

Open the [/db.js](https://github.com/Fritzie1860/backend-tokpedplayclone/blob/main/src/utils/db.js) file and ensure that your MongoDB connection URL is properly configured. If necessary, update it with your MongoDB Atlas connection details.

5. Populate DB (if needed): 

```
   cd src
   cd models
   node migrate.js
```

4. Replace the URL: 

Since environment variables aren't utilized in this setup, please be aware that you'll need to manually adjust the API URLs if you're switching between local development and production environments. Also, if you're running the backend on a different port, make sure to update the frontend API requests accordingly.
5. Running:

If you're running the backend separately, start the server using either of the following commands:
   - Using nodemon:
   ```
   nodemon index.js
   ```
   - Using node:
   ```
   node index.js
   ```
If you're also running the frontend locally, please note that due to the absence of environment variables, you'll need to manually replace all API URLs with http://localhost:3000 or http://localhost:3001 in your frontend code. To run the frontend and backend together, you may need to see this [repository] (https://github.com/Fritzie1860/FinalProject-TokpedPlayClone).