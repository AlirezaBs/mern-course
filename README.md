# MERN Stack E-commerce Project

A modern e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a clean UI and robust functionality.

## Features

- 🛍️ Product Management
  - View products with images and details
  - Add new products
  - Edit existing products
  - Delete products
- 🎨 Modern UI with Chakra UI
  - Responsive design
  - Dark/Light mode support
  - Beautiful animations and transitions
- 🔒 User Authentication
  - Secure login and registration
  - Protected routes
  - User profile management
- 🛒 Shopping Cart
  - Add/remove items
  - Update quantities
  - Persistent cart state
- 💳 Payment Integration
  - Secure checkout process
  - Multiple payment methods
- 📱 Responsive Design
  - Mobile-first approach
  - Cross-browser compatibility

## Tech Stack

### Frontend
- React.js
- Chakra UI for components and styling
- React Icons
- React Router for navigation
- Zustand for state management
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/mern-crash-course.git
cd mern-crash-course
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
```bash
# In backend directory
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development servers
```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm run dev
```

## Project Structure

```
mern-crash-course/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── store/
│       ├── utils/
│       └── App.jsx
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the beautiful UI components
- [React Icons](https://react-icons.github.io/react-icons/) for the icon set
- [MongoDB](https://www.mongodb.com/) for the database
- [Express.js](https://expressjs.com/) for the backend framework
- [React.js](https://reactjs.org/) for the frontend framework 