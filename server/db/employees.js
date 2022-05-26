const knex = require("./knex");  // Uses relative path to import own connected instance of knex rather than module.

function createEmployee(employee) {
  return knex("employees").insert(employee);
};

function getAllEmployees() {
  return knex("employees").select("*");
};

function deleteEmployee(id) {
  return knex("employees").where("id", id).del();
};

function updateEmployee(id, employee) {
  return knex("employees").where("id", id).update(car);
};

module.exports = {
  createEmployee,
  getAllEmployees,
  deleteEmployee,
  updateEmployee
}
