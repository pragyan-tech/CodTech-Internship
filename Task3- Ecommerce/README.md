# E-Commerce Backend Service 

A scalable and secure backend service for an E-Commerce application, built with **Node.js**, **Express.js**, and **MongoDB**.

## 🛠️ Tech Stack
- **Node.js & Express.js**
- **MongoDB** (Database with Mongoose)
- **JWT** (JSON Web Tokens for Security)
- **BcryptJS** (Password Encryption)

## ⚙️ Features
1. **User Auth:** Secure Registration & Login (JWT).
2. **Product Management:** Add and view products.
3. **Shopping Cart:** Add items to a user-specific cart.
4. **Order Processing:** Place orders securely.
5. **Security:** Role-based access control & Password Encryption.

## 🚀 How to Run Locally

1. **Navigate to the Folder:**
   ```bash
   cd CodTech-Internship/Task3-Ecommerce

2. **Install Dependencies:**
   ```bash
   npm install

 3. **Configuration:**
   - Create a `.env` file in the root folder.
   - Add your MongoDB credentials:
     ```env
     PORT=3000
     MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
     JWT_SECRET=your_secure_secret_key
     ```
   *(Note: Make sure your MongoDB server is running locally or provide a cloud Atlas URI)*

4. **Start Server:**
   ```bash
   npm start

## 🧪 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive Token |
| GET | `/api/products` | Fetch all products |
| POST | `/api/products` | Create a product (Requires Token) |
| POST | `/api/cart` | Add item to cart (Requires Token) |
| POST | `/api/orders` | Place an order (Requires Token) |



