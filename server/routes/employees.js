import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const router = express.Router();

const dbPromise = open({
  filename: "./data.db",
  driver: sqlite3.Database
});

// API ENDPOINTS

router.get('/', async (req, res) => {
  const db = await dbPromise;   // Allows database to load before attempting query.
  const employees = await db.all("SELECT * FROM Employees;");
  res.send(employees);
});

router.post('/', async (req, res) => {
  const db = await dbPromise;
  const { name, code, profession, color, city, branch, active } = req.body;
  const sqlInsert = 
    "INSERT INTO Employees (name, code, profession, color, city, branch, active) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const employee = [name, code, profession, color, city, branch, active]; // Receives these values from the front end.
  db.run(sqlInsert, employee);
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const db = await dbPromise;
  const { id } = req.params;
  const foundEmployee = await db.get(`SELECT * FROM Employees WHERE id = ${id}`);

  res.send(foundEmployee);
});

router.delete('/:id', async (req, res) => {
  const db = await dbPromise;
  const { id } = req.params;
  const removeEmployee = `DELETE FROM Employees WHERE id = ${id}`;
  db.run(removeEmployee, err => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/');
});

router.patch('/:id', async (req, res) => {
  const db = await dbPromise;
  const { id } = req.params;
  const { name, code, profession, color, city, branch, active } = req.body;
  const updateEmployee = `UPDATE Employees SET name = ?, code = ?, profession = ?, color = ?, city = ?, branch = ?, active = ? WHERE id = ${id}`;
  db.run(updateEmployee, [name, code, profession, color, city, branch, active], (error, result) => {
    if(error) {
      console.log(error);
    }
  });
  res.send(`Employee with id ${id} has been updated.`);
});

export default router;
