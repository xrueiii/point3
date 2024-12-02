# Music Classroom Reservation Platform

A multi-user music classroom reservation platform with distinct user and admin roles. The platform features scheduling, room details, automated email notifications, and an admin dashboard for managing bookings.

## Features

- Multi-user support with distinct user and admin roles.
- Scheduling and viewing classroom availability.
- Detailed room information for easy decision-making.
- Automated email notifications upon successful bookings.
- Administrator dashboard for managing and monitoring booking statuses, with manual adjustment options for reservations.

## Installation and Testing

To install and test the application locally, follow these steps:

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root of the project and add the following environment variables:
```env
POSTGRES_URL=postgresql://HankWu37878:0pZn8WfrVqMI@ep-dawn-sun-82751177.ap-southeast-1.aws.neon.tech/point3?sslmode=required
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run Database Migrations
```bash
yarn migrate
```

### 5. Start the Application
```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

The live version of the application can be accessed at:
[point3.vercel.app](https://point3.vercel.app)

---

## Technologies Used

- **Next.js** for server-side rendering and React-based UI development.
- **PostgreSQL** for database management.
- **Vercel** for deployment and hosting.

## Contributing

Contributions are welcome! Feel free to submit a pull request or report issues.

## License

This project is licensed under the MIT License.
```

Replace `<repository_url>` and `<repository_folder>` with your actual repository's URL and folder name. This document follows standard `README.md` practices, making it clear for developers to set up and work with your project.
