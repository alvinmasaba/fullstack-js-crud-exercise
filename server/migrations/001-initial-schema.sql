-- Up

CREATE TABLE Employees (
  id INTEGER PRIMARY KEY,
  name STRING,
  code STRING,
  color STRING,
  city STRING,
  branch STRING,
  assigned STRING
);

-- Down

DROP TABLE Employees;
