# React Assignment 🚀

A simple React.js project demonstrating functional components, state management with hooks, and CSS styling.

---

## 📋 **Features**

- ✅ **Header** component to display the project title.
- ✅ **Profile** component to show user details (name, email) using props.
- ✅ **Counter** component to increment and display a count using `useState`.
- ✅ **State Management** using React Hooks (`useState`).
- ✅ **CSS Styling** using `index.css` for a clean and responsive design.

---

## 🛠️ **Tech Stack**

- ⚛️ **React.js** – Frontend Framework  
- 💡 **JavaScript** – Core Logic  
- 🎨 **CSS** – Styling (via `index.css`)  
- ⚡ **Vite** – Build Tool for React  

---

## 📦 **Installation & Setup Guide**

Follow these steps to install, run, and use the project:

### ✅ **1. Prerequisites**

- Install **Node.js** and **npm** (if not already installed):
  ``
  nvm install --lts
  nvm use --lts
Check versions to ensure installation:

node -v
npm -v
📁 2. Clone the Repository

git clone https://github.com/your-username/react-assignment.git
cd react-assignment


📁 3. Create React Project Using Vite
Open your terminal and run:

npm create vite@latest react-assignment
Follow the prompts:

Select a framework:
Use arrow keys and choose → React

Select a variant:
Choose → JavaScript

Vite will scaffold your project.

📂 4. Navigate to Project Directory & Install Dependencies
Run the following command to install all required dependencies:
cd react-assignment


npm install
This installs packages like React, Vite, and others listed in package.json.

🚀 5. Start the Development Server
To run the project locally:


npm run dev
If successful, you should see:

VITE v4.x.x  ready in x.xs
  ➜  Local:   http://localhost:5173/
🌐 Open your browser and go to: http://localhost:5173

🧮 6. How to Use the Project
🎯 Header Component
Displays the title of the project.
👤 Profile Component
Displays a sample user profile with name and email.
These details can be modified in the code via props.
➕ Counter Component
Shows a number that can be incremented by clicking the “Increment” button.
The counter updates instantly using React's useState hook.
🎨 7. Styling
The project uses index.css for styling.
The UI is clean, responsive, and styled using vanilla CSS.
You can modify styles in src/index.css as needed.
📁 Project Structure

react-assignment/
├── node_modules/           # Installed dependencies
├── public/                 # Public files
│   
├── src/                    
│   ├── components/         # All React components
│   │   ├── Header.jsx
│   │   ├── Profile.jsx
│   │   └── Counter.jsx
│   ├── App.jsx             # Main app file
│   ├── main.jsx            # Entry point
│   └── index.css           # CSS styles
├── .gitignore
├── package.json            # Project metadata & dependencies
├── README.md               # Documentation
└── vite.config.js          # Vite config