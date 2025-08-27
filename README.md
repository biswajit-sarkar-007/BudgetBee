# Expense Tracker

A modern, full-stack expense tracking application built with Next.js, TypeScript, and Prisma. This application helps users track their expenses, visualize spending patterns, and gain insights into their financial habits.

## Features

- 📊 Expense tracking and management
- 📈 Interactive charts and visualizations
- 🔍 AI-powered spending insights
- 🌓 Light/Dark mode support
- 🔒 User authentication with Clerk
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Authentication**: Clerk
- **Charts**: Chart.js with react-chartjs-2
- **AI**: OpenaRouterAI API integration

## Project Structure

```
├── app/                    # App router pages and API routes
│   ├── actions/           # Server actions for data fetching and mutations
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── sign-in/           # Authentication pages
├── components/            # Reusable UI components
│   ├── AddNewRecord.tsx   # Form to add new expense records
│   ├── AllInsights.tsx    # Displays AI-powered spending insights
│   ├── BarChart.tsx       # Chart component for expense visualization
│   ├── RecordHistory.tsx  # List of all expense records
│   └── ThemeToggle.tsx    # Light/Dark mode toggle
├── contexts/              # React context providers
├── lib/                   # Utility functions and configurations
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expnse-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   DATABASE_URL="your_database_connection_string"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   OPENROUTER_API_KEY="your_openrouter_api_key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Environment Variables

- `DATABASE_URL` - Database connection URL
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key for authentication
- `CLERK_SECRET_KEY` - Clerk secret key
- `OPENROUTERAI_API_KEY` - OpenrouterAI API key for AI-powered insights

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Authentication by [Clerk](https://clerk.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Charts by [Chart.js](https://www.chartjs.org/)
