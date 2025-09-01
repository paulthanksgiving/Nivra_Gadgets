"# Nivra_Gadgets" 

# 🛍️ Nivra (https://nivra-gadgets.netlify.app/)

Nivra is a modern e-commerce web application built with **Vite + React**.  
It integrates **Clerk** for authentication and user management, and fetches products from the public **Fake Store API** to simulate a real shopping experience.  
The project is designed to be scalable, fast, and easily deployable on **Netlify**.

---
# 👩‍💻 Demo User Walkthrough

- Sign Up / Sign In → Users create an account or log in via Clerk.
- Browse Products → Products are dynamically fetched from Fake Store API.
- Add to Cart → Users can add/remove products, managed via React Context.
- User Profile → Signed-in users can manage account via Clerk’s UserButton.
- Secure Access → Only authenticated users can access restricted pages (e.g. Checkout).

---

## ✨ Features

- ⚡ **Fast Development** with [Vite](https://vitejs.dev/)  
- 🎨 **Modern UI** styled with [Tailwind CSS](https://tailwindcss.com/)  
- 👤 **Authentication & User Management** powered by [Clerk](https://clerk.com/)  
- 🛒 **Product Catalog** fetched from [Fake Store API](https://fakestoreapi.com/)  
- 🛍️ **Shopping Cart** with React Context for state management  
- 📱 **Responsive Design** (desktop, tablet, mobile)  
- 🌍 **Deployed on Netlify** with environment variable support  

---

## 🚀 Tech Stack

- **Frontend:** React (with Vite)  
- **Styling:** Tailwind CSS  
- **Authentication:** Clerk  
- **Data Source:** Fake Store API  
- **Deployment:** Netlify

  nivra/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, icons, fonts
│   ├── components/     # Reusable UI components (Navbar, Footer, ProductCard, Category, Features, etc)
│   ├── context/        # React Context for state (DataContext, CartContext)
│   ├── pages/          # Page components (Home, Products, Cart, etc.)
│   ├── App.jsx         # Main app wrapper
│   └── main.jsx        # Entry point with ClerkProvider
├── .env                # Local environment variables (not committed)
├── package.json
└── vite.config.js

---

## 📦 Installation & Setup

### 1. Clone the repository
git clone https://github.com/yourusernam/nivra.git

### 2. Install Dependencies
- npm install
- npm install react-router-dom
- npm install tailwindcss @tailwindcss/vite
- npm install @clerk/clerk-react

### 3. Environment Variable (Create .env file in the project root)

### 4. Run, Build, and Preview locally
- npm run dev (Run)
- npm run build (Build)
- npm run preview (Preview)

## 5. 🛒 Fake Store API Usage
Nivra uses the Fake Store API to simulate products, categories, and carts.
**Example Endpoints**
- All Products: (https://fakestoreapi.com/products?limit=150)
- Single Product: (https://fakestoreapi.com/products/1)
- Categories: (https://fakestoreapi.com/products/categories)
- By Category: (https://fakestoreapi.com/products/category/jewelery)

## 6. 🔑 Authentication with Clerk
Clerk provides authentication and user session management.
**Setup**
- Create a free account at Clerk
- Create an application in the Clerk dashboard.
- Copy your Frontend API Key and add it to .env

## 7. 🌍 Deployment on Netlify
***Build Settings**
- Branch to deploy: main
- Base directory: (leave empty unless inside a subfolder)
- Build command: npm run build
- Publish directory: dist
- Functions directory: (leave empty unless you add Netlify Functions)

**Environment Variables on Netlify**
- Go to Site Settings → Environment Variables.
- Add your keys:
key - VITE_CLERK_PUBLISHABLE_KEY
value - your_clerk_key
