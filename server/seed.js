import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const prisma = new PrismaClient();

async function main() {
  try {
    // Read SQL file
    const sqlPath = path.join(__dirname, '..', 'prisma', 'seed.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Split SQL into individual statements and clean them
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .map(s => s.replace(/\n/g, ' ').replace(/\s+/g, ' '));

    // Execute each statement
    for (const statement of statements) {
      await prisma.$executeRawUnsafe(`${statement};`);
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();