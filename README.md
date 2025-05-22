# [Friends Web App](https://react-and-python-friends-web-app.vercel.app/)


This is a web application built using **React** for the frontend and **Python (FastAPI or Flask)** for the backend. The application allows users to manage and interact with their friends list.

## Features
- Add, edit, and delete friends from the list.
- View detailed information about each friend.
- Responsive and user-friendly UI built with React.
- Fast and efficient backend API using Python.

## Tech Stack
### Frontend:
- React.js
- CSS / TailwindCSS (for styling)

### Backend:
- Python (FastAPI or Flask)
- SQLite / PostgreSQL (Database)
- JWT Authentication(need to add)

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- **Node.js** and **npm** (for React frontend)
- **Python 3.x** (for backend)
1. Clone the repository:
   ```sh
   git clone https://github.com/LikhithReddy-S/React-and-python-Friends-Web-app.git
   cd React-and-python-Friends-Web-app/backend
   ```

### Backend Setup

2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   #on mac, `source venv/bin/activate`  # On Windows, use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4.Instll Flask
   ```sh
   set FLASK_APP=app.py
   set FLASK_ENV=development
   flask run
   ```

4. Run the backend server:
   ```sh
   uvicorn main:app --reload  # If using FastAPI
   python app.py  # If using Flask
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

## Usage
- Open the application in your browser at `http://localhost:3000/`.
- Use the UI to manage friends.
- `http://localhost:5000/` (Flask).

## Contributing
Feel free to fork the repository and submit pull requests to improve the project.

## License
This project is licensed under the MIT License.

## Contact
For any queries, reach out to:
- **GitHub**: [LikhithReddy-S](https://github.com/LikhithReddy-S)
- **LinkedIn**: [Profile](https://www.linkedin.com/in/likhithreddys/)
- **Portfolio**: [Website](https://likhithreddy-s.github.io/my-port/)

