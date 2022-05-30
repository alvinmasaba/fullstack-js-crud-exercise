import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors"; // Use to access backend API from React.
import bodyParser from "body-parser"; // Allows access to body of request object.

import employeesRoutes from './routes/employees.js';

const app = express();

const dbPromise = open({
  filename: "./data.db",
  driver: sqlite3.Database
});

// Allow cross-origin API calls.
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use('/employees', employeesRoutes);

const setup = async () => {
  const db = await dbPromise
  await db.migrate()
  app.listen(5000, () => {
    console.log("Server is running on port 5000!");
  })
}

setup()
