# Food Delivery System

A complete food delivery web application built with React, TypeScript, and Tailwind CSS.

## Features

- **User Registration & Authentication**: Secure user registration and login system
- **Menu Browsing**: Browse through 10 delicious food items with beautiful images
- **Shopping Cart**: Add items to cart, modify quantities, and remove items
- **Order Management**: Place orders and view order confirmation
- **Admin Panel**: Admin interface to view and manage customer orders
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Demo

Live demo:

## Admin Access

- Email: admin@fooddelivery.com
- Password: admin123

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd food-delivery-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. Simply push to the main branch and GitHub Actions will build and deploy your site.

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions

## Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── data/               # Static data (food items)
└── App.tsx             # Main application component
```

## Features Overview

### User Flow
1. **Registration**: New users create an account with username, email, and password
2. **Login**: Users authenticate with their credentials
3. **Menu**: Browse available food items with images and descriptions
4. **Cart**: Add items to cart and manage quantities
5. **Checkout**: Place orders and receive confirmation

### Admin Flow
1. **Admin Login**: Access admin panel with special credentials
2. **Dashboard**: View order statistics and metrics
3. **Order Management**: View all customer orders and update status
4. **Order Tracking**: Mark orders as confirmed or delivered

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
