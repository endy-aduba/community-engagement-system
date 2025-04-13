# 🧩 Community Engagement System

This project is a **Micro Frontend + Microservices** based application designed and implemented by a Software Engineering Technology student as part of an academic assignment.

It is built with:

- **Microservices**: Express.js + Apollo Server + GraphQL
- **Micro Frontends**: React + Vite + Module Federation
- **Database**: MongoDB
- **GraphQL Communication**: Apollo Client

---

## 🚀 Project Structure

```
community-engagement-system/
├── backend/
│   ├── auth-service/             # Handles user authentication and roles
│   └── community-service/        # Handles posts, discussions, help requests
├── frontend/
│   ├── auth-frontend/            # Signup/Login React app (Micro Frontend)
│   ├── community-frontend/       # Community UI (Micro Frontend)
│   └── host-app/                 # Shell app loading remotes via Module Federation
```

---

## 📦 Features

### ✅ Authentication Microservice
- User Signup/Login
- Password hashing with `bcryptjs`
- Role-based registration (`resident`, `business_owner`, `community_organizer`)
- JWT-based token generation

### ✅ Community Engagement Microservice
- Create & view community posts (News/Discussions)
- Submit & manage help requests
- Mark help as resolved
- Add volunteers to help requests

### ✅ Micro Frontends
- Separate Vite React apps for Auth and Community
- Loaded dynamically into the `host-app` via Module Federation
- Integrated GraphQL communication using Apollo Client

---

## ⚙️ Technologies

| Tech Stack         | Description                          |
|--------------------|--------------------------------------|
| React              | Frontend library                     |
| Vite               | Build tool for fast dev experience   |
| Module Federation  | Dynamically load micro frontends     |
| Express.js         | Web framework for Node.js            |
| Apollo Server      | GraphQL server integration           |
| GraphQL            | API query language                   |
| MongoDB            | NoSQL database                       |
| Apollo Client      | GraphQL client in React              |

---

## 🛠 Setup Instructions

### 📌 Prerequisites
- Node.js ≥ 18
- MongoDB local or Atlas
- Terminal with 3 sessions for services

---

### 📦 Install Dependencies

```bash
# Backend
cd backend/auth-service && npm install
cd ../community-service && npm install

# Frontend
cd ../../frontend/auth-frontend && npm install
cd ../community-frontend && npm install
cd ../host-app && npm install
```

---

### 🗄 Set Up Environment Variables

Create a `.env` file for each backend service:

#### 📁 backend/auth-service/.env
```env
PORT=4001
MONGO_URI=mongodb://localhost:27017/authservice
JWT_SECRET=this_is_super_secret
```

#### 📁 backend/community-service/.env
```env
PORT=4002
MONGO_URI=mongodb://localhost:27017/communityservice
```

---

### ▶️ Start All Services

```bash
# Terminal 1: Auth Service
cd backend/auth-service
node index.js

# Terminal 2: Community Service
cd backend/community-service
node index.js

# Terminal 3: Frontend Apps
# Start Auth Frontend (Port 5173)
cd frontend/auth-frontend
npm run dev

# Start Community Frontend (Port 5174)
cd ../community-frontend
npm run dev

# Start Host App (Port 5175)
cd ../host-app
npm run dev
```

---

## 🔗 App URLs

| App                  | URL                            |
|----------------------|---------------------------------|
| Auth Frontend        | http://localhost:5173          |
| Community Frontend   | http://localhost:5174          |
| Host App (Main)      | http://localhost:5175          |
| Auth GraphQL API     | http://localhost:4001/graphql  |
| Community GraphQL API| http://localhost:4002/graphql  |

---

## ✅ Evaluation Criteria

| Category                            | Weight |
|-------------------------------------|--------|
| Micro Frontends (Auth + Community)  | 30%    |
| MongoDB Models & Config             | 5%     |
| GraphQL Microservices               | 30%    |
| Vite Module Federation Integration  | 20%    |
| Styling and UI Friendliness         | 5%     |
| Code Demonstration & Explanation    | 10%    |
| **Total**                           | **100%** |

---

## 📸 Demo Preview *(Optional)*

*(Insert demo video or GIF here if available)*

---

## 👨‍💻 Author

**Nnamdi Anthony Aduba**  
Software Engineering Technology Student  
Centennial College – 2025  

---

## 📝 License

This project is part of academic coursework and is not intended for commercial use.
