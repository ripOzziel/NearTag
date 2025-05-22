# NearTag API

Backend service for the NearTag device management system. This API provides endpoints for user management, device tracking, and location services.

## 🚀 Features

- User authentication with JWT
- Device management and tracking
- Real-time location updates
- Profile management
- Role-based access control
- Swagger documentation

## 🛠 Tech Stack

- Node.js
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JSON Web Tokens
- Zod for validation
- Swagger/OpenAPI

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/neartag.git
cd neartag
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/neartag"
SECRET_KEY="your-secret-key"
PORT=3000
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
```

## 📚 API Documentation

The API documentation is available through Swagger UI at:
```
http://localhost:3000/api-docs
```

### Main Endpoints

#### Authentication
- `POST /register` - Create new user account
- `POST /login` - User authentication
- `POST /refresh-token` - Refresh access token
- `POST /signOut` - User logout

#### User Management
- `PATCH /users/:userId/username` - Update username
- `PATCH /users/:userId/email` - Update email
- `PATCH /users/:userId/phone-number` - Update phone number
- `PATCH /users/:userId/password` - Update password
- `GET /users/:userId` - Get user details

#### Device Management
- `POST /assign` - Assign device to user
- `PATCH /devices/:deviceId/lost` - Mark device as lost
- `GET /users/:userId/devices` - Get user's devices
- `DELETE /devices/:deviceId` - Remove device
- `GET /devices/:deviceId/location` - Get device location

## 🔐 Authentication

The API uses JWT for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-token>
```


## 📝 Error Handling

The API uses standard HTTP status codes and returns consistent error objects:
```json
{
  "error": "Error message",
  "detail": "Additional error details"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👥 Authors

- [ripOzziel](https://github.com/ripOzziel)
- [Hector-Y-SM](https://github.com/Hector-Y-SM)

