# 🍽️ Mood Food Generator

## 📌 Project Overview
Mood Food Generator is an interactive web application designed to help users discover recipes that match their current mood. Whether you're feeling happy, sad, stressed, or just bored, this app will suggest a recipe that aligns with your emotional state. By combining humor and functionality, the app aims to make decision-making around meals easier and more enjoyable. 

It features a playful interface where users select a mood, receive tailored recipe suggestions, and even save their favorites for future use. The app’s goal is to turn your mood into a memorable dining experience while providing an engaging platform to explore web development skills.

---

## 🚀 Key Features
- **Mood Selection**: A dropdown or emoji picker to select the user’s current mood (e.g., Happy, Sad, Bored, Stressed).
- **Recipe Suggestion**: Random recipes for snacks, meals, or desserts tailored to the selected mood.
- **Save Favorites**: Users can save recipes they like for future reference.
- **Basic Search**: Search for recipes by ingredient or cuisine type.
- **Recipe Shuffle**: A "Surprise Me!" button for random recipe suggestions.

---

## 🛠️ Tech Stack
### **Frontend (Client)**
- HTML, CSS, JavaScript, React.js

### **Backend (Server)**
- Node.js with Express.js

### **Database**
- MongoDB (to store recipes and user favorites)

### **API Integration**
- Use a free recipe API like **Spoonacular** or mock some recipes locally for simplicity.

---

## 📂 Project Structure
```
Mood-Food-Generator/
│── client/         # React frontend (Vite)
│── server/         # Express backend (Node.js, MongoDB)
│── README.md       # Project Documentation
│── .gitignore      # Ignore unnecessary files
│── package.json    # Dependencies and scripts
```

---

## 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/mood-food-generator.git
cd mood-food-generator
```

### **2️⃣ Setup Backend**
```bash
cd server
npm install
```
Create a `.env` file in the `server/` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run the backend server:
```bash
npm run dev
```

### **3️⃣ Setup Frontend**
```bash
cd client
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`.

---

## 🔗 API Endpoints
### **Get Food Recommendations Based on Mood**
**Endpoint:** `GET /api/moods/:mood`

#### Example Request:
```bash
GET http://localhost:5000/api/moods/happy
```
#### Example Response:
```json
["Ice Cream", "Pizza", "Chocolate"]
```

---

## 📌 Why This Project?
This project combines humor with practicality and lets you:
- Explore building a fun, user-friendly interface
- Gain hands-on experience with **React, Node.js, Express, and MongoDB**.
- Work with **external APIs** like Spoonacular for recipe recommendations.
- Develop an interactive, **engaging project** to showcase web development skills

---


## Deployment Link
https://s72-anany-moodfoodgenerator.onrender.com/

