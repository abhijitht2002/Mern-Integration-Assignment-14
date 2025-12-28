# CRM Backend System

## Introduction

This project is a backend implementation of a Customer Relationship Management (CRM) system.  
The main objective of this project is to design and develop a robust, scalable, and secure backend that manages customer data, user authentication, and case tracking.

The backend is responsible for handling business logic, database operations, and exposing RESTful APIs that can be used for development and testing purposes.
This project focuses on backend development concepts such as API design, database modeling, authentication, and error handling.

## Project Structure
```bash
crm-backend/
│
├── app/
│   ├── controllers/  
│   │   ├── caseController.js
│   │   ├── customerController.js
│   │   └── userController.js
│   │
│   ├── middleware/ 
│   │   └── checkAuth.js
│   │
│   ├── models/
│   │   ├── Case.js
│   │   ├── Customer.js
│   │   └── User.js
│   │
│   └── routes/
│       ├── caseRoutes.js
│       ├── customerRoutes.js
│       └── userRoutes.js
│
├── config/  
│   └── db.js
│
├── .env               
├── package.json       
└── server.js          
```

## Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/abhijitht2002/MODULE-END-ASSIGNMENT-03.git
cd MODULE-END-ASSIGNMENT-03
```

### Step 2: Install Dependencies

```bash
npm i express mongoose dotenv bcrypt jsonwebtoken
```

### Step 3: Configure .env

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Step 4: Start the Server

```bash
npm run dev
```
