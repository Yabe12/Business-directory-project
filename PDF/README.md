# Business Directory Project

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Middleware](#middleware)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Business Directory Project is a web application designed to help users find and register businesses. The platform allows business owners to register their businesses and regular users to search, rate, and save their favorite businesses. The project is built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features
- User authentication (registration and login)
- Business registration and management
- Search for businesses by category, subcategory, tags, etc.
- Rate and review businesses
- Save favorite businesses
- Admin features for managing users and businesses
- Premium business listings

## Technologies Used
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Frontend:** React (if applicable)
- **Authentication:** JWT (JSON Web Tokens)
- **Other Tools:** dotenv for environment variables, bcrypt for password hashing

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/Yabe12/business-directory.git
    ```
2. Navigate to the project directory:
    ```sh
    cd business-directory
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory and add your environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/business_directory
    JWT_SECRET=your_jwt_secret
    ```
5. Start the server:
    ```sh
    npm start
    ```

## Usage
- Use Postman or any API client to interact with the backend.
- Frontend can be developed separately and interact with the API endpoints provided by the backend.

## Folder Structure
business-directory/
├── config/
│ └── db.js
├── controllers/
│ ├── businessController.js
│ └── userController.js
│ └── authController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── User.js
│ ├── Business.js
│ ├── Tag.js
│ ├── BusinessTag.js
│ ├── UserPhoto.js
│ ├── BusinessPhoto.js
│ ├── Rating.js
│ ├── Favorite.js
│ ├── Role.js
│ ├── UserRole.js
│ ├── Permission.js
│ ├── RolePermission.js
│ ├── AuditLog.js
│ ├── PasswordResetToken.js
│ └── TwoFactorAuth.js
├── routes/
│ ├── businessRoutes.js
│ └── userRoutes.js
│ └── authRoutes.js
├── public/
├── views/
├── app.js
├── package.json
└── .env
