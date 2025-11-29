# 🔮 Fortune Teller App

A full-stack web application that generates random fortunes for the user. This project demonstrates the integration between a React frontend and a backend API.

## 🛠️ Development Process

The application was built using a structured workflow, starting from the backend and moving to the frontend interface.

### 1. Initialization
- **Backend:** Established the backend server first to handle fortune generation logic.
- **Frontend:** Initialized the frontend using **React + Vite**.
- **Cleanup:** Removed default boilerplate files (`App.css`, `index.css`) to start with a clean slate.

### 2. Architecture & File Structure
To maintain a clean codebase, the project files were organized into specific directories:
- **`/Pages`**: Contains the main view components (e.g., `HomePage.jsx`).
- **`/Styles`**: Contains component-specific CSS files (e.g., `Homepage.css`).

### 3. Implementation Steps
1. Created `HomePage.jsx` and its corresponding stylesheet.
2. Verified component integrity by importing and rendering `HomePage` inside `App.jsx`.
3. Designed the UI, including the message box, typography, and action buttons.
4. Integrated the frontend with the backend API to enable dynamic data fetching.

---

## 💻 Key Functionality

### Data Fetching & Error Handling
The application uses an asynchronous function to fetch data from the backend. It includes error handling to manage failed requests (e.g., 404 or 500 errors).

```javascript
    async function Getyourfortune() {
        const URL = "http://localhost:3000/fortune";
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw error(response.status);
            }
             const data = await response.json();
             y(data.fortune);
        } catch (error) {
            console.error(error);
        }
    }
```
___

### UseState
- Import use state :
``
import { useState } from "react";
``
- x is a default state using UseState we can update the value of x with y
`` 
const [x,y] = useState("Get your fortune");
``