import React from 'react';

const EmployeeList = ({ employees, team, addToTeam }) => {
  return (
    <div className="employee-list">
      <h1>Employees</h1>
      <ul>
        {employees.map(employee => {
          const isDisabled = team.some(member => member.id === employee.id);
          return (
            <li key={employee.id} className={isDisabled ? 'disabled' : ''}>
              {employee.first_name} {employee.last_name} - Age: {employee.age}
              {!isDisabled && (
                <button onClick={() => addToTeam(employee)}>ADD</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmployeeList;
