# Weather App Backend

This is the backend for a weather application that provides weather data, user authentication, and user profile management. The backend is built using **Node.js**, **Express.js**, and **MongoDB**. It includes features like user registration, login, weather data retrieval, and user-specific weather history.

## Features

- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Weather Data**: Fetches weather data for a given location and stores it in the database.
- **User Profile Management**: Allows users to manage their profile and favorite locations.
- **Weather History**: Provides a history of weather searches for authenticated users.
- **Middleware**: Includes authentication middleware to protect routes.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and weather data.
- **Mongoose**: ODM library for MongoDB.
- **JWT**: For secure user authentication.
- **dotenv**: For managing environment variables.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app-backend.git
   cd weather-app-backend
   npm install

2. Create .env file
    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    