import React from "react";

const employees = [
  { name: "John", salary: 250, months: ["January", "February", "March"] },
  { name: "Jane", salary: 350, months: ["April", "May", "June"] },
  { name: "Bob", salary: 400, months: ["July", "August", "September"] },
  { name: "Alice", salary: 200, months: ["October", "November", "December"] },
];

const FilteredEmployees = () => {
  const filteredEmployees = employees.filter(
    (employee) => employee.salary > 300
  );

  return (
      <div>
          <p>Filter workinh here</p>
      {filteredEmployees.map((employee) => (
        <div key={employee.name}>
          <p>Name: {employee.name}</p>
          <p>Months: {employee.months.join(", ")}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FilteredEmployees;
