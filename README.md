# Website Builder

A powerful website builder application with a drag-and-drop interface and customizable templates.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables by copying `.env.example` to `.env` and updating the values:
   ```bash
   cp .env.example .env
   ```
4. Set up the database:
   ```bash
   npx prisma migrate reset --force
   npx prisma db push
   npm run seed
   ```

### Development

Run both the client and server in development mode:

```bash
npm run dev
```

This will start:
- Client on http://localhost:5173
- Server on http://localhost:3001

### Building for Production

```bash
npm run build
```

## Project Structure

```
├── prisma/               # Database schema and migrations
├── server/              # Backend server code
│   ├── index.js         # Server entry point
│   └── seed.js          # Database seeding
├── src/                 # Frontend source code
│   ├── components/      # React components
│   ├── config/          # Configuration files
│   ├── data/           # Static data and templates
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
└── package.json
```