// Define a "employee" variable and assign it to an Object containing "name" and "streetAddress" keys
const employee = {
  name: '',
  streetAddress: '',
};
// Returns an "employee" with the original key value pairs and the new key value pair doesnt muatate/modifiy "employee" just returns a clone
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
// Updates "employee" with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
// Deletes `key` from a clone of "employee" and returns the new "employee" doesnt muatate/modifiy original "employee"
function deleteFromEmployeeByKey(employee, key) {
   const newEmployee = { ...employee };
   delete newEmployee[key];
   return newEmployee;
}
// Returns "employee" without the delete key/value pair mutates/modifies object "employee"
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete employee[key];
    delete newEmployee[key];
    return employee;
}